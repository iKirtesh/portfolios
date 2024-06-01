import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS
import { motion } from 'framer-motion';

const Footer = () => {

    const hoverEffect = { scale: 1.2, transition: { duration: 0.3 } };

    return (
        <footer
            id="footer"
            className="flex flex-col space-y-10 justify-center p-10 text-white bg-footer"
            initial="hidden"

        >
            <div className="flex justify-center space-x-5">
                <motion.a
                    href="https://linkedin.com/in/ikirtesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={hoverEffect}
                >
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt="LinkedIn"/>
                </motion.a>
                <motion.a
                    href="https://github.com/ikirtesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={hoverEffect}
                >
                    <img src="https://img.icons8.com/fluent/30/000000/github.png" alt="Github"/>
                </motion.a>
                <motion.a
                    href="https://instagram.com/ikirtesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={hoverEffect}
                >
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt="Instagram"/>
                </motion.a>
                <motion.a
                    href="https://twitter.com/akirtesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={hoverEffect}
                >
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt="Twitter"/>
                </motion.a>
            </div>
            <p className="text-center text-gray-400 font-medium">&copy; 2024 Kirtesh Admute. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
