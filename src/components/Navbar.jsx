import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa'; // Import the menu icon
import { MdClose } from 'react-icons/md'; // Import the close icon

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="text-2xl font-mono font-semibold mr-2">Portfolio</h1>
                <p className="text-sm font-mono font-bold text-green-700">by kirtesh</p>
            </div>
            <nav className="md:block hidden">
                <ul className="flex space-x-4">
                    <li><a href="#skills" className="hover:text-gray-300">Skills</a></li>
                    <li><a href="#projects" className="hover:text-gray-300">Projects</a></li>
                    <li><a href="#education" className="hover:text-gray-300">Education</a></li>
                    <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
            </nav>
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? <MdClose className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>
            {isOpen && (
                <div className="absolute top-0 right-0 bg-black w-full h-screen flex flex-col items-center justify-center">
                    <button onClick={closeMenu} className="absolute top-0 right-0 m-4">
                        <MdClose className="text-2xl text-white" />
                    </button>
                    <ul className="flex flex-col items-center space-y-4">
                        <li><a href="#skills" className="text-white hover:text-gray-300">Skills</a></li>
                        <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
                        <li><a href="#education" className="text-white hover:text-gray-300">Education</a></li>
                        <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
