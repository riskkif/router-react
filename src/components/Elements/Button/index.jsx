import React, { Children } from "react";

const Button = (props) => {
    const { children, variant = "bg-blue-600", onClick, type= "button"} = props;
    const classNames = `h-10 px-6 font-semibold rounded-md ${variant} text-white`;
    return (
      <button className={classNames} 
      type={type}
      onClick={onClick}>
        {children}
      </button>
    )
  }

 
  export default Button