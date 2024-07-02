// src/components/Header.js
import React from 'react';
import '../styles/Header.css';

const Header = () => {
  const buildDate = process.env.REACT_APP_BUILD_DATE;

  return (
    <header>
      <h1>Job Application Tracker</h1>
      <small>Last build date/time: {buildDate}</small>
    </header>
  );
};

export default Header;
