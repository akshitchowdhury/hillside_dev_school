import React from 'react'
import CareerHero from './CareerHero'
import NavUniLinks from '../Nav/NavLinks/NavUniLinks'
import CareerText from './CareerText'
import CareerBody from './CareerBody'
import CareerForm from './CareerForm'

const Career = () => {
  return (
    <>
    <NavUniLinks/>
    <div>
      <CareerHero/>
      <CareerText/>
      <CareerBody/>
      <CareerForm/>
    </div>
    </>
  )
}

export default Career
