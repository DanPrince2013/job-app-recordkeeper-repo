// src/components/inputs/DateTimeInput.js
import React from 'react';

const DateTimeInput = ({ id, label, value, onChange, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="datetime-local"
      id={id}
      name={id}
      className="form-control"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);

export default DateTimeInput;
