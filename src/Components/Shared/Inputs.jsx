import React from 'react';
import InputContainer from './InputContainer';

export default function Inputs({ inputs, handleChange, values = {} }) {
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
            value={values[input.name] || ''}  // Fallback to empty string if value is undefined
            onChange={handleChange}
          />
        ))
      }
    </div>
  )
}
