import React, { useState, useEffect } from 'react';
import { MenuIcon, CloseIcon } from './IconComponents.tsx';
import Notifications from './Notifications.tsx';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Announcements', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/80 backdrop-blur-lg shadow-lg shadow-slate-900/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="text-2xl font-bold text-accent">
            AK
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleLinkClick(e, link.toLowerCase())} className="text-text-dark hover:text-accent transition-colors duration-300">
                  {link}
                </a>
              ))}
            </nav>
            <Notifications />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-text-light focus:outline-none">
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-primary/95 backdrop-blur-lg absolute top-20 left-0 w-full`}>
        <div className="flex flex-col items-center py-4">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} onClick={(e) => handleLinkClick(e, link.toLowerCase())} className="py-3 text-lg text-text-dark hover:text-accent transition-colors duration-300">
              {link}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;