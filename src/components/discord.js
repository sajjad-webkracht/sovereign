import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DiscordIcon from '../images/discord.svg';
import Shape from '../images/shape.svg';

gsap.registerPlugin(ScrollTrigger);


const Discord = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll('.fade-in-blur-2');
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
        <div ref={containerRef} className='pt-8 flex gap-8 flex-col justify-between items-center relative overflow-clip'>
            <h1 className='fade-in-blur-2 px-8 md:px-16 bg-gradient-to-r from-white to-zinc-300 text-3xl md:text-4xl bg-clip-text text-transparent text-center'>Our <b>Vision</b></h1>
            <span className='fade-in-blur-2 px-8 md:px-16 text-zinc-400 text-base md:text-xl md:w-2/3 -mt-4 md:mt-0 text-center'>We believe in a global society where identity is self-sovereign and peer-verified, beyond the control of any single power. This is a world where each of us can move, connect, and belong freely, where digital tools empower rather than constrain us. By embracing a peer-to-peer identity, we lay the foundation for true global citizenship, enabling a community where everyone’s autonomy is respected.</span>
            <a href="/" className='fade-in-blur-2 text-zinc-950 bg-zinc-50 duration-300 px-16 py-2 rounded-md hover:shadow-white-glow'>
                    Start Now
            </a>
            <div className='w-full flex justify-center relative h-[40vw] md:overflow-clip mt-10'>
                <div className='bg-zinc-50 absolute left-[10%] md:left-[52%] z-10 bottom-[58%] rounded-xl p-5 md:p-8 text-sm sm:text-base md:text-xl w-[80%] md:w-1/3 lg:w-1/4'>
                    Join and Talk with Your Like Minded People on Discord
                    <img src={Shape} alt='Shape' className='absolute -bottom-8 h-8 left-[60%] md:left-8' />
                </div>
                <div className='h-[1px] w-full absolute top-[20vw]' style={{background: 'linear-gradient(90deg, rgba(24, 24, 27, 0.00) 0%, #FAFAFA 50%, rgba(24, 24, 27, 0.00) 100%)'}} />
                <div className='bg-[#A1A1AA] bg-opacity-5 w-[50vw] h-[50vw] rounded-full flex justify-center items-center relative' >
                    <div className='bg-[#A1A1AA] bg-opacity-5 w-[40vw] h-[40vw] rounded-full flex justify-center items-center'>
                        <div className='bg-[#A1A1AA] bg-opacity-5 w-[30vw] h-[30vw] rounded-full flex justify-center items-center'>
                            <div className='bg-[#A1A1AA] bg-opacity-5 w-[27vw] h-[27vw] rounded-full flex justify-center items-center'>
                                <Link to='/' className='bg-[#A1A1AA] bg-opacity-5 w-[22vw] h-[22vw] rounded-full backdrop-blur-md flex justify-center items-center border-solid border-zinc-50 border-[1px] group '>
                                    <div className='bg-[#A1A1AA] bg-opacity-5 w-[18vw] h-[18vw] rounded-full backdrop-blur-md flex justify-center items-center border-solid border-zinc-50 border-[1px] group-hover:scale-105 duration-300 delay-75'>
                                        <div className='bg-[#A1A1AA] bg-opacity-5 w-[14vw] h-[14vw] rounded-full backdrop-blur-md flex justify-center items-center border-solid border-zinc-50 border-[1px] group-hover:scale-110 duration-300 delay-75'>
                                            <div className='relative w-[8vw] h-[8vw]'>
                                                <img src={DiscordIcon} alt='Discord' className='top-0 left-0 absolute group-hover:scale-105 duration-200' />
                                                <img src={DiscordIcon} alt='Discord' className='top-0 left-0 absolute group-hover:scale-105 duration-300 group-hover:blur-lg opacity-45' />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-8 md:px-16 py-8 w-full justify-between flex-col items-center md:flex-row md:absolute bottom-0 flex'> 
                <span className='text-lg text-center text-zinc-400'>Copyright © 2024 SelfSovereign.</span>
                <span className='text-lg text-center text-zinc-400'>
                    <Link to="mailto:info@selfsovereign.in" className='hover:text-zinc-200 duration-200'>
                    info@selfsovereign.in
                    </Link>
                </span>
            </div>
            <div className='w-full h-[1200px] rounded-full absolute -bottom-[600px] pointer-events-none animate-opacity-pulse'  style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(0, 88, 212, 0.30) 0%, rgba(0, 88, 212, 0.00) 100%)' }}/>
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

export default Discord;