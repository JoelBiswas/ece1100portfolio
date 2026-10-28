import React from 'react';
import SkillCard from './SkillCard';
const rows = [['SystemVerilog','RISC-V','RTL Design','Xcelium','Digital Logic','Verification'],['Onshape','KiCad','ESP32','C++','Fusion 360','3D Printing'],['Motor Control','Wireless','FEA','Python','Soldering','Git']];
export default function Skills() {
 return <div id="skills" className="mt-8">
  <h2 className="text-[var(--primary)] tracking-[1px] text-center text-4xl">SKILLS</h2>
  <div className="mx-4">{rows.map((row,index)=><div key={index} className="overflow-hidden w-full">
   <div className={'flex space-x-4 '+(index % 2 ? 'animate-slideLeft':'animate-slideRight')}>
    {[...row,...row].map((name,i)=><SkillCard key={i} name={name} image={process.env.PUBLIC_URL+'/images/engineering/'+name.toLowerCase().replaceAll(' ','-').replaceAll('+','p')+'.svg'} />)}
   </div>
  </div>)}</div>
 </div>;
}
