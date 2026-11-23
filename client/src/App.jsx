import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Education from './sections/Education';
import TerminalSection from './sections/TerminalSection';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import CommandMenu from './components/CommandMenu';
import ResumeModal from './components/ResumeModal';
import FloatingBackToTop from './components/FloatingBackToTop';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Global key listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* 1. Initial Loading Screen */}
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      {/* 2. Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* 3. Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* 4. Floating Header Navigation */}
      <Navbar
        onOpenResume={() => setIsResumeModalOpen(true)}
        onOpenCommandMenu={() => setIsCommandMenuOpen(true)}
      />

      {/* 5. Main Content Landmark */}
      <main className="relative">
        {/* Section 1: Hero */}
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />

        {/* Section 2: About Me */}
        <About />

        {/* Section 3: Technical Skills */}
        <Skills />

        {/* Section 4: Professional Experience */}
        <Experience />

        {/* Section 5: Featured Projects */}
        <Projects />

        {/* Section 6: Achievements & Certifications */}
        <Achievements />

        {/* Section 7: Education */}
        <Education />

        {/* Section 8: Interactive Terminal CLI */}
        <TerminalSection />

        {/* Section 9: Contact Form & Channels */}
        <Contact />
      </main>

      {/* 6. Footer */}
      <Footer />

      {/* 7. Floating Back to Top Button */}
      <FloatingBackToTop />

      {/* 8. Command Palette (Ctrl + K) */}
      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* 9. Official Resume Viewer / Download Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

    </div>
  );
}
