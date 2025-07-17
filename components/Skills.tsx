
import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <Section id="skills" title="Tech Stack">
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-slate-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg shadow-sm hover:shadow-md dark:hover:bg-gray-700 dark:hover:text-white transition-all cursor-default"
            variants={skillVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
