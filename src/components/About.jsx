import React from 'react';
import AboutCard from './AboutCard';
const areas = [
 ['Electrical Design','I design schematics and PCBs, bringing together power, microcontrollers, and peripheral interfaces.'],
 ['Embedded Systems','I connect code with hardware using ESP32 microcontrollers, C++, and wireless communication.'],
 ['Digital & RTL Design','I design digital hardware in SystemVerilog, from instruction decoding and ALUs to processor control and memory interfaces.'],
 ['Robotics','I integrate motor control, power distribution, and mechanical design into robots that move.'],
 ['Prototyping','I turn designs into physical builds through 3D printing, soldering, testing, and iteration.'],
 ['Simulation & Analysis','I use Cadence Xcelium for RTL simulation and Fusion 360 for mechanical stress analysis.']
];
export default function About(){return <div id="about" className="mt-8">
 <h2 className="text-center text-4xl text-[var(--primary)] tracking-[1px]">ABOUT</h2>
 <div className="md:flex items-center">
  <div className="my-5 md:my-0 md:ml-8 md:mr-4 w-full md:w-1/3 flex flex-col gap-5 px-4 md:px-0">{areas.map(([name,description])=><AboutCard key={name} name={name} description={description}/>)}</div>
  <div className="w-full md:w-2/3 px-4 md:pl-0 md:pr-8 flex flex-col gap-5 about-copy">
   <div><p className="text-lg mb-1">A little about me</p><p>I am studying Electrical Engineering at Georgia Tech, with interests in robotics, embedded systems, and chip design. I enjoy connecting the logic inside a processor with the electronics and mechanisms that make a robot move.</p></div>
   <div><p className="text-lg mb-1">What I build</p><ul>
    <li><strong>Digital hardware</strong> — A 32-bit RISC-V core in SystemVerilog, developed through SiliconJackets onboarding.</li>
    <li><strong>Robotics</strong> — A custom R2-D2 droid and a Star Wars-inspired wireless controller.</li>
    <li><strong>Electromechanical systems</strong> — A 12 V axial-flux motor, from rotor and stator geometry to mechanical analysis.</li>
    <li><strong>Practical prototypes</strong> — A budget ventilator with an ESP32-controlled compression mechanism and LCD interface.</li>
   </ul></div>
   <div><p className="text-lg mb-1">Experience</p><ul>
    <li><strong>SiliconJackets</strong> — Member of Georgia Tech’s student chip-design organization, developing processor RTL and building verification experience.</li>
    <li><strong>Origami Robotics</strong> — Electrical engineering internship designing a custom ESP32-C3 PCB with power regulation, CAN, and I²C expansion.</li>
    <li><strong>FIRST Robotics Competition</strong> — Team captain and electrical lead for Lambert Robotics, integrating power distribution, sensors, and motor controllers.</li>
   </ul></div>
   <div><p className="text-lg mb-1">My tools</p><ul>
    <li><strong>Digital design</strong> — SystemVerilog, RISC-V, RTL design, and Cadence Xcelium.</li>
    <li><strong>Electronics & firmware</strong> — KiCad, ESP32, C++, PWM, and wireless communication.</li>
    <li><strong>CAD & analysis</strong> — Onshape, Fusion 360, and finite element analysis.</li>
    <li><strong>Fabrication</strong> — 3D printing, soldering, and circuit prototyping.</li>
   </ul></div>
  </div>
 </div>
</div>}
