import React from 'react';
import SectionWrapper from '../components/SectionWrapper.tsx';

const About: React.FC = () => {
  return (
    <SectionWrapper id="about" title="About Me">
      <div className="text-center text-text-dark text-lg leading-relaxed max-w-3xl mx-auto space-y-4">
        <p>
          As a dedicated Computer Science student, I am deeply fascinated by the convergence of Artificial Intelligence, efficient algorithms, and robust cybersecurity. My academic journey is focused on mastering these domains to build innovative and secure technological solutions.
        </p>
        <p>
          I have a strong foundation in Python and enjoy developing web applications with frameworks like Django and Flask, often paired with databases like MongoDB. My project work reflects my interest in machine learning, where I've built systems for data analysis and predictive modeling.
        </p>
        <p>
          Beyond coursework, I am an active open-source contributor and an avid explorer of generative AI technologies. I believe in lifelong learning and constantly seek new certifications and skills to stay at the forefront of the tech industry.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default About;