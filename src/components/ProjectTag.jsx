import React from 'react'

const ProjectTag = (props) => {
  return (
      <div className='flex items-center'>
        <h2 className='text-center text-[12px] pt-[2px]  bg-[var(--light)] leading-tight rounded-2xl px-2 py-[-4px] drop-shadow-custom'>{props.name}</h2>
      </div>
  )
}

export default ProjectTag