import React from 'react';
import './Balance.css';
import Income from './Income/Income';
import Expenses from './Expenses/Expenses';

function Balance() {
  return (
    <div className="balance">
      <h2>Receitas e Despesas Hoje</h2>
      <Income />
      <Expenses />
    </div>
  );
}

export default Balance;