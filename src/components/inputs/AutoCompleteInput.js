// src/components/inputs/AutoCompleteInput.js
import React from 'react';

const AutoCompleteInput = ({ id, label, value, onChange, placeholder, options }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <input
      type="text"
      id={id}
      name={id}
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      list={`${id}-list`}
    />
    <datalist id={`${id}-list`}>
      {options.map((option, index) => (
        <option key={index} value={option} />
      ))}
    </datalist>
  </div>
);

export default AutoCompleteInput;
