import React from 'react'
import AdmissionHero from './AdmissionHero'
import AdmissionText from './AdmissionText'
import AdmissionForm from './AdmissionForm'
import AdmissionAbout from './AdmissionAbout'
import NavUni from '../Nav/NavUni'

const Admission = () => {
  return (
    <div>
    <NavUni/>
      <AdmissionHero/>
      <AdmissionText/>
      <AdmissionForm/>
      <AdmissionAbout/>
    </div>
  )
}

export default Admission
