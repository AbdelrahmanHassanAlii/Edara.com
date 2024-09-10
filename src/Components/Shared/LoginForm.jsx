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

  const [loadingData, setLoadingData] = useState([]);

  const handleChange = (e) => {
    setLoginInputs({ ...loginInputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await login(loginInputs);
      localStorage.setItem("user", JSON.stringify(res));
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    setLoadingData(loginData);  // Set login form input fields
  }, []);

  return (
    <div className='login-inputs'>
      {/* Pass loginInputs to Inputs as values */}
      <Inputs inputs={loadingData} handleChange={handleChange} values={loginInputs} />
      <ConfirmButton handleSubmit={handleSubmit} />
    </div>
  )
}
