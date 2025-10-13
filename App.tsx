import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './sections/Hero.tsx';
import About from './sections/About.tsx';
import Skills from './sections/Skills.tsx';
import Projects from './sections/Projects.tsx';
import Experience from './sections/Experience.tsx';
import Certifications from './sections/Certifications.tsx';
import Contact from './sections/Contact.tsx';
import Footer from './components/Footer.tsx';
import Chatbot from './components/Chatbot.tsx';
import { NotificationProvider } from './context/NotificationsContext.tsx';
import Announcements from './sections/Announcements.tsx';

const App: React.FC = () => {
  return (
    <NotificationProvider>
      <div className="relative">
        <Navbar />
        <main className="container mx-auto px-4 md:px-8">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Announcements />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </NotificationProvider>
  );
};

export default App;