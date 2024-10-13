import React from 'react';
import './css/ItemForm.css';

export default function ItemForm({ image, title, content, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <h3>R${price}</h3>
      <div className="quantity">
        <button className="decrease" onClick={onDecrease}>-</button>
        <p>{quantity}</p>
        <button className="increase" onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
