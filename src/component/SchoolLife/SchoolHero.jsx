import React from 'react'

import aboutBg from "../../assets/admissionBg.jpg"
const SchoolHero = () => {
  return (
    <div className='relative w-full h-[400px] md:h-[500px]' >
    
  <img src={aboutBg} className='object-cover w-full h-full mix-blend-multiply' alt="Background Image"/>
  
</div>
  )
}

export default SchoolHero
