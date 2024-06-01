import React from 'react';
import { motion } from 'framer-motion';

const Project = ({ project }) => {
    return (
        <motion.div
            className="border-2 rounded-2xl p-3 mb-4"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.2 }}
        >
            <div className="mb-4">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 sm:h-60 md:h-60 rounded-lg object-cover"
                />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-gray-600">{`${new Date(project.date.start).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                })} - ${project.date.end === 'Present' ? 'Present' : new Date(project.date.end).toLocaleDateString('en-US', {
                    month: 'short',
                    year: 'numeric'
                })}`}</p>
            </div>
            <div className="mb-4">
                <p className="text-gray-800">{project.description}</p>
            </div>
            <div className="flex flex-wrap">
                {project.tags.map((tag, index) => (
                    <span
                        key={index}
                        className="bg-pink-100 text-pink-600 rounded-xl text-sm px-2 py-1 mr-1 mb-1"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    );
};

export default Project;
