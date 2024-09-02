/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { signData } from "../../Helper/Functions/signInputs";
import Inputs from "./Inputs";
import ConfirmButton from "./ConfirmButton";
import { sign } from "../../Helper/Apis/Shared/sign";

export default function SignForm() {
  const [userdata, setUserdata] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    confirm_password: "",
  });

  const [signInputs, setSignInputs] = useState([]);

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(userdata);

    const { confirm_password, ...formData } = userdata;
    console.log(formData);

    try {
      const res = await sign(formData);
      console.log("User registered successfully:", res);
    } catch (error) {
      console.log("Error registering user:", error.response.data);
    }
  };

  useEffect(() => {
    setSignInputs(signData);
  }, []);

  return (
    <div className="sign-inputs">
      <Inputs inputs={signInputs} handleChange={handleChange} />
      <ConfirmButton handleSubmit={handleSubmit} />
    </div>
  );
}
