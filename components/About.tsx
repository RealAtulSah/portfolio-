
import React from 'react';
import Section from './Section';
import { PERSONAL_INFO } from '../constants';
import profilePic from '../assets/profile.png'; // Adjust the path to go up one level from 'components'

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-slate-100 dark:bg-gray-800 shadow-lg border-4 border-gray-200 dark:border-gray-700 overflow-hidden">
            <img 
              src={profilePicture} 
              alt={`Profile picture of ${PERSONAL_INFO.name}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
            {PERSONAL_INFO.about}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;
