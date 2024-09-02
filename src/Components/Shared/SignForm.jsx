import React from 'react'
import { useState } from "react";
import InputContainer from './InputContainer'

export default function SignForm() {

  const [userdata, setUserdata] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    confirm_password: ""
  })

  const handleChange = (e) => {
    console.log(`${e.target.name} : ${e.target.value}`)
    setUserdata({ ...userdata, [e.target.name]: e.target.value })
    console.log(userdata)
  }

  return (
    <div>
      <InputContainer label="First name" name="first_name" type="text" onChange={handleChange} placeHoolder="Your first name" />
      <InputContainer label="Last name" name="last_name" type="text" onChange={handleChange} placeHoolder="Your last name" />
      <InputContainer label="User name" name="user_name" type="text" onChange={handleChange} placeHoolder="Your user name" />
      <InputContainer label="Password" name="password" type="password" onChange={handleChange} placeHoolder="Your password" />
      <InputContainer label="Confirm password" name="confirm_password" type="password" onChange={handleChange} placeHoolder="Confirm your password" />
    </div>
  )
}
