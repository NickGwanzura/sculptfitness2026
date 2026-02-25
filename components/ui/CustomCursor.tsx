
import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const mouseX = useSpring(0, { stiffness: 250, damping: 25 });
    const mouseY = useSpring(0, { stiffness: 250, damping: 25 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (isMobile) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999]">
            <motion.div
                className="w-4 h-4 bg-copper rounded-full fixed top-0 left-0 mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 2.5 : 1,
                    opacity: 0.8,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            />
            <motion.div
                className="w-8 h-8 border border-copper rounded-full fixed top-0 left-0"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 0.3,
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            />
        </div>
    );
};

export default CustomCursor;
