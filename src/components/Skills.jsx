import React, { useState } from 'react';
import skillsData from '../skills.json';
import AnimatedScroller from "./AnimatedScroller";
import { motion } from 'framer-motion';

const SkillComponent = ({ name, link }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <AnimatedScroller>
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
        </AnimatedScroller>
    );
};

const SkillSection = ({ title, skills }) => (
    <AnimatedScroller>
        <motion.div
            className="mb-2 p-8 border-2 m-4 rounded-2xl  hover:border-gray-300"
            initial={{ opacity: 0, y: 50, borderColor: '#E5E7EB' }}
            animate={{ opacity: 1, y: 0, borderColor: '#E5E7EB' }}
            transition={{ duration: 0.5 }}

        >
            <div className="flex items-center justify-center mb-4">
                <motion.h2
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    {title}
                </motion.h2>
            </div>
            <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))' }}>
                {Object.entries(skills).map(([name, link], index) => (
                    <motion.div
                        key={name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                        <SkillComponent name={name} link={link} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </AnimatedScroller>
);

const Skills = () => {
    return (
        <AnimatedScroller>
            <div className="container mx-auto py-2">
                <h1 className="text-2xl font-bold mb-2 text-center">Skills</h1>
                <p className="text-lg text-center px-4 mb-8">Here are some of my skills on which I have been working on for the past 5 years.</p>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                    {Object.entries(skillsData).map(([sectionTitle, skills], index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}

                        >
                            <SkillSection title={sectionTitle} skills={skills} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedScroller>
    );
};

export default Skills;
