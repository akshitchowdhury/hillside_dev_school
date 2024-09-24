import React from 'react'
import CareerHero from './CareerHero'
import CareerText from './CareerText'
import CareerBody from './CareerBody'
import CareerForm from './CareerForm'
import CareerExp from './CareerExp'
import NavUni from '../Nav/NavUni'
import ECA from '../ExtraContent/ECA'

const Career = () => {
  return (
    <>
    <NavUni/>
    <div>
      <CareerHero/>
      <CareerText/>
      <CareerBody/>
      <CareerExp/>
      <CareerForm/>
      <ECA/>
    </div>
    </>
  )
}

export default Career
