import React, { useState, useRef, useEffect } from 'react';
import Projects from './Projects';
import projectsData from '../projects.json';
import AnimatedScroller from './AnimatedScroller';

const ProjectsList = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <AnimatedScroller>
            <div className="container mx-auto py-1 px-8">
                <h1 className="text-2xl font-bold mb-2 text-center">Projects</h1>
                <p className="text-lg text-center mb-8">
                    I have worked on a wide range of projects. From web apps to deployment. Here are some of my projects.
                </p>
                <div className="grid gap-8" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                    {projectsData.projects.map((project, index) => (
                        <div key={index} onClick={() => handleProjectClick(project)}>
                            <Projects project={project} />
                        </div>
                    ))}
                </div>
                {selectedProject && (
                    <ProjectModal project={selectedProject} onClose={handleCloseModal} />
                )}
            </div>
        </AnimatedScroller>
    );
};

const ProjectModal = ({ project, onClose }) => {
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                onClose();
            }
        };

        const handleScroll = () => {
            if (modalRef.current && (window.scrollY < modalRef.current.offsetTop || window.scrollY > modalRef.current.offsetTop + modalRef.current.offsetHeight)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);
        window.addEventListener('scroll', handleScroll);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0  flex justify-center items-center bg-gray-900 bg-opacity-70">
            <div ref={modalRef} className="bg-white rounded-lg p-5 ProjectModalContent">
                <div className="mb-4">
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-80 rounded-lg object-cover"
                    />
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-4">{project.name}</h2>
                    <p className="text-gray-600">{project.description}</p>
                </div>
                <div className="mb-4">
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

                {/*    viewCode and liveApp button at the end of modal*/}
                <div className="flex justify-between mt-10">
                    {project.liveApp && (
                        <a
                            href={project.liveApp}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-pink-500 text-white rounded-lg px-4 py-2"
                        >
                            Live App
                        </a>
                    )}
                    {project.viewCode && (
                        <a
                            href={project.viewCode}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-pink-500 text-white rounded-lg px-4 py-2"
                        >
                            View Code
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
