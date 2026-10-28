import React from 'react';
import Face from '../images/home/face.png';
const Figma = process.env.PUBLIC_URL + '/images/engineering/kicad.svg';
const Typescript = process.env.PUBLIC_URL + '/images/engineering/esp32.svg';
const Flutter = process.env.PUBLIC_URL + '/images/engineering/systemverilog.svg';
const ReactImage = process.env.PUBLIC_URL + '/images/engineering/cpp.svg';
const Unity = process.env.PUBLIC_URL + '/images/engineering/risc-v.svg';
const Tailwind = process.env.PUBLIC_URL + '/images/engineering/motor-control.svg';
const Swift = process.env.PUBLIC_URL + '/images/engineering/rtl-design.svg';
const CSharp = process.env.PUBLIC_URL + '/images/engineering/xcelium.svg';

const CircularHero = () => {
  return (
    <div className='relative'>
      <div className="relative flex justify-center items-center bg-[var(--primary)] rounded-full w-[var(--hero-diameter)] h-[var(--hero-diameter)] animate-spin-slow">
        <div className='absolute -top-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse'>
          <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
            <img src={Typescript} alt="ESP32" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className='absolute -left-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse'>
          <div className="hover:scale-[1.2] transition-transform duration-300 ease-in-out">
            <img src={Flutter} alt="SystemVerilog" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -right-[var(--hero-moon-radius)] flex items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Figma} alt="KiCad" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute flex items-center -bottom-[var(--hero-moon-radius)] drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={ReactImage} alt="C++" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -top-[var(--hero-moon-offset)] -right-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Unity} alt="RISC-V" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -bottom-[var(--hero-moon-offset)] -right-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Swift} alt="RTL Design" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -left-[var(--hero-moon-offset)] -bottom-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={Tailwind} alt="Motor Control" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
        <div className="absolute -top-[var(--hero-moon-offset)] -left-[var(--hero-moon-offset)] flex justify-start items-center drop-shadow-custom animate-spin-slow-reverse">
          <div className='hover:scale-[1.2] transition-transform duration-300 ease-in-out'>
            <img src={CSharp} alt="Xcelium" className="w-[var(--hero-moon-diameter)] h-[var(--hero-moon-diameter)] rounded-full object-cover" />
          </div>
        </div>
      </div>
      <div className="absolute -top-0 rounded-full max-[550px]:m-8 m-10 overflow-clip drop-shadow-custom flex items-center justify-center">
        <img src={Face} alt="Joel Biswas" className="object-cover w-full" />
      </div>
    </div>
  );
};

export default CircularHero;
