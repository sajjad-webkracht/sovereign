import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import Back from "../images/back.svg"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isMenuOpen]);
    

    return (
        <header className='px-8 md:px-16 py-8 flex justify-between items-center'>
            <Link to="/">
                <h1 className="text-zinc-50 text-base md:text-xl">
                    Self<b>Sovereign</b>
                </h1>
            </Link>
            <div className='hidden md:block'>
                <a href="/" className="text-lg text-zinc-50 mr-6 duration-300 hover:text-shadow-white-glow">
                    Discord Community
                </a>
                <a href="/" className='text-zinc-950 bg-zinc-50 duration-300 px-8 py-2 rounded-md hover:shadow-white-glow'>
                    Start Now
                </a>
            </div>
            <button className='flex md:hidden flex-col gap-1' onClick={toggleMenu}>
                <div className='w-8 h-[1.5px] bg-zinc-50' />
                <div className='w-8 h-[1.5px] bg-zinc-50' />
                <div className='w-8 h-[1.5px] bg-zinc-50' />
            </button>

            <div className={`fixed top-0 right-0 w-full h-svh bg-abha-900 backdrop-blur-md z-50 bg-opacity-40 text-zinc-50 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button className='absolute top-8 left-8 w-full bg-zinc-50 bg-opacity-10 py-3 pl-3 rounded-l-md' onClick={toggleMenu}>
                    <img src={Back} alt='Back' className='w-9' />
                </button>
                <nav className='pt-28 pb-8 flex flex-col items-start px-8 h-full justify-between w-full'>
                    <div className='flex flex-col'>
                        <a href="/" className='text-lg mb-4 duration-300 hover:text-shadow-white-glow'>
                            Discord Community
                        </a>
                        <a href="/" className='text-zinc-950 bg-zinc-50 duration-300 px-8 py-2 rounded-md hover:shadow-white-glow mb-8 w-full text-center'>
                            Start Now
                        </a>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-base text-zinc-400 mb-2'>
                            <Link to="mailto:info@selfsovereign.in" className='hover:text-zinc-200 duration-200'>
                                info@selfsovereign.in
                            </Link>
                        </span>
                        <span className='text-base text-zinc-400'>Copyright © 2024 SelfSovereign.</span>
                    </div>
                </nav>
            </div>


        </header>
    );
};

export default Header;