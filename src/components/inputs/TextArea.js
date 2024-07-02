// src/components/inputs/TextArea.js
import React from 'react';

const TextArea = ({ id, label, value, onChange, placeholder, required }) => (
  <div className="form-group">
    <label htmlFor={id}>{label}</label>
    <textarea
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

export default TextArea;
