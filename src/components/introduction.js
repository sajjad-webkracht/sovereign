import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Introduction = () => {
    const containerRef = useRef(null);
    const h1Ref = useRef([]);
    const pRef = useRef([]);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = 'hidden';
    
        // Animate h1 elements
        const h1Timeline = gsap.timeline({ delay: 0.3 });
        h1Ref.current.forEach((word, index) => {
            h1Timeline.fromTo(word, { opacity: 0, y: -50, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 }, index * 0.2);
        });
    
        // Animate p elements after a delay
        const pTimeline = gsap.timeline({ delay: 0.5 });
        pRef.current.forEach((word, index) => {
            pTimeline.fromTo(word, { opacity: 0, y: 50, filter: 'blur(10px)' }, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7 }, index * 0.2);
        });
    
        // Chain the timelines
        h1Timeline.add(pTimeline, "+=0.5");
    
        // Fade out the container after animations
        h1Timeline.to(containerRef.current, { opacity: 0, filter: 'blur(10px)', duration: 2, delay: 4, onComplete: () => {
            // Unlock scroll
            document.body.style.overflow = 'auto';
        }});
    
    }, []);

    const splitText = (text, ref) => {
        return text.split(' ').map((word, index) => (
            <span key={index} ref={el => ref.current[index] = el} className='inline-block opacity-0'>
                {word}&nbsp;
            </span>
        ));
    };

    return (
        <div ref={containerRef} className='w-full h-svh bg-abha-900 flex justify-center items-center flex-col absolute top-0 left-0 z-50 pointer-events-none'>
            <h1 className='text-zinc-50 text-4xl font-bold mb-2 px-8 text-center'>
                {splitText('Just thinking,', h1Ref)}
            </h1>
            <p className='text-zinc-50 text-2xl px-8 text-center'>
                {splitText("maybe it's time to take our sovereign identity back?", pRef)}
            </p>
        </div>
    );
};

export default Introduction;