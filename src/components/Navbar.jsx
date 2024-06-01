import React, { useState, useEffect } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { motion, useAnimation } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const controls = useAnimation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (scrollY > 50) {
            controls.start('hidden');
        } else {
            controls.start('visible');
        }
    }, [scrollY, controls]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);

    const variants = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 1, y: -12 }
    };

    return (
        <motion.div
            className={`sticky top-0 z-50 p-4 flex justify-between items-center bg-white dark:bg-black text-black dark:text-white rounded-b-xl shadow-lg`}
            variants={variants}
            initial="visible"
            animate={controls}
            transition={{ duration: 0.3 }}
        >
            <div className="flex items-center space-x-3 md:space-x-10 lg:space-x-80">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl font-mono font-semibold">Portfolio</h1>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">by kirtesh</p>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                        >
                            About
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                        >
                            Skills
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                        >
                            Experience
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                        >
                            Projects
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="education"
                            smooth={true}
                            duration={500}
                        >
                            Education
                        </Link>
                    </motion.div>
                    <motion.div
                        className="hover:text-gray-700 dark:hover:text-gray-300"
                        whileHover={{ scale: 1.1 }}
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                        >
                            Contact
                        </Link>
                    </motion.div>
                </nav>
            </div>
            <div className="flex items-center space-x-2">
                <button onClick={toggleDarkMode}>
                    {darkMode ? <IoSunnySharp size={20}/> : <IoMoonSharp size={20}/>}
                </button>
                <a href="https://github.com/ikirtesh" className="hover:text-gray-700 dark:hover:text-gray-300">
                    <FaGithub size={20}/>
                </a>
                <div className="hidden lg:block relative w-full max-w-md mx-auto">
                    <input type="text" placeholder="Search" className="w-full px-3 py-1 border rounded-lg text-black dark:text-white dark:bg-gray-800"/>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <kbd className="px-2 py-1 text-xs font-semibold text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-300 rounded-lg">Ctrl K</kbd>
                    </div>
                </div>
            </div>
            <div className="md:hidden ">
                <button onClick={toggleMenu} className="text-gray-400  p-3 focus:outline-none focus:text-white dark:focus:text-black">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute top-16 right-0 mt-2 w-48 bg-white dark:bg-gray-950 rounded-md shadow-lg py-1 z-20">
                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                            whileHover={{ scale: 1.1 }}

                        >
                            About
                        </Link>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                        <Link
                            to="experience"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                        >
                            Experience
                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                        <Link
                            to="education"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                        >
                            Education
                        </Link>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={toggleMenu}
                        >
                            Contact
                        </Link>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Navbar;
