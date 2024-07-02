// src/components/inputs/TextInput.js
import React from 'react';

const TextInput = ({ id, label, value, onChange, placeholder, required }) => (
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
      required={required}
    />
  </div>
);

export default TextInput;
