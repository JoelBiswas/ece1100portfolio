'use strict';
const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const projects = {
 r2d2: {
  title:'R2-D2 & custom RF controller', category:'Robotics · Embedded systems', status:'Robot built / custom controller designed',
  lead:'A personal robotics project that brings a familiar droid to life through custom mechanics, motor control, and electronics — with a matching Rebel Alliance-inspired controller.',
  stats:[['3','Driven wheels'],['ESP32','Embedded control'],['2 + 6','Joysticks + buttons']],
  images:[['r2d2-photo.jpg','The assembled, 3D-printed R2-D2 droid on the workbench.'],['controller-cad.png','CAD model of the custom Rebel Alliance RF controller.']],
  overview:[['The brief','Build a smaller-scale R2-D2 that can drive and rotate its dome. Design the mechanical parts and electrical system together, then extend the project with a custom wireless controller.'],['My contribution','Designed the droid’s CAD assemblies and 3D-printable parts, planned the wiring and power distribution, and integrated the drive motors and stepper-driven dome. The separate RF controller combines a custom PCB and enclosure with an ESP32, nRF24L01+ PA/LNA radio, two joysticks, and six buttons.'],['The build','The documented droid uses a PS3 controller. The custom RF controller is a separate extension designed for the same robot, with its own PCB and battery-powered enclosure. Both projects were created for Hack Club’s Highway to Undercity.']],
  nodes:[['User input','Two joysticks and six buttons provide the inputs for the custom RF controller. The original droid design uses a PS3 controller.'],['Wireless control','The custom controller is designed around an nRF24L01+ PA/LNA radio and an ESP32. Its enclosure includes an opening for the external antenna.'],['Embedded electronics','An ESP32 coordinates the droid’s motor drivers. The electrical system brings together battery power, voltage conversion, drive control, and dome rotation.'],['Mechanical output','DC gearmotors drive the wheels, while a stepper motor turns the dome through a shaft hub and bearing assembly.']],
  architectureNote:'Conceptual subsystem overview. The custom RF controller is an extension of the original PS3-controlled droid; the diagram is not a live connection to hardware.',
  notes:[['Torque before scale','An early full-size design exposed the limits of undersized motors. Redesigning and scaling the robot made motor sizing and mechanical load central to the next iteration.'],['Electronics need a home','The droid’s internal plate and mounting points organize its electronics. The controller’s custom enclosure supports the PCB, battery, controls, and antenna as one assembly.'],['A design worth documenting','CAD, wiring schematics, fabrication files, and assembly notes live alongside the project. That makes the build easier to revisit and improve.']],
  links:[['Droid repository','https://github.com/JoelBiswas/r2d2'],['Controller repository','https://github.com/JoelBiswas/CustomRFController']]
 },
 riscv:{
  title:'32-bit RISC-V processor core',category:'Digital design · Computer architecture',status:'RTL complete / verification in progress',
  lead:'A SystemVerilog processor core implementing a subset of RISC-V instructions, developed through Georgia Tech’s SiliconJackets onboarding.',
  stats:[['32-bit','Data width'],['RTL','Design completed'],['Xcelium','Simulation tool']],images:[],
  overview:[['The brief','Translate an instruction-set specification into digital hardware: fetch an instruction, decode it, operate on data, and update architectural state.'],['My contribution','Designed SystemVerilog RTL for instruction decoding, the register file, the ALU, program-counter control, and memory interfaces. The core supports arithmetic, shifts, loads, stores, and branches within a subset of RISC-V.'],['Current focus','Verification work uses SystemVerilog testbenches and Cadence Xcelium. Physical design is a later onboarding stage; this project is presented as processor RTL, not a fabricated chip.']],
  nodes:[['Instruction fetch','The program counter identifies the instruction to read. Control logic decides whether execution continues sequentially or follows a branch.'],['Decode & register read','Instruction fields identify the operation and registers. Control signals select operands, immediate values, and the intended datapath behavior.'],['ALU & memory','The ALU handles arithmetic, shifts, and address calculations. Loads and stores use the data-memory interface, including control around memory responses.'],['Writeback & control','Results return to the register file when required. Program-counter updates, stalls, and handshakes keep instruction flow coordinated with the datapath.']],
  architectureNote:'Conceptual data flow, not a pipeline-stage or clock-cycle specification. The instruction walkthrough below illustrates ADD semantics rather than simulating the project’s RTL.',
  notes:[['Specification to signals','An instruction is more than an opcode: register addresses, immediates, ALU selections, and write enables must agree for the resulting hardware to behave correctly.'],['Memory changes the control problem','Loads and stores introduce timing and handshake considerations beyond arithmetic. Stalls and memory responses need explicit control behavior.'],['Verification is a separate milestone','A completed RTL design is the starting point for checking behavior. The portfolio distinguishes design completion, verification in progress, and future physical-design work.']],
  links:[]
 },
 motor:{
  title:'12 V axial-flux motor',category:'Electromechanical design · Simulation',status:'Designed / mechanically simulated',
  lead:'A compact axial-flux motor design with a disc-shaped stator between two magnet rotors, developed through CAD and mechanical stress analysis.',
  stats:[['12 V','Nominal voltage'],['9','Stator coils'],['24','Magnets total']],
  images:[['motor-cad.png','CAD assembly of the motor’s enclosure and shaft.']],
  overview:[['The brief','Explore axial-flux motor geometry in a custom design built around manufacturable, primarily 3D-printed components.'],['My contribution','Designed the rotor, stator, housing, and shaft arrangement in Onshape. Considered magnet placement, coil geometry, air gaps, bearing alignment, and manufacturing tolerances. Used Fusion 360 for mechanical simulation.'],['The configuration','Two rotors each carry twelve permanent magnets. A single stator contains nine coils in a three-phase arrangement. The documented design uses approximately 70 turns of 18 AWG wire per coil and a rotor diameter of about 152 mm.']],
  nodes:[['Rotor pair','Two magnet discs face the stator, with twelve permanent magnets on each rotor. The arrangement defines the motor’s axial magnetic geometry.'],['Wound stator','Nine copper coils are arranged into three phases. The stator remains fixed between the rotating magnet discs.'],['Air gap & alignment','Rotor-to-stator clearance, bearing alignment, and manufacturing tolerances all matter to the assembly’s mechanical fit.'],['Shaft & housing','The shaft, bearings, and housing support the rotating assembly. Mechanical stress analysis helps examine structural loading in the design.']],
  architectureNote:'Design specifications and mechanical analysis are documented. No measured torque, efficiency, or power-output claims are implied.',
  notes:[['Compact geometry has constraints','Stacking the rotor and stator discs creates a compact axial layout, but puts attention on axial clearance, alignment, and structural support.'],['Manufacturing is part of design','Coil dimensions, magnets, bearings, and printed geometry must fit together. Tolerances are a design input, not a detail reserved for assembly.'],['Simulation answers a specific question','The Fusion 360 work examines mechanical behavior. It does not establish measured electrical output or motor efficiency.']],
  links:[['Motor repository','https://github.com/JoelBiswas/Axial-Flux-Motor']]
 },
 ventilator:{
  title:'Budget ventilator prototype',category:'Embedded control · Mechanical design',status:'Engineering prototype',
  lead:'A 3D-printable compression mechanism that combines an ESP32, a brushed DC gearmotor, and an LCD interface to automate AMBU-bag compression.',
  stats:[['ESP32','Controller'],['PWM','Motor control'],['3D print','Fabrication']],
  images:[['ventilator-cad.png','CAD model of the linkage, support structure, and AMBU bag.']],
  overview:[['The brief','Explore a lower-cost ventilator mechanism using 3D-printed parts and standard hardware such as nuts and bolts.'],['My contribution','Designed and fabricated a linkage-driven compression mechanism. Implemented ESP32 firmware and an LCD interface for adjusting respiratory rate and compression volume through PWM motor control.'],['The prototype','A brushed DC gearmotor drives the linkage. The project brings together mechanical CAD, fabrication, electronics, and C++ firmware. It is an engineering prototype; clinical performance has not been established here.']],
  nodes:[['LCD interface','The interface exposes controls for respiratory rate and compression volume. It provides the user-facing inputs to the embedded system.'],['ESP32 firmware','The microcontroller processes settings and controls the motor through PWM, connecting the interface to the physical mechanism.'],['Motor & linkage','A brushed DC gearmotor drives a mechanical linkage that turns rotation into a repeating compression motion.'],['Bag compression','The printed structure supports the AMBU bag and compression mechanism. This is a prototype mechanism, not a claim of clinical validation.']],
  architectureNote:'Functional overview of an engineering prototype. The diagram does not represent a clinical control model or live medical device.',
  notes:[['Build around accessible parts','The design uses 3D-printable components and standard hardware, keeping fabrication practical for a personal engineering project.'],['Design the interface with the mechanism','Rate and compression settings need to connect to the motor and linkage behavior. The project ties interface design to embedded and mechanical implementation.'],['Document the whole system','The repository includes CAD, electrical design, firmware, printing files, a bill of materials, and a demonstration video.']],
  links:[['Ventilator repository','https://github.com/JoelBiswas/DIYVentilator']]
 }
};

