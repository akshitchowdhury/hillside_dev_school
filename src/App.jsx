import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav/Nav'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from './component/Home/Home'
import './App.css'
import Footer from './component/Footer/Footer'
import PreSchool from './component/SchoolLife/PreSchool'
import SchoolLife from './component/SchoolLife/SchoolLife'
import FAQ from './component/FAQ/FAQ'
import Career from './component/Career/Career'
import SchoolAdmin from './component/About/SchoolAdmin'
import Faculty from './component/About/Faculty'
import Founder from './component/About/Founder'
import Facility from './component/Facilities/Facility'
import Admission from './component/Admission/Admission'
import Contact from './component/Contact/Contact'

function App() {
  

  return (
    <>
    <div className='app overflow-clip'>
<Router>
    
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/admin" element={<SchoolAdmin/>} />
  {/* <Route path="/faculty" element={<Faculty />} />
  <Route path="/admission" element={<Admission/>} /> */}
  {/* <Route path="/facility" element={<Facility />} /> */}
  <Route path="/founder" element={<Founder />} />
  <Route path="/preschool" element={<SchoolLife/>} />
  <Route path="/career" element={<Career/>} />
  <Route path="/faq" element={<FAQ/>} />
  <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
    
    </>
  )
}

export default App
