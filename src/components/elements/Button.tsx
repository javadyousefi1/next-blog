import { ReactNode } from "react";

type ButtonPropType = {
  children: ReactNode;
  type?: "button" | "submit",
  theme?: "primary" | "white",
  className?: string,
  disabled?: boolean,
}
const Button: React.FC<ButtonPropType> = ({ children, className, type = "button", theme = "white", disabled = false }) => {

  const buttonStyle = `text-white px-3 py-2  w-full disabled:cursor-not-allowed bg-blue disabled:bg-gray-500 disabled:opacity-50 transition linear duration-150 rounded-md ${className}`;

  return <button disabled={disabled} type={type} className={buttonStyle}>{children}</button>;
};

export default Button;
