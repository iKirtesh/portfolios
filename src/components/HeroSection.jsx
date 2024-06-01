import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import personalData from '../personal.json';
import AnimatedScroller from "./AnimatedScroller";

const ProfileCard = () => {
    const { name, JD, description, profilePhoto } = personalData;

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: 'easeOut' }
            });
        }
    }, [controls, inView]);

    return (
        <AnimatedScroller>
        <div className="container mx-auto px-4 lg:px-8 py-8">
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={controls}
                className="bg-white border-2 rounded-2xl p-4 flex flex-col lg:flex-row items-center shadow-zinc-500"
            >
                <motion.div
                    className="w-full lg:w-1/4 mb-3 lg:mb-0"
                    whileHover={{ scale: 1.1 }}
                >
                    <img
                        src={profilePhoto}
                        alt={name}
                        className="w-full h-full object-cover rounded-lg"
                    />
                </motion.div>
                <div
                    className="w-full lg:w-2/3 lg:pl-6">
                    <h1 className="text-2xl lg:text-3xl font-bold mb-2">{name}</h1>
                    <p className="text-gray-600 text-xl font-semibold mb-4">{JD}</p>
                    <p className="text-gray-800">{description}</p>
                </div>
            </motion.div>
        </div>
        </AnimatedScroller>
    );
};

export default ProfileCard;
