import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { projectData } from '../data/portfolioData.ts';
import { Project } from '../types.ts';
import { GithubIcon, ExternalLinkIcon } from '../components/IconComponents.tsx';

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
    return (
        <motion.div
            className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 flex flex-col group transition-shadow hover:shadow-lg hover:shadow-accent/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div className="relative overflow-hidden h-48">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-text-light mb-2">{project.title}</h3>
                <p className="text-text-dark text-sm mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                        <span key={tag} className="bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
                <div className="mt-auto flex justify-end items-center gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors" aria-label={`GitHub for ${project.title}`}>
                        <GithubIcon className="w-6 h-6" />
                    </a>
                    {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-text-dark hover:text-accent transition-colors" aria-label={`Live demo for ${project.title}`}>
                            <ExternalLinkIcon className="w-6 h-6" />
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};


const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="My Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;
