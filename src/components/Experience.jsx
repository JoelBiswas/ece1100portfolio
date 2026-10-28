import React from 'react';

const roles = [
  {
    company: 'Georgia Tech SiliconJackets', role: 'Digital Design and Verification Member',
    dates: 'September 2026 – Present', location: 'Atlanta, GA',
    points: [
      'Member of Georgia Tech’s student ASIC design team, developing custom integrated circuits through RTL design, verification, and physical design.',
      'Completing a 32-bit RISC-V processor in SystemVerilog in preparation for contributing to the team’s annual chip.',
      'Developing a verification environment with constrained-random instruction generation, assertions, monitors, and architectural state checking to validate functionality and corner cases.'
    ]
  },
  {
    company: 'Origami Robotics LLC', role: 'Electrical Engineering Intern',
    dates: 'June 2025 – June 2026', location: 'Suwanee, GA',
    points: [
      'Designed a custom 4-layer ESP32-C3 PCB integrating CAN, dual I²C GPIO expanders, USB-C, onboard power regulation, and 30 GPIO channels.',
      'Programmed and tested embedded hardware interfaces, validating peripheral communication, power delivery, and controller functionality during system bring-up.',
      'Designed power, signal-integrity, and protection circuitry, including 3.3 V buck regulation, IC decoupling, USB-C TVS protection, and differential routing for USB and CAN.'
    ]
  },
  {
    company: 'Lambert Robotics FRC Team 9477', role: 'Team Captain & Electrical Lead',
    dates: 'May 2025 – May 2026', location: 'Suwanee, GA',
    points: [
      'Led an approximately 60-member engineering team across electrical, programming, CAD, manufacturing, and system integration to develop competition robots.',
      'Designed and debugged robot-wide electrical systems integrating CAN networks, sensors, motor controllers, power distribution, and embedded control hardware.'
    ]
  }
];

export default function Experience() {
  return <section id="experience" className="experience-section" aria-labelledby="experience-title">
    <h2 id="experience-title" className="text-center text-[var(--primary)] text-4xl tracking-[1px]">WORK EXPERIENCE</h2>
    <div className="experience-list">{roles.map(item => <article className="experience-role" key={item.company}>
      <div className="experience-heading">
        <p className="experience-dates">{item.dates}</p>
        <h3>{item.role}</h3>
        <p className="experience-company">{item.company}</p>
        <p>{item.location}</p>
      </div>
      <ul>{item.points.map(point => <li key={point}>{point}</li>)}</ul>
    </article>)}</div>
  </section>;
}
