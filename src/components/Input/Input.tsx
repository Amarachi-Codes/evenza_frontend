import "./Input.css";

interface Iinput{
    label:string
    type: "text" | "password" | "email" | "number" 
    value?: string
    onChange?: any
    aria?:string
}

function Input({label, type, value, onChange, aria}:Iinput) {
  return (
    <>
      <div className="input">
        <label htmlFor={label}>{label}</label>
        <input type={type} value={value} onChange={onChange} name={aria} id={aria} aria-describedby={aria} required/>
      </div>
    </>
  );
}

export default Input;