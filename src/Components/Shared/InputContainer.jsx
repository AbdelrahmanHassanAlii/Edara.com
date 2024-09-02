/* eslint-disable react/prop-types */
import "../../assets/CSS/Shared/input-container.css";

export default function InputContainer({ label, name, onChange, type, placeHoolder }) {
  return (
    <div className="input-container">
      <label>{label || "Label"}</label>
      <input 
        type={type || "text"} 
        name={name || ""} 
        placeholder={placeHoolder || "Placeholder"} 
        onChange={onChange || (() => {})} 
      />
    </div>
  );
}