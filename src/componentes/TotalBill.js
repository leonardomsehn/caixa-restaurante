import React from 'react';
import './css/ItemForm.css';

export default function TotalBill({ total, people, perPerson }) {
  return (
    <div className="bill">
      <h2>R$50,00{total}</h2>
      <h2>{people}</h2>
      <h2>{perPerson}</h2>
    </div>
  );
}
