import React from 'react';
import SectionWrapper from '../components/SectionWrapper.tsx';
import { experienceData } from '../data/portfolioData.ts';

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="relative max-w-2xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-700"></div>
        {experienceData.map((item, index) => (
          <div key={index} className="mb-12 flex justify-between items-center w-full">
            <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <p className="text-accent font-semibold">{item.period}</p>
              <h3 className="text-xl font-bold text-text-light mt-1">{item.role}</h3>
              <p className="text-text-dark">{item.company}</p>
            </div>
            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary"></div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
              <ul className="list-disc list-inside text-text-dark space-y-2">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;