import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FingerPrint from '../images/fingerprint.svg';
import P2P from '../images/p2p.svg';
import Globe from '../images/globe.svg';
import Digital from '../images/digital.svg';

gsap.registerPlugin(ScrollTrigger);

const Heading = () => {

    const itemRefs = useRef([]);
    itemRefs.current = [];

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    useEffect(() => {
        itemRefs.current.forEach((item, index) => {

            const initialY = window.innerWidth < 1024
            ? (index === 0 ? '0px' : '200px')
            : (index === 0 || index === itemRefs.current.length - 1 ? '50px' : '180px');

            
            
            gsap.fromTo(
                item,
                { y: initialY },
                {
                    y: 0,
                    scrollTrigger: {
                        trigger: item,
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    },
                }
            );
        });
    }, []);



    return (
        <div className='px-8 md:px-16 py-8 flex gap-8 flex-col justify-between items-center relative z-40'>
            <span className='rounded-md border-solid border-zinc-50 text-zinc-50 text-sm border-[1px] px-10 py-3 bg-white bg-opacity-5 backdrop-blur-md text-center'>8.2 Billion Potential Users</span>
            <h1 className='bg-gradient-to-r from-white to-zinc-300 text-4xl md:text-5xl bg-clip-text text-transparent text-center'>Own Your <b>Identity</b></h1>
            <span className='text-zinc-400 text-base md:text-xl md:w-2/3 -mt-4 md:mt-0 text-center'>We envision a new form of citizenship where each individual can belong, participate, and be recognized beyond borders and institutions.</span>
            <div className='flex flex-col lg:flex-row justify-between mt-16 w-full gap-16 lg:gap-8'>
                <div ref={addToRefs} className='w-full lg:w-1/4 text-center border-zinc-50 border-solid border-[1px] rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md relative duration-200' >
                    <div className='absolute -top-12 left-0 w-full '>
                        <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                <img src={FingerPrint} alt='Finger Print' className='w-2/4 object-contain' />
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-8'>True Sovereignty</h2>
                    <p className='text-base text-zinc-400'>We envision a new form of citizenship where each individual can belong, participate, and be recognized beyond borders and institutions.</p>
                </div>

                <div ref={addToRefs} className='w-full lg:w-1/4 text-center border-zinc-50 border-solid border-[1px] rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md relative duration-200'>
                    <div className='absolute -top-12 left-0 w-full '>
                        <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                <img src={P2P} alt='Peer 2 Peer' className='w-2/4 object-contain' />
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-8'>Peer-Driven Trust</h2>
                    <p className='text-base text-zinc-400'>Verification and authenticity are built by our communities, not by authorities. Peer to peer, we establish trust that transcends traditional systems.</p>
                </div>

                <div ref={addToRefs} className='w-full lg:w-1/4 text-center border-zinc-50 border-solid border-[1px] rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md relative duration-200'>
                    <div className='absolute -top-12 left-0 w-full '>
                        <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                <img src={Globe} alt='Globe' className='w-2/4 object-contain' />
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-8'>Global Belonging</h2>
                    <p className='text-base text-zinc-400'>Every person is a citizen of the world, inherently valuable. Our worth is not defined by borders, nor should our rights be limited by lines drawn on a map.</p>
                </div>

                <div ref={addToRefs} className='w-full lg:w-1/4 text-center border-zinc-50 border-solid border-[1px] rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md relative duration-200'>
                    <div className='absolute -top-12 left-0 w-full '>
                        <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                            <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                <img src={Digital} alt='Digital Independence' className='w-2/4 object-contain' />
                            </div>
                        </div>
                    </div>
                    <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-8'>Digital Independence</h2>
                    <p className='text-base text-zinc-400'>Using the universal language of binary, we create resilient, decentralised identities that empower everyone, everywhere.</p>
                </div>
            </div>
        </div>
    );
};

export default Heading;