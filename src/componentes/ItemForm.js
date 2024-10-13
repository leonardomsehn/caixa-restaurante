import React from 'react';
import './css/ItemForm.css';

export default function ItemForm({ image, title, content, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="imagem-card" />
      <h2>{title}</h2>
      <p>{content}</p>
      <h4>R${price}</h4>
      <div className="quantity">
        <button className="decrease" onClick={onDecrease}>-</button>
        <p>{quantity}</p>
        <button className="increase" onClick={onIncrease}>+</button>
      </div>
    </div>
  );
}
