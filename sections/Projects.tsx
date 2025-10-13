import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { projectData } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { GithubIcon, ExternalLinkIcon, CloseIcon } from '../components/IconComponents.tsx';

// ===================================================================================
// Project Modal Component
// ===================================================================================
interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const backdropVariants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modalVariants = {
  hidden: { y: "100vh", opacity: 0, scale: 0.8 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { y: "100vh", opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } },
};

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = useMemo(() => 
    project?.screenshots && project.screenshots.length > 0 
      ? project.screenshots 
      : project ? [project.imageUrl] : [],
    [project]
  );
  
  useEffect(() => {
    setCurrentScreenshot(0);
  }, [project]);

  const nextScreenshot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="bg-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col md:flex-row overflow-hidden border border-slate-700"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full md:w-1/2 relative flex-shrink-0 bg-primary">
              <img src={screenshots[currentScreenshot]} alt={`${project.title} screenshot`} className="w-full h-64 md:h-full object-cover"/>
              {screenshots.length > 1 && (
                <>
                  <button onClick={prevScreenshot} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 z-10" aria-label="Previous screenshot">&#10094;</button>
                  <button onClick={nextScreenshot} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 z-10" aria-label="Next screenshot">&#10095;</button>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                    {screenshots.map((_, index) => (<div key={index} className={`w-2 h-2 rounded-full transition-colors ${index === currentScreenshot ? 'bg-accent' : 'bg-slate-400'}`}></div>))}
                  </div>
                </>
              )}
            </div>
            <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-bold text-text-light">{project.title}</h2>
                <button onClick={onClose} className="text-text-dark hover:text-accent" aria-label="Close project details"><CloseIcon className="w-7 h-7" /></button>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">{project.tags.map(tag => (<span key={tag} className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>))}</div>
              <p className="text-sm text-text-dark leading-relaxed mb-6">{project.detailedDescription || project.description}</p>
              <div className="mt-auto pt-4 border-t border-slate-700 flex justify-end items-center gap-4">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-dark hover:text-accent transition-colors"><GithubIcon className="w-6 h-6" /> <span className="hidden sm:inline font-medium">Code</span></a>
                {project.liveUrl && (<a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-text-dark hover:text-accent transition-colors"><ExternalLinkIcon className="w-6 h-6" /> <span className="hidden sm:inline font-medium">Live Demo</span></a>)}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ===================================================================================
// Project Card Component
// ===================================================================================
interface ProjectCardProps {
  project: Project;
  index: number;
  onCardClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, onCardClick }) => {
    return (
        <motion.div
            className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 flex flex-col group transition-shadow hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onCardClick(project)}
        >
            <div className="relative overflow-hidden h-48">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                {/* Tooltip Overlay */}
                <div 
                  className="absolute inset-0 bg-primary/80 backdrop-blur-sm flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                  aria-hidden="true"
                >
                    <p className="text-center text-text-light text-sm">{project.description}</p>
                </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                <p className="text-text-dark text-sm mb-4 flex-grow">{project.description.length > 100 ? `${project.description.substring(0, 100)}...` : project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-auto flex justify-end items-center gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-dark hover:text-accent transition-colors" aria-label={`GitHub for ${project.title}`}>
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="text-text-dark hover:text-accent transition-colors" aria-label={`Live demo for ${project.title}`}>
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

// ===================================================================================
// Main Projects Component
// ===================================================================================
const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };
  
  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <SectionWrapper id="projects" title="My Projects">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard key={project.title + index} project={project} index={index} onCardClick={handleCardClick} />
          ))}
        </div>
      </SectionWrapper>
      
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </>
  );
};

export default Projects;