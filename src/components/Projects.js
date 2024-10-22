import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects  } from "../assets/assets";

const Projects = () => {
  return (
    <div className="py-24 min-h-screen">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl text-white font-bold text-center mb-8"
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              technologies={project.technologies}
              url={project.url}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
