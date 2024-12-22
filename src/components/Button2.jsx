import React from 'react'

const Button2 = () => {
  return (
        <div>
      <button onClick={onClick} className="button1">
      {Icon && <Icon />}
      <span>{label}</span>
    </button>
    </div>
  )
}

export default Button2
