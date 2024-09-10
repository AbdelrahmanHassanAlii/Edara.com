/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import InputContainer from './InputContainer';

export default function Inputs({ inputs, handleChange, values }) {
  return (
    <div className='inputs'>
      {
        inputs.map((input, index) => (
          <InputContainer 
            key={index}
            label={input.label} 
            name={input.name} 
            type={input.type} 
            placeholder={input.placeholder} 
            value={values[input.name] || ''} 
            onChange={handleChange}
          />
        ))
      }
    </div>
  )
}
