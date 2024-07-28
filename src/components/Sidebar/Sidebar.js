import React from 'react';
import './Sidebar.css';
import Divider from '@mui/material/Divider';


function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Pila</h2>
      <Divider orientation="horizontal" sx={{ backgroundColor: 'white' }}/>
      <ul className="menu-items">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#expenses">Despesas</a></li>
        <li><a href="#incomes">Receitas</a></li>
        <li><a href="#categories">Categorias</a></li>
      </ul>
      <ul className="menu-bottom">
        <Divider orientation="horizontal" sx={{ backgroundColor: 'white' }}/>
        <li><a href="#applications">Configurações</a></li>
      </ul>
    </div>
  );
}

export default Sidebar;
