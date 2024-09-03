/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { loginData } from './../../Helper/Functions/loginInputs';
import Inputs from './Inputs';
import ConfirmButton from './ConfirmButton';
import { login } from '../../Helper/Apis/Shared/login';

export default function LoginForm() {

  const [loginInputs, setLoginInputs] = useState({
    user_name: "",
    password: ""
  });

  const [lodingData, setLoginData] = useState([]);

  const handleChange = (e) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    
    try {
      const res = await login(loginInputs);
      console.log(res); 
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    setLoginData(loginData);
  }, []);

  return (
    <div className='login-inputs'>
      <Inputs inputs={lodingData} handleChange={handleChange} />
      <ConfirmButton handleSubmit={handleSubmit} />
    </div>
  )
}
