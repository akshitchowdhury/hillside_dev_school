import React from 'react'
import HomeFacilities from '../Home/HomeFacilities'
import NavUni from '../Nav/NavUni'
import FacilityHero from './FacilityHero'
import FacilityText from './FacilityText'
import FacilityBody from './FacilityBody'

const Facility = () => {
  return (
    <div>
        <NavUni/>
        <FacilityHero/>
        <FacilityText/>
        <FacilityBody/>
      <HomeFacilities/>
    </div>
  )
}

export default Facility
