import React, { useState, useEffect } from 'react';
import { signData } from '../../Helper/Functions/signInputs';
import Inputs from './Inputs';

export default function SignForm() {

  const [userdata, setUserdata] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    confirm_password: ""
  });

  const [signInputs, setSignInputs] = useState([]);

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
    console.log(userdata);
  };

  useEffect(() => {
    setSignInputs(signData);
  }, []);

  return (
    <div className='sign-inputs'>
      <Inputs inputs={signInputs} handleChange={handleChange} />
    </div>
  )
}