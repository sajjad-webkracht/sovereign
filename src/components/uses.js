import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Election from '../images/election.svg';
import Document from '../images/document.svg';
import Judge from '../images/judge.svg';
import Stars from '../components/stars'

gsap.registerPlugin(ScrollTrigger);

const Uses = () => {
    
    
    const containerRef = useRef(null);
    const itemRefs = useRef([]);
    itemRefs.current = [];

    const addToRefs = (el) => {
        if (el && !itemRefs.current.includes(el)) {
            itemRefs.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '+=300%',
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        });

        itemRefs.current.forEach((item, index) => {
            tl.fromTo(
                item,
                { opacity: 0, filter: 'blur(10px)', y: 50 },
                {
                    opacity: 1,
                    filter: 'blur(0px)',
                    y: 0,
                    duration: 1,
                    ease: 'power1.inOut',
                },
                index * 1.5 // Stagger the animations
            ).to(
                item,
                {
                    opacity: 0,
                    filter: 'blur(10px)',
                    y: -50,
                    duration: 1,
                    ease: 'power1.inOut',
                },
                (index + 1) * 1.5 // Stagger the animations
            );
        });


        const elementsToAnimate = document.querySelectorAll('.fade-in-blur');
        console.log('elementsToAnimate:', elementsToAnimate);
        // Loop through each element and create a ScrollTrigger animation
        gsap.fromTo(elementsToAnimate,
          { opacity: 0, filter: 'blur(10px)', y: 50 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1,
            stagger: 0.3, // Add stagger to create delay between animations
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 80%', // Adjust this value as needed
              toggleActions: 'play none none none'
            }
          }
        );

        
    }, []);


    return (
        <div className='relative w-full overflow-x-clip '>
            <div ref={containerRef} className='pt-12 mt-12 flex flex-col items-center relative w-full h-svh overflow-clip'>
                <Stars />
                <div className='border-solid border-zinc-50 rounded-full border-2 absolute top-[280px]' style={{ width: 'calc(100vw * 2)', height: 'calc(100vw * 2)', background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.09) 0%, rgba(221, 221, 221, 0.00) 11.44%)' }} />
                <h2 className='fade-in-blur bg-gradient-to-r from-white to-zinc-300 text-3xl md:text-4xl bg-clip-text text-transparent text-center px-8'>Potential <b>Use Cases</b></h2>
                <span className='fade-in-blur text-zinc-400 text-base md:text-xl mt-4 mb-9 md:w-2/3 text-center px-8'>Here are some use cases that align with the values of peer-to-peer global citizenship:</span>
                <div className='w-full h-1/2 flex items-center mt-12'>
                    <div className='w-1/4 h-full z-30 absolute left-0 top-0 pointer-events-none' style={{ background: 'linear-gradient(90deg, #070f21 0%, #ff000000 100%)' }} />
                    <div className='w-1/4 h-full z-30 absolute right-0 top-0 pointer-events-none' style={{ background: 'linear-gradient(-90deg, #070f21 0%, #ff000000 100%)' }} />

                    <div ref={addToRefs} className='w-full md:w-1/2 text-center border-zinc-50 border-solid border-[1px] md:rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md absolute md:left-1/4'>
                        <div className='absolute -top-12 left-0 w-full '>
                            <div className='w-28 h-28 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                    <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                        <img src={Election} alt='Election' className='w-2/4 object-contain' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-12'>Direct Participation in International Decisions</h2>
                        <p className='text-base text-zinc-400'>Users could vote directly on pressing global issues, such as UN resolutions or global policy matters. This could take the form of decentralized polls.</p>
                    </div>

                    <div ref={addToRefs} className='w-full md:w-1/2 text-center border-zinc-50 border-solid border-[1px] md:rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md absolute md:left-1/4'>
                        <div className='absolute -top-12 left-0 w-full '>
                            <div className='w-28 h-28 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                    <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                        <img src={Document} alt='Education' className='w-2/4 object-contain' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-12'>Education & Skill Verification</h2>
                        <p className='text-base text-zinc-400'>Users can upload and verify each other’s credentials, bypassing traditional institutions. For example, a peer-verified diploma or certification could validate skills or educational achievements.</p>
                    </div>

                    <div ref={addToRefs} className='w-full md:w-1/2 text-center border-zinc-50 border-solid border-[1px] md:rounded-xl p-8 bg-white bg-opacity-5 backdrop-blur-md absolute md:left-1/4'>
                        <div className='absolute -top-12 left-0 w-full '>
                            <div className='w-28 h-28 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                <div className='w-24 h-24 mx-auto rounded-full bg-white bg-opacity-5 flex justify-center items-center'>
                                    <div className='w-16 h-16 mx-auto rounded-full bg-[#373D4B] flex justify-center items-center border-solid border-white border-[1px]'>
                                        <img src={Judge} alt='Judge' className='w-2/4 object-contain' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h2 className='text-xl text-zinc-50 font-bold mb-2 mt-12'>Peer-Mediated Dispute Resolution</h2>
                        <p className='text-base text-zinc-400'>Create a system for resolving issues through peer mediation. For instance, if a user needs to settle a dispute with another global citizen or a digital service provider, they could select impartial peer mediators to help settle the case.</p>
                    </div>

                </div>
                
            </div>

            <div className='w-full flex justify-center'>
                <div className='w-[1200px] mx-auto md:w-full h-[700px] md:h-[1200px] rounded-full absolute -bottom-[500px] md:-bottom-[600px] pointer-events-none animate-opacity-pulse' style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 88, 212, 0.30) 0%, rgba(0, 88, 212, 0.00) 100%)' }} />
            </div>
            <style jsx>{`
                @keyframes opacityPulse {
                    0%, 100% {
                        opacity: 0.8;
                    }
                    50% {
                        opacity: 0.6;
                    }
                }
                .animate-opacity-pulse {
                    animation: opacityPulse 5s infinite;
                }
            `}</style>


        </div>
    );
};

export default Uses;