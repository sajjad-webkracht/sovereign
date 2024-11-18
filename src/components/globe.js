import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const GlobeMesh = () => {
    const globeRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (globeRef.current) {
                const scrollPosition = window.scrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const scrollFraction = scrollPosition / maxScroll;
                const rotation = scrollFraction * 1 * Math.PI; // Rotate 360 degrees
                globeRef.current.rotation.x = rotation;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useFrame(() => {
        if (globeRef.current) {
            globeRef.current.rotation.y += 0.001;
        }
    });

    return (
        <mesh ref={globeRef}>
            <sphereGeometry args={[4, 32, 32]} />
            <meshStandardMaterial
                color='#5175a8'
                transparent
                opacity={0.5}
                wireframe
            />
            <points>
                <sphereGeometry args={[4.01, 32, 32]} />
                <pointsMaterial color='#4c5a6e' size={0.02} />
            </points>
        </mesh>
    );
};

const Globe = () => {
    return (
        <div className='w-full h-svh -z-10 top-0 left-0 absolute pointer-events-none'>
            
            <div className='w-full h-2/4 z-10 absolute right-0 bottom-0 pointer-events-none' style={{ background: 'linear-gradient(360deg, #070f21 0%, #ff000000 100%)' }} />
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <GlobeMesh />
            </Canvas>
            <div className='w-full h-[1200px] rounded-full absolute -top-[600px] pointer-events-none animate-opacity-pulse'  style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 88, 212, 0.30) 0%, rgba(0, 88, 212, 0.00) 100%)' }}/>
            <style jsx>{`
                @keyframes opacityPulse {
                    0%, 100% {
                        opacity: 0.8;
                    }
                    50% {
                        opacity: 0.4;
                    }
                }
                .animate-opacity-pulse {
                    animation: opacityPulse 5s infinite;
                }
            `}</style>
        </div>
    );
};

export default Globe;