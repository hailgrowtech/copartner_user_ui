import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const USER_API = "https://copartner.in:5132/api/Experts";

  useEffect(() => {
    axios.get(USER_API).then((res) => {
      console.log('Fetching API for user', USER_API);
      setUserData(res.data.data)
    })
  }, [])

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

