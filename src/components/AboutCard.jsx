import React from 'react'

const AboutCard = (props) => {
  return (
    <div className='bg-[var(--primary)] rounded-[4px] px-2 sm:px-4 py-4 drop-shadow-custom hover:scale-105 transition-transform duration-300 ease-in-out h-full'>
        <h2 className='text-[var(--light)] text-2xl'>{props.name}</h2>
        <div className='bg-[var(--light)] h-[1px] mb-3'/>
          <p className='text-[var(--light)] text-[12px]'>{props.description}</p>
    </div>
  )
}

export default AboutCard