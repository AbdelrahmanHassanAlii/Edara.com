/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { loginData } from './../../Helper/Functions/loginInputs';
import Inputs from './Inputs';

export default function LoginForm() {

  const [loginInputs, setLoginInputs] = useState({
    user_name: "",
    password: ""
  });

  const [lodinData, setLoginData] = useState([]);

  const handleChange = (e) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
    console.log(loginInputs);
  };

  useEffect(() => {
    setLoginData(loginData);
  }, []);

  return (
    <div className='login-inputs'>

      <Inputs inputs={lodinData} handleChange={handleChange} />
    </div>
  )
}
