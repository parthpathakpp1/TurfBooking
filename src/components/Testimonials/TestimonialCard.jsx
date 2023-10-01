import React from 'react';

const TestimonialCard = ({ name, quote, image }) => {
  return (
    <div className="bg-slate-200 shadow-md p-4 rounded-md">
      <div className='flex justify-between py-4 '>
        <div>
          <p>{quote}</p>
        </div>
      </div>
      <div className='flex gap-4 items-center'>
        <img src={image} alt="turf image" className="w-16 h-16 rounded-full" />
        <div>
          <p className='py-2 font-bold'>{name}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard;
