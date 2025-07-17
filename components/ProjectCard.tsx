
import React from 'react';
import { motion, Variants } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { title, description, techStack } = project;

  return (
    <motion.div 
      variants={cardVariants}
      className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-xl dark:shadow-black/20 transform transition-all duration-300"
      whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
    >
      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, index) => (
          <span key={index} className="bg-cyan-100/60 dark:bg-slate-700 text-cyan-800 dark:text-cyan-300 text-xs font-semibold px-2.5 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;