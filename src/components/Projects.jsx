import React from 'react';
import ProjectCard from './ProjectCard';
const projects = [
 {id:'risc-v-core',images:[{"file": "risc-v-gallery-1.png", "alt": "RISC-V core physical layout", "source": "https://raw.githubusercontent.com/JoelBiswas/RISC-V-Core/HEAD/Docs/Images/CPUAfterHSOptimizations.PNG"}],name:'32-bit RISC-V Core',tags:['Chip Design','SystemVerilog','RTL'],technologies:['SystemVerilog','RISC-V','Xcelium'],description:'A 32-bit processor core written in SystemVerilog through Georgia Tech’s SiliconJackets onboarding. Implements a subset of RISC-V instructions, connecting instruction decode, an ALU, a register file, and memory interfaces.',details:[
  'Designed the processor RTL in SystemVerilog, including instruction decoding, the register file, arithmetic and logic operations, program-counter control, and memory interfaces.',
  'The core supports a subset of RISC-V functionality spanning arithmetic, shifts, loads, stores, and branches. Design work also explores stalls, memory handshakes, and control timing.',
  'Developed as part of SiliconJackets, Georgia Tech’s student chip-design organization. The repository now includes directed and constrained-random verification, plus a SKY130 synthesis and physical design flow. Verification remains in progress, with a load/store handshake issue under investigation; instruction pipelining is planned.'
 ],links:[['GitHub repository','https://github.com/JoelBiswas/RISC-V-Core']]},
 {id:'r2d2', images:[{file:'r2d2-photo.jpg',alt:'Photo of the assembled 3D-printed R2-D2 droid'},{file:'controller-cad.png',alt:'CAD render of the custom Rebel Alliance RF controller'}], name:'R2-D2 + Custom Controller', tags:['Robotics','Embedded Systems','PCB Design'], technologies:['ESP32','KiCad','Onshape','C++','Wireless'], description:'A custom three-wheel R2-D2 droid with a rotating dome, paired with a Rebel Alliance-inspired RF controller. Built around ESP32 control, motor drivers, and custom mechanical design.', details:[
  'The droid brings together DC gearmotors, a stepper-driven dome, motor drivers, battery power distribution, and 3D-printed parts designed in Onshape.',
  'The custom controller uses two joysticks, six buttons, an ESP32, and an nRF24L01+ PA/LNA radio. A custom KiCad PCB and printed enclosure bring the controls into a Rebel Alliance-shaped design.',
  'An early drivetrain iteration exposed the limits of undersized motors. Scaling and redesigning the robot became an important lesson in motor sizing, torque, and integrating mechanical and electrical systems.'
 ],links:[['Droid repository','https://github.com/JoelBiswas/r2d2'],['Controller repository','https://github.com/JoelBiswas/CustomRFController']]},
 {id:'axial-flux', images:[{file:'motor-cad.png',alt:'CAD render of the assembled axial-flux motor and housing'}],name:'12 V Axial-Flux Motor',tags:['Motor Design','CAD','FEA'],technologies:['Onshape','Fusion 360','FEA'],description:'A custom 12 V axial-flux motor with two rotors, one stator, nine coils, and twelve magnets per rotor. Designed around electromagnetic geometry, mechanical fit, and manufacturability.',details:[
  'The dual-rotor, single-stator design uses nine coils and twelve magnets on each rotor.',
  'Design work covered coil geometry, magnet sizing, air gaps, bearings, shaft design, and manufacturing tolerances.',
  'Onshape and Fusion 360 supported rotor and stator CAD, with Fusion 360 finite element analysis used to investigate mechanical stress.'
 ],links:[['Motor repository','https://github.com/JoelBiswas/Axial-Flux-Motor']]},
 {id:'ventilator', images:[{file:'ventilator-cad.png',alt:'CAD render of the ventilator compression linkage and AMBU bag'}],name:'Budget Ventilator',tags:['Electromechanical Design','Embedded Control','Prototyping'],technologies:['Onshape','ESP32','C++','Motor Control'],description:'A 3D-printable ventilator prototype using an ESP32, a brushed DC gearmotor, and a linkage to automate AMBU-bag compression. An LCD interface provides rate and compression-volume controls.',details:[
  'Designed and fabricated a 3D-printable mechanism to automate AMBU-bag compression using a brushed DC gearmotor and linkage.',
  'An ESP32 runs the embedded control, while an LCD interface allows adjustment of respiratory rate and compression volume through PWM motor control.',
  'The project combines mechanical CAD, fabrication, electronics, and C++ firmware in a budget-focused engineering prototype.'
 ],links:[['Ventilator repository','https://github.com/JoelBiswas/DIYVentilator']]}
];
export default function Projects(){return <div id="projects" className="mt-8">
 <h2 className="mt-3 mb-3 text-center text-[var(--primary)] text-4xl tracking-[1px]">PROJECTS</h2>
 <div className="project-list">{projects.map(project=><ProjectCard key={project.id} {...project}/>)}</div>
</div>}
