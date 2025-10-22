import { NavLink } from 'react-router-dom'
import './Button.css'

interface IButton {
  text: string
  color?: "primary" | "grey" | "white" | "grey2"
  type?: "mini" | "mini2" | "small" | "small2" | "normal" | "normal2" | "large" | "large2" | "large3" | "large5"
  route?: string
  disabled?:boolean
}

function Button({ text, color = "primary", type = "normal", route, disabled }: IButton) {
    
  const btnStyle = `btn ${type} ${color}`

  const buttonContent = route ? (
    <NavLink to={route}>
      <button className={btnStyle}>{text}</button>
    </NavLink>
  ) : (
    <button className={btnStyle} disabled={disabled} type='submit'>{text}</button>
  );

  return buttonContent;
}

export default Button
