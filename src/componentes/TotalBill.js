import React from 'react';
import './css/ItemForm.css';

export default function TotalBill({ total, people, perPerson }) {
  return (
    <div className="bill">
      <p>Total: R${total}</p>
      <p>Para {people} pessoas</p>
      <p>Valor por pessoa: R${perPerson}</p>
    </div>
  );
}