// Complete the selected-work collection with the two mechanical projects.
$('#project-grid').insertAdjacentHTML('beforeend',[
 ['motor','03','Geometry in motion.','12 V axial-flux motor','motor-cad.png','CAD assembly of the axial-flux motor',['Motor design','Onshape','FEA']],
 ['ventilator','04','Practical by design.','Budget ventilator prototype','ventilator-cad.png','CAD of the budget ventilator',['Embedded control','C++','3D printing']]
].map(([id,n,title,subtitle,img,alt,tags])=>`<article class="project-card" data-category="mechanical"><button class="project-open" data-project="${id}" aria-label="Explore ${subtitle}"><div class="project-visual cad-visual"><img src="assets/${img}" alt="${alt}" loading="lazy"><span class="image-label">${id==='motor'?'AXIAL-FLUX / CAD ASSEMBLY':'VENTILATOR / CAD ASSEMBLY'}</span><span class="open-corner" aria-hidden="true">↗</span></div><div class="project-heading"><span class="project-number">${n}</span><h3>${title}</h3></div><p class="project-summary">${subtitle}</p><div class="tags">${tags.map(t=>`<span>${t}</span>`).join('')}</div></button></article>`).join(''));
$$('.project-open').forEach(b=>{if(!b.hasAttribute('aria-label'))b.setAttribute('aria-label',`Explore ${projects[b.dataset.project].title}`);});

