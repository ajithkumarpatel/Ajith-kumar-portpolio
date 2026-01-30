import React from 'react';
import { motion } from 'framer-motion';
import { FacebookIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '../components/IconComponents.tsx';

const Hero: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-lg mb-2">Hi, I'm Ajith Kumar.</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 text-text-light">
            I love turning complex ideas into real, working solutions.
          </h1>
          <p className="text-md md:text-lg text-text-dark max-w-xl mx-auto mb-8">
            I’m a Computer Science student with a passion for Artificial Intelligence, Data Structures & Algorithms, and Cybersecurity. I love exploring how intelligent systems work, solving challenging problems, and continuously learning new technologies that help build secure and efficient digital solutions.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://drive.google.com/file/d/1qDsAPS5gBQGwQkZRPSDALjyoiCnxwK1j/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-primary font-semibold px-6 py-3 rounded-md hover:bg-opacity-80 transition-all duration-300"
            >
              View Resume
            </a>
            <button 
              onClick={handleScrollToContact}
              className="bg-transparent border-2 border-accent text-accent font-semibold px-6 py-3 rounded-md hover:bg-accent hover:text-primary transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/ajith-kumar-rayeeshetti-8196352a5" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/ajith_patel__03" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <InstagramIcon className="w-6 h-6" />
            </a>
            <a href="https://www.facebook.com/share/1B7ieoMtKa/" target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors">
              <FacebookIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
        <motion.div 
          className="md:w-1/3"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            <div className="absolute inset-0 bg-accent rounded-full blur-2xl opacity-40"></div>
            <img 
              src="https://res.cloudinary.com/dlggfehry/image/upload/v1769769676/ajith_new_1_xlpkip.jpg"
              alt="Ajith Kumar"
              className="relative w-full h-full object-cover rounded-full border-4 border-accent shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
