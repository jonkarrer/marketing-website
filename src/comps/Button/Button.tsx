import React from 'react';
import './Button.css';
interface ButtonProps {
  children: string;
  pad: number;
  width: number;
  popUpState: React.Dispatch<React.SetStateAction<boolean>> | any;
}
const Button = ({ children, pad, width, popUpState }: ButtonProps) => {
  return (
    <div
      onClick={() => popUpState(true)}
      className="Button"
      style={{
        color: '#fffffe',
        padding: `${pad}px`,
        width: `${width}vw`,
        fontSize: '1.8vw',
        borderRadius: '.2em',
      }}
    >
      {children}
    </div>
  );
};

export default Button;
