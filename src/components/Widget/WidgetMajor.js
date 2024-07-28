import React from 'react';
import './WidgetMajor.css';

function WidgetMajor({ title, value, growth }) {
  return (
    <div className="widget-2">
      <h3>{title}</h3>
      <p>{value}</p>
      <span>{growth}</span>
    </div>
  );
}

export default WidgetMajor;
