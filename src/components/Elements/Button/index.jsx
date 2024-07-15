import { Children } from "react";

const Button = (props) => {
    const { children, variant = "bg-blue-600" } = props;
    const classNames = `h-10 px-6 font-semibold rounded-md ${variant} text-white`;
    return (
      <button className={classNames} type="submit">
        {children}
      </button>
    )
  }

  export default Button