import React from 'react';
import InputContainer from './InputContainer';

export default function Inputs({ inputs, handleChange }) {
  return (
    <div className='inputs'>
      {
        inputs.map((input, index) => (
          <InputContainer 
            key={index}
            label={input.label} 
            name={input.name} 
            type={input.type} 
            placeHoolder={input.placeHoolder} 
            onChange={handleChange}
          />
        ))
      }
    </div>
  )
}