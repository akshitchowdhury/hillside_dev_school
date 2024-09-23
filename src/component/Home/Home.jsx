import React from 'react'
import Home_one from './Home_one'
import HomeFacilities from './HomeFacilities'
import HomeCount from './HomeCount/HomeCount'
import HomeAbout from './HomeAbout'
import HomeWhyUs from './HomeWhyUs'
import HomeApply from './HomeApply'
import Nav from '../Nav/Nav'

const Home = () => {
  return (
    <div>
    <Nav/>
      <Home_one/>
      
      <HomeAbout/>
      <HomeCount/>

      <HomeFacilities/>
      <HomeApply/>
      
    </div>
  )
}

export default Home
