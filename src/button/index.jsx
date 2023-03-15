import React from 'react'
import "./button.css"

const Button = (props) => {
    const {btntype , btnText , btnonclick,customclass} = props;
  return ( 
    <div className={`${btntype==='PRIMARY' ? `button primary-btn ${customclass}`: `button secondary-btn ${customclass}` }`} onClick={btnonclick}>{btnText}</div>
  )
}

export default Button