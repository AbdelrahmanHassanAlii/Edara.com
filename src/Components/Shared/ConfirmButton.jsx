/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

export default function ConfirmButton({ handleSubmit }) {
  return (
    <div className="confirm-button">
      <button type="button" className="btn btn-primary" onClick={handleSubmit} >Confirm</button>
    </div>
  )
}
