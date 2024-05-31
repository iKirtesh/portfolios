import React from 'react';
import Projects from './Projects';
import projectsData from '../projects.json';

const ProjectsList = () => {
    return (
        <div className="container mx-auto py-1 px-8">
            <h1 className="text-2xl font-bold mb-2 text-center">Projects</h1>
            <p className="text-lg text-center mb-8">I have worked on a wide range of projects. From web apps to deployement. Here are some of my projects.
            </p>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))'}}>

                {projectsData.projects.map((project, index) => (
                    <Projects key={index} project={project}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectsList;
