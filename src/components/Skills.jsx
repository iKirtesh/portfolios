import React, { useState } from 'react';
import skillsData from '../skills.json';

const SkillComponent = ({ name, link }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="p-4 rounded-lg bg-white border-2 flex items-center justify-center">
            {!imgError ? (
                <img
                    src={link}
                    alt={name}
                    className="w-6 h-6 mr-2"
                    onError={() => setImgError(true)}
                />
            ) : (
                <span className="text-gray-800 font-bold items-center">{name}</span>
            )}
            {!imgError && <span className="text-gray-800 font-bold">{name}</span>}
        </div>
    );
};

const SkillSection = ({ title, skills }) => (
    <div className="mb-8 p-8 border-2 rounded-2xl">
        <div className="flex items-center justify-center mb-4">
            <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))'}}>
        {Object.entries(skills).map(([name, link]) => (
                <SkillComponent key={name} name={name} link={link} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    return (
        <div className="container mx-auto py-2">
            <h1 className="text-2xl font-bold mb-2 text-center">Skills</h1>
            <p className="text-lg text-center px-4 mb-8">Here are some of my skills on which I have been working on for the past 5 years.</p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                <SkillSection title="Backend" skills={skillsData.backend}/>
                <SkillSection title="SDE Designs" skills={skillsData.sde_designs}/>
                <SkillSection title="Frontend" skills={skillsData.frontend}/>
                <SkillSection title="Programming Languages" skills={skillsData.programming_languages}/>
                <SkillSection title="Devops" skills={skillsData.devops}/>
                <SkillSection title="Others" skills={skillsData.others}/>
            </div>
        </div>
    );
};

export default Skills;
