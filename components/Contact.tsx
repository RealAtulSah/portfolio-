
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          I'm currently open to new opportunities and collaborations. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        <a 
          href={`mailto:${PERSONAL_INFO.email}`} 
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 mb-12 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/20"
        >
          Say Hello
        </a>
        <div className="flex justify-center space-x-6">
          {SOCIAL_LINKS.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.2, y: -5 }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

export default Contact;
