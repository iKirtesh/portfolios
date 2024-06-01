// components/AnimatedScroller.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedScroller = ({ children, direction = 'up', duration = 0.5 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start({
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration }
            });
        } else {
            controls.start({
                opacity: 0,
                y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
            });
        }
    }, [controls, inView, direction, duration]);

    return (
        <motion.div ref={ref} animate={controls} initial={{ opacity: 0 }}>
            {children}
        </motion.div>
    );
};

export default AnimatedScroller;
