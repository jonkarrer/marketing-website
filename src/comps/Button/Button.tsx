import React from 'react';

interface ButtonProps {
  children: string;
  pad: number;
  width: number;
}
const Button = ({ children, pad, width }: ButtonProps) => {
  return (
    <div
      className=".Button"
      style={{
        color: '#fffffe',
        background: 'black',
        padding: `${pad}px`,
        width: `${width}px`,
        fontSize: '1.5em',
      }}
    >
      {children}
    </div>
  );
};

export default Button;
