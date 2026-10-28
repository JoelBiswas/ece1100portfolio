import React from 'react'
import Arrow from '../images/home/arrow.png'
import CircularHero from './CircularHero'

const Home = () => {
  return (
    <div id='home' className='flex justify-evenly flex-gap-3 items-center mx-4 md:ml-24 pt-24 flex-col md:flex-row'>
      <div className='w-full md:w-2/3 flex flex-col justify-center items-center'>
        <div>
          <h1 className='text-left'>Hey,</h1>
          <div className='flex gap-3'>
            <h1>I am
              <span className='text-[var(--primary)] ml-2 text-[46px]'>Joel Biswas</span></h1>
          </div>
          <div className='hero-roles'>
            <div className='hero-roles-track'>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Electrical Engineering Student</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Robotics Enthusiast</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>PCB Designer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Embedded Systems Developer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>RTL Designer</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Chip Design Enthusiast</h2>
              <h2 className='mt-1 text-xl md:text-2xl lg:text-3xl opacity-15'>Electrical Engineering Student</h2>
            </div>
          </div>
          <p className='mt-6 md:mt-4 leading-6 text-[18px] max-w-[370px]'>I am an electrical engineering student at Georgia Tech exploring robotics and chip design. From a custom R2-D2 and wireless controller to a RISC-V processor core, I build hardware through embedded systems, digital logic, and hands-on engineering.</p>
          <div className="flex flex-wrap gap-3 my-4">
            <a href="#projects" className="flex items-center justify-center gap-3 rounded-sm bg-[var(--primary)] text-[var(--light)] h-[42px] px-3 drop-shadow-custom hover:scale-105 transition-transform duration-300">
              <span className="text-xl">Projects</span>
              <img src={Arrow} alt="" className="w-[30px] h-[20px]"/>
            </a>
            <a href={process.env.PUBLIC_URL + '/resume/Joel-Biswas-Resume.pdf'} download="Joel-Biswas-Resume.pdf" className="flex items-center justify-center gap-2 rounded-sm border-2 border-[var(--primary)] text-[var(--primary)] h-[42px] px-3 drop-shadow-custom hover:scale-105 transition-transform duration-300">
              <span className="text-xl">Download Résumé</span>
              <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5"/></svg>
            </a>
          </div>
        </div>
      </div>
      <div className='w-full my-6 md:my-0 flex justify-center items-center'>
        <CircularHero />
      </div>
    </div>
  )
}

export default Home