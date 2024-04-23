import React, { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios';

const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState([]);

  const USER_API = "https://copartners.in:5132/api/Experts";
  const SIGNIN_API = "https://copartners.in:7188/CoPartnerGateway/SignIn/ValidateOTP"

  const auth_key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE1MDM3NDExLWI5MTQtNDliNy05ZGJkLTU4OTE3YWJkZTU3ZiIsIm5iZiI6MTcxMzc4NzgyMCwiZXhwIjoxNzEzNzg5MDIwLCJpYXQiOjE3MTM3ODc4MjB9.G7e5PAMcb8x_pDia5Swyx6pHVTNykfELQnF5C8MIEBM"

  useEffect(() => {
    axios.get(USER_API, {
      headers: {
        Authorization: `Bearer ${auth_key}`
      }
    }).then((res) => {
      console.log('Fetching API for user', USER_API);
      setUserData(res.data.data);
    },
    // axios.post(SIGNIN_API, postData, {
    //   headers: {
    //     Authorization: `Bearer ${}`,
    //     'Content-Type': 'application/json'
    //   }
    // })
    // .then((response) => {
    //   console.log('RESPONSE JSON', response.json())
    // })
    // .catch((error) => {
    //   console.log('ERROR TRIGGER', error)
    // })
    )
  }, [])

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

// 