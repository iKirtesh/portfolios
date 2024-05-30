import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css'; // Import Font Awesome CSS


const Footer = () => {
    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-center items-center">
                <div className="mr-4">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="text-white hover:text-gray-300 mx-2">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="text-white hover:text-gray-300 mx-2">
                        <i className="fab fa-twitter"></i>
                    </a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#" className="text-white hover:text-gray-300 mx-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
                <div>
                    <p className="text-sm">© 2023 Kirtesh Admute. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;