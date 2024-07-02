// src/components/inputs/SelectInput.js
import React from 'react';

const SelectInput = ({ id, label, value, onChange, options, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      name={id}
      className="form-control"
      value={value}
      onChange={onChange}
      required={required}
    >
      <option value="" disabled>Select {label}</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

export default SelectInput;
