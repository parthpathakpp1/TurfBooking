import React from 'react';
import { Leopard, Bandari, Kakamega, Nzoia, Sofapaka, Ulinzi } from '../../assets/images';
import './FeaturedPlayground.css'

const Partners = () => {
  return (
    <div className='' >
      <p className='mt-10 font-semibold text-xl text-center text-black tracking-widest'>TRUSTED PARTNERS</p>
      <div className='flex justify-center gap-20 md:gap-24 lg:gap-28 align-center p-10 flex-wrap w-full scale-75'>
        <div className='logo-container'>
          <img className='object-contain' src={Leopard} alt="Leopard Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain' src={Bandari} alt="Bandari Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain' src={Sofapaka} alt="Sofapaka Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain' src={Nzoia} alt="Nzoia Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain' src={Kakamega} alt="Kakamega Logo" />
        </div>
        <div className='logo-container'>
          <img className='object-contain' src={Ulinzi} alt="Ulinzi Logo" />
        </div>
      </div>
    </div>
  )
}

export default Partners;
