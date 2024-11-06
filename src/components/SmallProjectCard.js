import React from 'react';

const ProjectCard = ({ title, imageUrl, url }) => {
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
      </div>
    </a>
  );
};

export default ProjectCard;
