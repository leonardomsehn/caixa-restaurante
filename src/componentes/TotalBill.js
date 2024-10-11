import React from 'react';
import './css/ItemForm.css';

export default function TotalBill({ total, people, perPerson }) {
  return (
    <div className="bill">
      <h2>Total: {total}</h2>
      <h2>Para {people} pessoas</h2>
      <h2>Valor por pessoa: {perPerson}</h2>
    </div>
  );
}
