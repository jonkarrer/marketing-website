import React from 'react';
import './Button.css';
interface ButtonProps {
  children: string;
  pad: number;
  width: number;
}
const Button = ({ children, pad, width }: ButtonProps) => {
  return (
    <div
      className="Button"
      style={{
        color: '#fffffe',
        padding: `${pad}px`,
        width: `${width}px`,
        fontSize: '1.5em',
        borderRadius: '.2em',
      }}
    >
      {children}
    </div>
  );
};

export default Button;
