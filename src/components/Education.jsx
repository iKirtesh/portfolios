import React, { useState } from 'react';
import { motion } from 'framer-motion';
import educationData from '../education.json';
import defaultLogo from '../assets/images/defaultLogo.png'; // Import the default logo

const EducationItem = ({ education }) => {
    const [imgError, setImgError] = useState(false);

    // Dynamically import the logo based on the path in the JSON
    let logo;
    try {
        logo = require(`../${education.logo}`);
    } catch (error) {
        logo = defaultLogo; // Fallback to default logo if import fails
    }

    return (
        <motion.div
            className="border-2 shadow-lg rounded-2xl px-10 py-6 mb-4 flex flex-col md:flex-row items-center md:items-start"
            whileHover={{ scale: 1.05, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.2 }}
        >
            <img
                src={imgError ? defaultLogo : logo}
                alt={education.name}
                className="w-16 h-16 mr-4 rounded"
                onError={() => setImgError(true)}
            />
            <div>
                <h2 className="text-xl font-bold">{education.name}</h2>
                <p className="text-gray-600">{`${education.date.start} - ${education.date.end}`}</p>
                <p className="text-gray-800 text-md">{education.class}</p>
                <p className="text-gray-800 text-md">Grade: {education.grade}</p>
                <p className="mt-2">{education.description}</p>
            </div>
        </motion.div>
    );
};

const Education = () => {
    return (
        <div className="container mx-auto py-8 px-4 lg:px-8">
            <h1 className="text-2xl font-bold mb-2 text-center">Education</h1>
            <p className="text-lg text-center mb-8">My education has been a journey of self-discovery and growth. My
                educational details are as follows:</p>
            {educationData.map((education, index) => (
                <EducationItem key={index} education={education}/>
            ))}
        </div>
    );
};

export default Education;
