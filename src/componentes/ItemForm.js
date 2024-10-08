import React from 'react';
import './css/ItemForm.css';

export default function ItemForm({ image, title, content, price, quantity, onIncrease, onDecrease }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Preço: R${price}</p>
      <button onClick={onIncrease}>+</button>
      <p>{quantity}</p>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}
