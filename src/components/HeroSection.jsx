// ProfileCard.js

import React from 'react';
import personalData from '../personal.json';

const ProfileCard = () => {
    const { name, JD, description, profilePhoto } = personalData;

    return (
        <div className="container mx-auto px-4 lg:px-8 py-8">
            <div className="bg-white border-2 rounded-2xl p-6 flex flex-col lg:flex-row items-center">
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <img
                        src={profilePhoto}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="w-full lg:w-2/3 lg:pl-6">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">{name}</h1>
                    <p className="text-gray-600 text-xl font-semibold mb-4">{JD}</p>
                    <p className="text-gray-800">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
