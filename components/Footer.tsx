
import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="text-center py-8 text-gray-500 dark:text-gray-500 border-t border-gray-200 dark:border-gray-800">
      <p>&copy; {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
