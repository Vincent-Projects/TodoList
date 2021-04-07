import React from "react";

interface ButtonProps {
  handleClick: () => any,
  children: React.ReactElement
}

const Button = ({ handleClick, children }: ButtonProps) => {
  return (
    <div onClick={handleClick}>
      {children}
    </div>
  );
};

export default Button;