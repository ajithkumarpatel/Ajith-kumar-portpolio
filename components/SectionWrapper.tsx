import React from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, title, children }) => {
  return (
    <motion.section 
      id={id} 
      className="py-20 md:py-28 min-h-screen flex flex-col justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-accent">{title.split(' ')[0]}</span> {title.substring(title.indexOf(' ') + 1)}
        </h2>
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;