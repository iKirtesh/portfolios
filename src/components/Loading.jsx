import React, { useEffect } from 'react';

const Loading = () => {
    // Add style for the loader animation
    useEffect(() => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = `
            @keyframes loader {
                0%, 50%, 100% {
                    transform: translateY(0);
                }
                25% {
                    transform: translateY(70%);
                }
                75% {
                    transform: translateY(-70%);
                }
            }
        `;
        document.head.appendChild(style);
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#212121]">
            <div className="relative w-6 aspect-[1/2] loader">
                <div className="absolute inset-0 m-auto w-full aspect-square rounded-full bg-gradient-to-b from-yellow-400 to-green-600 animate-loader"></div>
                <div className="absolute inset-0 m-auto w-full aspect-square rounded-full bg-gradient-to-t from-cyan-400 to-green-600 animate-loader" style={{ animationDelay: '0.75s' }}></div>
            </div>
        </div>
    );
};

export default Loading;
