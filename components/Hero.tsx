import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { useTypingEffect } from '../hooks/useTypingEffect';

const TITLES = ["Computer Teacher", "Full Stack Developer"];

const Hero: React.FC = () => {

    const displayedText = useTypingEffect(TITLES);

    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 }
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    return (
        <motion.section 
            id="home" 
            className="h-screen flex flex-col justify-center items-center text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-4"
            >
                {PERSONAL_INFO.name}<span className="text-cyan-400">.</span>
            </motion.h1>
            <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 mb-8 h-8" // Set height to prevent layout shift
            >
                <span>{displayedText}</span>
                <span className="ml-1 cursor-blink text-cyan-400">|</span>
            </motion.p>
            <motion.p 
                variants={itemVariants}
                className="max-w-xl text-gray-600 dark:text-gray-400 mb-8"
            >
                {PERSONAL_INFO.bio}
            </motion.p>
            <motion.a 
                href="#contact" 
                onClick={handleContactClick}
                className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 shadow-lg shadow-cyan-500/30 dark:shadow-cyan-500/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1, type: 'spring', stiffness: 120 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
            >
                Get In Touch
            </motion.a>
        </motion.section>
    );
};

export default Hero;