function filterProjects(category){
 const valid=['all','robotics','silicon','mechanical'];if(!valid.includes(category))return;
 $$('.filters button').forEach(b=>{const active=b.dataset.filter===category;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active);});
 let count=0;$$('.project-card').forEach(c=>{c.hidden=category!=='all'&&c.dataset.category!==category;if(!c.hidden)count++;});
 $('.project-count').textContent=`${count} project${count===1?'':'s'}`;
}
$('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)filterProjects(b.dataset.filter);});

// Accessible tabs: arrows select and focus, Home/End jump to the ends.
function bindTabs(list,select){
 list.addEventListener('click',e=>{const tab=e.target.closest('[role=tab]');if(tab)select(tab);});
 list.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','Home','End'].includes(e.key))return;const tabs=$$('[role=tab]',list);let i=tabs.indexOf(document.activeElement);if(i<0)return;e.preventDefault();i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;select(tabs[i]);tabs[i].focus();});
}
function selectTab(tab){$$('[role=tab]',tab.parentElement).forEach(t=>{const active=t===tab;t.setAttribute('aria-selected',active);t.tabIndex=active?0:-1;});}

const roboticsMarkup=$('#lab-panel').innerHTML;
const traceStages=['Fetch','Decode','Read','Execute','Write back'];
function traceMarkup(compact=false){return `<div class="trace ${compact?'compact-trace':''}" data-step="0" data-a="12" data-b="7"><div class="trace-top"><span class="tiny-label">INSTRUCTION WALKTHROUGH</span><code>ADD x5, x6, x7</code></div>${compact?'':`<div class="trace-inputs"><label>x6 <input aria-label="Register x6 value" type="number" min="0" max="31" value="12" data-register="a"></label><label>x7 <input aria-label="Register x7 value" type="number" min="0" max="31" value="7" data-register="b"></label><span>Example values: 0–31</span></div>`}<div class="trace-rail" role="group" aria-label="Instruction steps">${traceStages.map((s,i)=>`<button data-step-select="${i}" aria-pressed="${i===0}"><span>${String(i+1).padStart(2,'0')}</span>${s}</button>`).join('')}</div><div class="trace-readout" aria-live="polite"></div><div class="trace-controls"><button class="trace-prev" aria-label="Previous instruction step" disabled>← Back</button><span class="trace-progress">1 / 5</span><button class="trace-next">Next step →</button></div><p class="trace-note">Illustrative data flow · not a cycle-accurate RTL simulation</p></div>`;}
function updateTrace(trace){
 const step=+trace.dataset.step;
 const bounded=v=>Math.min(31,Math.max(0,Math.round(Number(v)||0)));
 const a=bounded($('[data-register="a"]',trace)?.value ?? trace.dataset.a),b=bounded($('[data-register="b"]',trace)?.value ?? trace.dataset.b);
 const views=[['PC → Instruction memory','Read ADD x5, x6, x7','Fetch the instruction at the current program-counter address.'],['Instruction → Control signals','rd = x5 · rs1 = x6 · rs2 = x7','Decode a register-to-register ADD and select the ALU’s addition operation.'],['Register file → Operands',`x6 = ${a} · x7 = ${b}`,'Read the two source-register values into the datapath.'],['Operands → ALU',`${a} + ${b} = ${a+b}`,'The ALU adds the operands. ADD does not require a data-memory access.'],['ALU → Register file',`x5 ← ${a+b}`,'Write the result into the destination register and continue instruction flow.']];
 $('.trace-readout',trace).innerHTML=`<span class="tiny-label">${views[step][0]}</span><strong>${views[step][1]}</strong><p>${views[step][2]}</p>`;
 $$('[data-step-select]',trace).forEach(b=>{b.setAttribute('aria-pressed',+b.dataset.stepSelect===step);b.classList.toggle('completed',+b.dataset.stepSelect<step);});
 $('.trace-prev',trace).disabled=step===0;$('.trace-next',trace).textContent=step===4?'Restart trace ↺':'Next step →';$('.trace-progress',trace).textContent=`${step+1} / 5`;
}
function initTrace(root){$$('.trace',root).forEach(updateTrace);}
bindTabs($('.lab-tabs'),tab=>{
 selectTab(tab);const panel=$('#lab-panel');panel.setAttribute('aria-labelledby',tab.id);
 panel.innerHTML=tab.dataset.lab==='robotics'?roboticsMarkup:`<div class="silicon-lab">${traceMarkup(true)}</div><div class="lab-bottom"><div><span class="tiny-label">RISC-V / 32-BIT PROCESSOR</span><p>Follow one instruction through the core.</p></div><button class="circle-button" data-project="riscv" aria-label="Explore the RISC-V case study">↗</button></div><div class="lab-specs"><span>SystemVerilog</span><span>RTL design</span><span>Xcelium</span></div>`;
 initTrace(panel);
});

document.addEventListener('click',e=>{
 const target=e.target.closest('[data-project]');if(target){openCase(target.dataset.project);return;}
 const trace=e.target.closest('.trace');if(!trace)return;
 const step=e.target.closest('[data-step-select]');
 if(step)trace.dataset.step=step.dataset.stepSelect;
 else if(e.target.closest('.trace-next'))trace.dataset.step=(+trace.dataset.step+1)%5;
 else if(e.target.closest('.trace-prev'))trace.dataset.step=Math.max(0,+trace.dataset.step-1);
 else return;
 updateTrace(trace);
});
document.addEventListener('input',e=>{if(!e.target.matches('[data-register]'))return;const trace=e.target.closest('.trace');const value=Math.min(31,Math.max(0,Math.round(Number(e.target.value)||0)));trace.dataset[e.target.dataset.register]=value;trace.dataset.step=0;updateTrace(trace);});

const dialog=$('#case-study');let currentProject='r2d2';let returnFocus=null;
function openCase(id){
 const p=projects[id];if(!p)return;currentProject=id;returnFocus=document.activeElement;
 $('#case-body').innerHTML=`<p class="eyebrow">${p.category}</p><h2 id="case-title" class="case-title">${p.title}</h2><p class="case-lead">${p.lead}</p><div class="case-status"><span class="tiny-label">PROJECT STAGE</span><span>${p.status}</span></div><div class="case-tabs" role="tablist" aria-label="Case study sections">${['Overview','System map','Design notes'].map((s,i)=>`<button id="case-tab-${i}" role="tab" aria-selected="${i===0}" aria-controls="case-content" tabindex="${i===0?0:-1}" data-case-tab="${i}">${s}</button>`).join('')}</div><div id="case-content" role="tabpanel" aria-labelledby="case-tab-0"></div><div class="case-links">${p.links.map(([label,url])=>`<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join('')}</div>`;
 renderCaseSection(0);
 bindTabs($('.case-tabs'),tab=>{selectTab(tab);renderCaseSection(+tab.dataset.caseTab);});
 dialog.showModal();dialog.scrollTop=0;
}
function renderCaseSection(section){
 const p=projects[currentProject],content=$('#case-content');content.setAttribute('aria-labelledby',`case-tab-${section}`);
 if(section===0){
  content.innerHTML=`<div class="case-stats">${p.stats.map(([v,l])=>`<div><strong>${v}</strong><span>${l}</span></div>`).join('')}</div>${p.images.length?`<figure class="case-gallery"><img class="case-picture" src="assets/${p.images[0][0]}" alt="${p.images[0][1]}"><figcaption>${p.images[0][1]}</figcaption>${p.images.length>1?`<div class="gallery-controls" role="group" aria-label="Project images">${p.images.map((item,i)=>`<button data-gallery="${i}" aria-pressed="${i===0}">${i===0?'Droid photo':'Controller CAD'}</button>`).join('')}</div>`:''}</figure>`:traceMarkup(false)}${p.overview.map(([h,t])=>`<h3 class="case-section-title">${h}</h3><p class="case-paragraph">${t}</p>`).join('')}`;
  initTrace(content);
 }else if(section===1){
  content.innerHTML=`<p class="section-instruction">Select a subsystem to follow the design.</p><div class="system-map" role="group" aria-label="${p.title} subsystems">${p.nodes.map(([name],i)=>`<button data-node="${i}" aria-pressed="${i===0}"><span class="tiny-label">0${i+1}</span><strong>${name}</strong><span class="system-arrow" aria-hidden="true">${i===p.nodes.length-1?'↲':'→'}</span></button>`).join('')}</div><div class="system-detail" aria-live="polite"><h3>${p.nodes[0][0]}</h3><p>${p.nodes[0][1]}</p></div><p class="system-note">${p.architectureNote}</p>${currentProject==='riscv'?traceMarkup(false):''}`;initTrace(content);
 }else content.innerHTML=`<div class="notes-list">${p.notes.map(([h,t],i)=>`<section><span class="note-number">0${i+1}</span><div><h3>${h}</h3><p>${t}</p></div></section>`).join('')}</div>`;
}
dialog.addEventListener('click',e=>{
 if(e.target===dialog||e.target.closest('.close-button')){dialog.close();return;}
 const gallery=e.target.closest('[data-gallery]');if(gallery){const index=+gallery.dataset.gallery,item=projects[currentProject].images[index];$('.case-picture').src='assets/'+item[0];$('.case-picture').alt=item[1];$('.case-gallery figcaption').textContent=item[1];$$('[data-gallery]').forEach(b=>b.setAttribute('aria-pressed',b===gallery));}
 const node=e.target.closest('[data-node]');if(node){const [h,p]=projects[currentProject].nodes[+node.dataset.node];$('.system-detail').innerHTML=`<h3>${h}</h3><p>${p}</p>`;$$('[data-node]').forEach(b=>b.setAttribute('aria-pressed',b===node));}
});
dialog.addEventListener('close',()=>{returnFocus?.focus({preventScroll:true});});

$('#experience').innerHTML=`<div class="experience-title"><span class="eyebrow">WHERE I’VE BEEN BUILDING</span><span class="tiny-label">TEAMS & EXPERIENCE</span></div><div class="experience-grid"><article><span class="tiny-label">DIGITAL HARDWARE</span><h3>SiliconJackets</h3><p class="experience-role">Digital design member · Georgia Tech</p><p>Developing processor RTL and verification experience through the student chip-design team’s RISC-V onboarding.</p><button class="text-link" data-project="riscv">Explore the core →</button></article><article><span class="tiny-label">EMBEDDED ELECTRONICS</span><h3>Origami Robotics</h3><p class="experience-role">Electrical engineering intern</p><p>Designed ESP32-C3 control electronics with CAN, I²C expansion, USB-C, and regulated power for a modular hardware platform.</p></article><article><span class="tiny-label">SYSTEMS & LEADERSHIP</span><h3>Lambert Robotics</h3><p class="experience-role">Team captain & electrical lead · FRC 9477</p><p>Led engineering work across disciplines and integrated robot-wide electrical systems, sensors, power distribution, and motor controllers.</p></article></div>`;
const toolkits=[
 {name:'Digital design',intro:'From the instruction to the signal.',text:'I work with RTL, processor control, and simulation to understand how digital hardware implements an architecture.',tools:['SystemVerilog','RISC-V','RTL design','Digital logic','Cadence Xcelium','Testbenches'],project:'riscv'},
 {name:'Embedded & robotics',intro:'Software with a physical consequence.',text:'I connect microcontrollers, custom electronics, communication interfaces, and motors into complete systems.',tools:['ESP32','C++','KiCad','CAN / I²C / SPI','PWM & motor control','Wireless communication'],project:'r2d2'},
 {name:'Mechanical & fabrication',intro:'Make the design buildable.',text:'I use CAD, prototyping, and mechanical analysis to connect electronic requirements with parts that fit and move.',tools:['Onshape','Fusion 360','FEA','3D printing','Soldering','Circuit prototyping'],project:'motor'}
];
$('#toolkit').innerHTML=`<div class="toolkit-heading"><p class="eyebrow">TOOLS WITH A PURPOSE</p><h3>One project rarely fits one discipline.</h3></div><div class="toolkit-tabs" role="tablist" aria-label="Engineering toolkit">${toolkits.map((t,i)=>`<button role="tab" id="tool-tab-${i}" aria-controls="tool-panel" aria-selected="${i===0}" tabindex="${i===0?0:-1}" data-tool="${i}">${t.name}</button>`).join('')}</div><div id="tool-panel" role="tabpanel" aria-labelledby="tool-tab-0"></div>`;
function renderToolkit(i){const t=toolkits[i];$('#tool-panel').setAttribute('aria-labelledby',`tool-tab-${i}`);$('#tool-panel').innerHTML=`<div><h3>${t.intro}</h3><p>${t.text}</p><button class="text-link" data-project="${t.project}">See it in a project →</button></div><ul class="tool-chips">${t.tools.map(s=>`<li>${s}</li>`).join('')}</ul>`;}
renderToolkit(0);bindTabs($('.toolkit-tabs'),tab=>{selectTab(tab);renderToolkit(+tab.dataset.tool);});
$('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('jbiswas33@gatech.edu');$('#copy-status').textContent='Email address copied.';}catch{$('#copy-status').textContent='Copy unavailable here. Email me at jbiswas33@gatech.edu.';}});
