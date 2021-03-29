import React from 'react';
import './Modal.css';
import Button from '../Button/Button';

interface ModalProps {
  popUpState: React.Dispatch<React.SetStateAction<boolean>>;
}
const Modal = ({ popUpState }: ModalProps) => {
  return (
    <div className="Modal">
      <section className="left-side">
        <article style={{ textAlign: 'left', margin: '20px' }}>
          <h4>FREE DISCOUNT</h4>
          <h1>Thank you for visiting our website</h1>
          <p>
            We love our socks and we hope that you will enjoy them as well. They
            are perfect for hiking, jogging, or around the house. Use this
            discount for your first purchase.
          </p>
        </article>
        <div className="discount">
          <h1>30% off</h1>
          <p>Your first purchase</p>
        </div>
        <h3 style={{ marginBottom: '20px', marginLeft: '20px' }}>
          Put your email below to recieve the coupon
        </h3>
        <form action="get" style={{ marginLeft: '20px' }}>
          <input
            className="email"
            type="email"
            placeholder="example@host.com"
            required
          />
          <div className="button-wrapper">
            <Button pad={10} width={150} popUpState={null}>
              Submit
            </Button>
          </div>
        </form>
      </section>
      <section className="right-side">
        <div className="close-modal" onClick={() => popUpState(false)}>
          X
        </div>
        <img src="./assets/moisture.jpg" alt="socks and heels" />
      </section>
    </div>
  );
};

export default Modal;
