import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const Footer = () => {
    return (
        <footer className="flex flex-col space-y-10 justify-center p-10 text-white bg-footer ">

            <nav className="flex justify-center flex-wrap gap-6 text-gray-400 font-medium">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Home</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">About</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Skills</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Experience</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Projects</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Education</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="hover:text-violet-500" href="#">Contact</a>
            </nav>

            <div className="flex justify-center space-x-5">
                {/*<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">*/}
                {/*    <img src="https://img.icons8.com/fluent/30/000000/facebook-new.png" alt={'Facebook'}/>*/}
                {/*</a>*/}
                <a href="https://linkedin.com/in/ikirtesh" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/linkedin-2.png" alt={'LinkedIn'}/>
                </a>
                <a href="https://github.com/ikirtesh" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/github.png" alt={'Github'}/>
                </a>
                <a href="https://instagram.com/ikirtesh" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/instagram-new.png" alt={'Instagram'}/>
                </a>
                {/*<a href="https://messenger.com" target="_blank" rel="noopener noreferrer">*/}
                {/*    <img src="https://img.icons8.com/fluent/30/000000/facebook-messenger--v2.png" alt={'Messenger'}/>*/}
                {/*</a>*/}
                <a href="https://twitter.com/akirtesh" target="_blank" rel="noopener noreferrer">
                    <img src="https://img.icons8.com/fluent/30/000000/twitter.png" alt={'Twitter'}/>
                </a>
            </div>
            <p className="text-center text-gray-400 font-medium">&copy; 2024 Kirtesh Admute. All rights reservered.</p>
        </footer>
    );
};

export default Footer;