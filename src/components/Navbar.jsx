import React from 'react';

const Navbar = () => {
    return (
        <div className='portfolio-nav w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-[var(--primary)]'>
            <h3 className='ml-4 text-sm sm:text-xl'>Joel Biswas</h3>
            <ul className='flex gap-3 sm:gap-8 px-4'>
                <li>
                    <a href='#home'>Home</a>
                </li>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Work Experience</a>
                </li>
                <li>
                    <a href='#skills'>Skills</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar