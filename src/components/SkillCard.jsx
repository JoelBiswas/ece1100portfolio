import React from 'react'

const SkillCard = (props) => {
  return (
    <div className='w-1/6 flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out'>
        <div className='h-[10px]'></div>
        <img src={props.image} alt={props.name} className='rounded-[4px] mb-1'/>
        <h2 className='text-[var(--dark)] text-center text-[16px]'>{props.name}</h2>
    </div>
  )
}

export default SkillCard