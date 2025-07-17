
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
    };
    
    const menuVariants = {
        closed: { opacity: 0, y: -20 },
        open: { opacity: 1, y: 0 },
    };

    return (
        <motion.header 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-lg' : ''}`}
        >
            <div className="container mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
                <a href="#" onClick={(e) => handleLinkClick(e, '#home')} className="text-xl font-bold text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors">
                    {PERSONAL_INFO.name.split(' ')[0]}
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {NAV_LINKS.map(link => (
                        <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">
                            {link.name}
                        </a>
                    ))}
                    <ThemeToggle />
                </nav>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 dark:text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg"
                    >
                        <nav className="flex flex-col items-center space-y-4 py-4">
                            {NAV_LINKS.map(link => (
                                <a key={link.name} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className="text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default Header;
