import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { certificationData } from '../data/portfolioData.ts';

const Certifications: React.FC = () => {
  return (
    <SectionWrapper id="certifications" title="My Certifications">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationData.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-text-light">{cert.name}</h3>
            <p className="text-accent mt-1">{cert.issuer}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;