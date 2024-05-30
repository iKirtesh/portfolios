import React from 'react';

const Project = ({ project }) => {
    return (
        <div className="border-2 rounded-2xl p-4 mb-4 shadow-lg">
            <div className="mb-4">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-40 sm:h-60 md:h-80 rounded-lg object-cover"
                />
            </div>
            <div className="mb-4">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-gray-600">{`${project.date.start} - ${project.date.end}`}</p>
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
        </div>
    );
};

export default Project;
