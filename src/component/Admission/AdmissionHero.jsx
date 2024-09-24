import React from 'react'

import admissionHero from "../../assets/admissionBg.jpg"
const AdmissionHero = () => {
  return (
    <div className='relative w-full h-[500px]'>
  <img src={admissionHero} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  {/* <div className='absolute inset-0 bg-black opacity-40'></div> */}
</div>
  )
}

export default AdmissionHero
