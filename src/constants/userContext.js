import React, { createContext, useState, useEffect, useContext } from 'react';

export const UserContext = createContext();

export const useUserSession = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tokenPresent, setTokenPresent] = useState(false);

  useEffect(() => {
    const checkTokenAndFetchUserData = async () => {
      const userId = sessionStorage.getItem('userId');

      if (userId) {
        setTokenPresent(true);
        try {
          const response = await fetch(`https://copartners.in:5131/api/User/${userId}`);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          console.log(data.data)
          setUserData(data.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    const intervalId = setInterval(() => {
      const userId = sessionStorage.getItem('userId');
      if (userId && !tokenPresent) {
        clearInterval(intervalId);
        checkTokenAndFetchUserData();
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [tokenPresent]);

  return (
    <UserContext.Provider value={{ userData, loading, error }}>
      {children}
    </UserContext.Provider>
  );
};
