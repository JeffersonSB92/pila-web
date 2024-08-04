import React from 'react';
import './GoalsCard.css';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

function GoalsCard( { title }) {
  return (
    <div className="card">
      <AssignmentTurnedInIcon style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}/>
      <h3>{title}</h3>
    </div>
  );
}

export default GoalsCard;