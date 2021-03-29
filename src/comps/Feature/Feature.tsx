import React from 'react';
import './Feature.css';

interface FeatProps {
  children: string;
  image: string;
}
const Feature = ({ children, image }: FeatProps) => {
  return (
    <div className="Feature">
      <div className="image">
        <img src={image} alt="socks" />
      </div>
      <h3>{children}</h3>
    </div>
  );
};

export default Feature;
