import React from 'react'

const ProjectTechnology = (props) => {
  return (
    <div className='flex items-center gap-2 pl-1 pr-2 py-[3px] bg-[var(--light)] rounded-[2px] drop-shadow-custom'>
      <img alt="" src={props.image} className='w-[var(--project-skill-size)] h-[var(--project-skill-size)] object-cover'/>
      <p className='text-[13px] text-[var(--dark)]'>{props.name}</p>
    </div>
  )
}

export default ProjectTechnology