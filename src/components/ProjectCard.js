import React from 'react';

const ProjectCard = ({ title, description, imageUrl, technologies, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg transform block bg-gray-800 text-white"
    >
      <img className="w-full h-44 object-cover" src={imageUrl} alt={title} />
      <div className="flex-grow px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-base mb-4">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="inline-block bg-gray-600 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
          >
            #{tech}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
