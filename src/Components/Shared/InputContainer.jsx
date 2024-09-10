import "../../assets/CSS/Shared/input-container.css";

export default function InputContainer({ label, name, onChange, type, placeholder, value }) {
  return (
    <div className="input-container">
      <label>{label || "Label"}</label>
      <input 
        type={type || "text"} 
        name={name || ""} 
        placeholder={placeholder || "Placeholder"} 
        value={value || ""} 
        onChange={onChange || (() => {})} 
      />
    </div>
  );
}
