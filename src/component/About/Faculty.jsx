import React from 'react'
import FacultySection from './FacultySection'
import FacultyHero from './FacultyHero'
import FacultyText from './FacultyText'
import NavUni from '../Nav/NavUni'
import FacultyBody from './FacultyBody'

const Faculty = () => {
  return (
    <div>
    <NavUni/>
    <FacultyHero/>
    <FacultyText/>
    <FacultyBody/>
      <FacultySection/>
    </div>
  )
}

export default Faculty
