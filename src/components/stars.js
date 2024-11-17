import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Stars = () => {
    const containerRef = useRef(null);
    const starRefs = useRef([]);
    const shootingStarRefs = useRef([]);
    starRefs.current = [];
    shootingStarRefs.current = [];

    const addToRefs = (el, refArray) => {
        if (el && !refArray.current.includes(el)) {
            refArray.current.push(el);
        }
    };

    useEffect(() => {
        // Animate the twinkling stars
        starRefs.current.forEach((star) => {
            gsap.to(star, {
                opacity: 0.5,
                duration: 1,
                yoyo: true,
                repeat: -1,
                ease: 'power1.inOut',
                delay: Math.random() * 2,
            });
        });

        // Function to create a shooting star animation
        const createShootingStar = () => {
            const shootingStar = shootingStarRefs.current[Math.floor(Math.random() * shootingStarRefs.current.length)];
            gsap.fromTo(
                shootingStar,
                { x: Math.random() * window.innerWidth, y: -50, opacity: 1 },
                {
                    x: Math.random() * window.innerWidth,
                    y: window.innerHeight,
                    opacity: 0,
                    duration: 1,
                    ease: 'power1.inOut',
                    onComplete: () => {
                        // Reset the shooting star position
                        gsap.set(shootingStar, { x: Math.random() * window.innerWidth, y: -50, opacity: 1 });
                    },
                }
            );
        };

        // Create shooting stars at random intervals
        const shootingStarInterval = setInterval(createShootingStar, 3000);

        return () => {
            clearInterval(shootingStarInterval);
        };
    }, []);

    return (
        <div ref={containerRef} className='absolute top-0 left-0 w-full h-2/3 bg-abha-900 bg-opacity-0 overflow-hidden'>
            <svg width="100%" height="100%" className='absolute top-0 left-0'>
                {[...Array(400)].map((_, i) => (
                    <circle
                        key={i}
                        ref={(el) => addToRefs(el, starRefs)}
                        cx={`${Math.random() * 100}%`}
                        cy={`${Math.random() * 100}%`}
                        r={`${Math.random() * 1 + 0.01}`}
                        fill="white"
                    />
                ))}
                {[...Array(5)].map((_, i) => (
                    <line
                        key={i}
                        ref={(el) => addToRefs(el, shootingStarRefs)}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="0"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        style={{ opacity: 0 }}
                    />
                ))}
            </svg>
            <div className='w-full h-[25vh] absolute left-0 top-0 pointer-events-none' style={{background: 'linear-gradient(180deg, #070f21 0%, #ff000000 100%)'}} />
            <div className='w-full h-[10vh] absolute left-0 bottom-0 pointer-events-none' style={{background: 'linear-gradient(360deg, #070f21 0%, #ff000000 100%)'}} />
        </div>
    );
};

export default Stars;