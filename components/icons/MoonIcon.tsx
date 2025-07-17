
import React from 'react';

const MoonIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 004.472-.69a.75.75 0 01.82.162l.805.806a.75.75 0 01-.162.82A11.94 11.94 0 0118 18a12 12 0 01-12-12 11.94 11.94 0 011.528-6.472l.806.805z"
      clipRule="evenodd"
    />
  </svg>
);

export default MoonIcon;
