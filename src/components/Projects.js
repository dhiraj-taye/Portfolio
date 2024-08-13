import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div className="py-24 min-h-screen">
      <h2 className="text-3xl text-white font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            url={project.url} // Pass the URL here
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
