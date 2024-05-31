import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoMoonSharp, IoSunnySharp } from 'react-icons/io5';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`p-4 flex justify-between items-center bg-white dark:bg-black text-black dark:text-white rounded-b-xl shadow-lg`}>
            <div className="flex items-center space-x-3 md:space-x-10 lg:space-x-80">
                <div className="flex flex-col">
                    <h1 className="text-xl md:text-2xl font-mono font-semibold">Portfolio</h1>
                    <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400">by kirtesh</p>
                </div>
                <nav className="hidden md:flex space-x-4">
                    <a href="#home" className="hover:text-gray-700 dark:hover:text-gray-300">About</a>
                    <a href="#academy" className="hover:text-gray-700 dark:hover:text-gray-300">Skills</a>
                    <a href="#open-source" className="hover:text-gray-700 dark:hover:text-gray-300">Experience</a>
                    <a href="#platform" className="hover:text-gray-700 dark:hover:text-gray-300">Projects</a>
                    <a href="#api" className="hover:text-gray-700 dark:hover:text-gray-300">Education</a>
                    <a href="#sdk" className="hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
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
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-gray-500 p-3 focus:outline-none focus:text-white dark:focus:text-black">
                    <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                {isOpen && (
                    <div className="absolute top-16 right-0 mt-2 w-48 bg-white dark:bg-black rounded-md shadow-lg py-1 z-20">
                        <a href="#home" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
                        <a href="#academy" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Skills</a>
                        <a href="#open-source" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Experience</a>
                        <a href="#platform" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Projects</a>
                        <a href="#api" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Education</a>
                        <a href="#sdk" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
