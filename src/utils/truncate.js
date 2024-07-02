// src/utils/truncate.js
export const truncate = (text, maxLength = 30) => {
    if (!text) return ''; // Handle undefined or null text
    return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
  };
  