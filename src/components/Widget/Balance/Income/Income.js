import React from 'react';
import './Income.css';
import NorthEastIcon from '@mui/icons-material/NorthEast';

function Income() {
  return (
    <div className="income">
      <NorthEastIcon style={{ color: 'green', fontSize: 30, fontWeight: 'bold' }}/>
      <h2>R$ 5.000</h2>
    </div>
  );
}

export default Income;