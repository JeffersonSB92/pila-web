import React from 'react';
import './Expenses.css';
import SouthWestIcon from '@mui/icons-material/SouthWest';

function Expenses() {
  return (
    <div className="expenses">
      <SouthWestIcon style={{ color: 'red', fontSize: 30, fontWeight: 'bold' }}/>
      <h2>R$ 3.500</h2>
    </div>
  );
}

export default Expenses;