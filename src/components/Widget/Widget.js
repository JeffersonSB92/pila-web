import React from 'react';
import './Widget.css';

function Widget({ title, value, growth }) {
  return (
    <div className="widget-1">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{growth}</span>
    </div>
  );
}

export default Widget;
