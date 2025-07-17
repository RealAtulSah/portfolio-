import React from 'react';
import { motion, Variants } from 'framer-motion';
import Section from './Section';
import { EDUCATION } from '../constants';
import { WorkIcon, EducationIcon } from './icons';

const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, },
    },
};
  
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const Education: React.FC = () => {
  return (
    <Section id="education" title="My Education">
      <div className="relative container mx-auto px-4 py-8">
        <div 
          className="absolute w-1 h-full bg-gray-300 dark:bg-slate-700 top-0 left-6 md:left-1/2 md:-translate-x-1/2"
          aria-hidden="true"
        />
        
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="space-y-12"
        >
          {EDUCATION.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div key={item.id} className="relative" variants={itemVariants}>
                <div className="absolute top-0 left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center ring-8 ring-slate-50 dark:ring-gray-900">
                    {item.type === 'Work' ? <WorkIcon className="w-6 h-6 text-white" /> : <EducationIcon className="w-6 h-6 text-white" />}
                  </div>
                </div>
                
                <div className={`flex ${isLeft ? 'md:justify-start' : 'md:justify-end'}`}>
                    <div className="w-full pl-20 md:pl-0 md:w-5/12">
                        <div className={`bg-white dark:bg-slate-800 rounded-lg shadow-lg hover:shadow-xl dark:shadow-black/20 transition-all duration-300 p-6 ${isLeft ? '' : 'md:text-left'}`}>
                            <p className="text-sm font-medium text-cyan-500 dark:text-cyan-400 mb-1">{item.date}</p>
                            <h3 className="mb-2 font-bold text-slate-800 dark:text-white text-xl">{item.title}</h3>
                            <p className="mb-3 text-sm font-semibold text-slate-600 dark:text-slate-400">{item.institution}</p>
                            <p className="text-sm leading-snug tracking-wide text-slate-700 dark:text-slate-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};
export default Education;