import React from 'react'
import Preschool from './PreSchool'
import SchoolHero from './SchoolHero'
import NavUni from '../Nav/NavUni'
import ClassOne from './ClassOne'
import ClassFive from './ClassFive'
import ClassEight from './ClassEight'

const SchoolLife = () => {
  return (
    <div>
    <NavUni/>
    <SchoolHero/>
      <Preschool/>
      <ClassOne/>
      <ClassFive/>
      <ClassEight/>
    </div>
  )
}

export default SchoolLife
