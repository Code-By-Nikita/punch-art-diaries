import React from 'react';
import "../style/button1Style.css" ;

const Button1 = ({ icon: Icon, label, onClick, iconProps }) => {
  return (
    <div>
      <button onClick={onClick} className="button1">
      {Icon && <Icon {...iconProps} className="button-icon" />}
      <span>{label}</span>
    </button>
    </div>
  )
}

export default Button1
