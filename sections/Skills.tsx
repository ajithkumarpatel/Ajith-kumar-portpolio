import React, { useState } from 'react';
// FIX: Imported Variants type from framer-motion to resolve type error.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { skillData } from '../data/portfolioData.ts';
import { Skill } from '../types.ts';
import SectionWrapper from '../components/SectionWrapper.tsx';

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-accent"
    animate={{ rotate: isOpen ? 180 : 0 }}
    transition={{ duration: 0.3 }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </motion.svg>
);

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="group relative bg-slate-800 p-4 rounded-lg border border-slate-700/80 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-text-light text-sm">{skill.name}</span>
        <div className="absolute -top-8 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent text-primary text-xs font-bold px-2 py-1 rounded shadow-lg">
          {skill.level}%
        </div>
      </div>
      <div className="w-full bg-slate-700 rounded-full h-2">
        <motion.div
          className="bg-accent h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};


const Skills: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  // FIX: Explicitly typed variants with the 'Variants' type from framer-motion.
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  // FIX: Explicitly typed variants with the 'Variants' type from framer-motion to fix the error.
  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <SectionWrapper id="skills" title="My Skills">
      <div className="space-y-4 max-w-3xl mx-auto">
        {skillData.map((category, index) => (
          <div key={category.title} className="bg-slate-800/50 rounded-lg border border-slate-700 overflow-hidden transition-shadow hover:shadow-lg hover:shadow-accent/5">
            <motion.header
              className="flex justify-between items-center p-5 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <h3 className="text-xl font-semibold text-text-light">{category.title}</h3>
              <ChevronIcon isOpen={expandedIndex === index} />
            </motion.header>
            <AnimatePresence initial={false}>
              {expandedIndex === index && (
                <motion.section
                  key="content"
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { opacity: 1, height: 'auto' },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                  className="px-5"
                >
                  <motion.div 
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-4 border-t border-slate-700"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {category.skills.map((skill) => (
                       <motion.div
                        key={skill.name}
                        variants={itemVariants}
                       >
                         <SkillCard skill={skill} />
                       </motion.div>
                    ))}
                  </motion.div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Skills;