import React from 'react'

import aboutBg from "../../assets/careerHero.jpeg"
const CareerHero = () => {
  return (
    <div className='relative w-full h-[400px] md:h-[500px]' >
    
  <img src={aboutBg} className='object-cover object-top w-full h-full mix-blend-multiply' alt="Background Image"/>
  
</div>
  )
}

export default CareerHero
