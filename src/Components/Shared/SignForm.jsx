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
    confirm_password: ""
  });

  const [signInputs, setSignInputs] = useState([]);

  const handleChange = (e) => {
    setUserdata({ ...userdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { confirm_password, ...formData } = userdata;  // Remove confirm_password for submission

    try {
      const res = await sign(formData);
      console.log("User registered successfully:", res);
    } catch (error) {
      console.log("Error registering user:", error.response.data);
    }
  };

  useEffect(() => {
    setSignInputs(signData);  // Set sign-up form input fields
  }, []);

  return (
    <div className="sign-inputs">
      {/* Pass userdata to Inputs as values */}
      <Inputs inputs={signInputs} handleChange={handleChange} values={userdata} />
      <ConfirmButton handleSubmit={handleSubmit} />
    </div>
  );
}
