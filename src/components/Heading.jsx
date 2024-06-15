import React from 'react'

export const Heading = (props) => {
  const { header, text } = props;
  return (

    <div className="heading-section text-center">
      <h2 className='mb-3 text-5xl font-semibold'>{header}</h2>
      <p className="text-[#8E8E93] mb-6 text-sm">{text}</p>
    </div>

  )
}
