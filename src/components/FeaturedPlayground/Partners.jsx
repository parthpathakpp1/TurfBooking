import React from 'react';
import { Leopard, Bandari, Kakamega, Nzoia, Sofapaka, Ulinzi } from '../../assets/images';
import './FeaturedPlayground.css'

const Partners = () => {
  return (
    <div className='partners-container bg-gray-100 py-12'>
      <p className='text-3xl font-semibold text-center text-gray-800 mb-8 tracking-widest'>Our Trusted Partners</p>
      <div className='flex justify-center gap-8 md:gap-12 lg:gap-16 align-center flex-wrap w-full'>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Leopard} alt="Leopard Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Bandari} alt="Bandari Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Sofapaka} alt="Sofapaka Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Nzoia} alt="Nzoia Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Kakamega} alt="Kakamega Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain h-16 md:h-20 lg:h-24' src={Ulinzi} alt="Ulinzi Logo" />
        </div>
      </div>
    </div>
  );
}

export default Partners;
