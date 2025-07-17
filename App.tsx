import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <Header />
      <main className="container mx-auto px-6 md:px-12">
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;