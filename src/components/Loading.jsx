import React, { useState, useEffect } from 'react';

const Loading = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const fadeOutAnimation = {
        animation: 'fadeOut 2s forwards',
    };

    const keyframes = `
    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#101011',
        color: 'white',
    };

    return (
        <div style={containerStyle}>
            <style>{keyframes}</style>
            <div style={isVisible ? fadeOutAnimation : { display: 'none' }} className="text-center">
                <h1 className="text-4xl font-bold">Re.</h1>
                <p className="font-semibold">Loading the experience</p>
            </div>
        </div>
    );
};

export default Loading;