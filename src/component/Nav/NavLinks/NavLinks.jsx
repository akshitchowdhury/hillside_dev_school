import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import ResearchDropDown from './ResearchDropDown';
import GroupOfinstitutions from './GroupOfinstitutions';
import GroupOfInstitutionMobile from './GroupOfInstitutionMobile';
import logo from '../../../assets/logo-removebg-preview.png';
import AboutDropDown from './AboutDropDown';
import Resources from './Resources';
import ResourcesMobile from './ResourcesMobile';
import '../Nav.css';
import NavText from './NavText/NavText';
import SchoolLifeDropdown from './SchoolLifeDropdown';

import SchoolLifeMobile from './SchoolLifeMobile'
const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

useEffect(() => {
  const handleScroll = () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <>
    <div className={`navBg ${scrolled ? 'bg-scrolled' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-7 h-[55px] md:h-[83px] text-white">
        <div className="text-xl">
          <img src={logo} className="h-[40px] w-[40px] md:h-[60px] md:w-[60px]" alt="Logo" />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>
        <div className={`hidden md:flex md:items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex text-sm flex-col md:flex-row md:space-x-8 h-auto items-center py-4 text-white">
            <li className="relative">
              <Link
                to="/"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                HOME
              </Link>
            </li>
            <AboutDropDown />
            {/* <GroupOfinstitutions /> */}
            <li className="relative">
              <Link
                to="/facility"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                FACILITES
              </Link>
            </li>
            {/* <Resources /> */}
            <li className="relative">
              <Link
                to="/career"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                CAREER
              </Link>
            </li>
            <SchoolLifeDropdown/>
            <li className="relative">
              <Link
                to="/admission"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                ADMISSION <span className="bg-amber-400 ring-white px-2 rounded-sm font-bold">2024-25</span>
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/faq"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                FAQ
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/contact"
                className="block mb-2 after:content-[''] after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800  h-[770px] z-50`}>
        <ul className="flex flex-col justify-around h-auto items-start px-6 py-0 text-white">
          <li className="py-2">
            <Link to="/" className="hover:text-gray-400">
              HOME
            </Link>
          </li>
          <li className="py-2">
            <Link to="/about" className="hover:text-gray-400">
              OUR FAMILY
            </Link>
          </li>
          
          <li className="py-2">
            <Link to="/facility" className="hover:text-gray-400">
              FACILITIES
            </Link>
          </li>
          <li className="py-2">
            <Link to="/career" className="hover:text-gray-400">
            CAREER
            </Link>
          </li>
          <li className="py-2">
            <Link to="/preschool" className="hover:text-gray-400">
            SCHOOL LIFE
            </Link>
          </li>
          
          <li className="py-2">
            <Link to="/admission" className="hover:text-gray-400">
              ADMISSION 2023-24
            </Link>
          </li>
          <li className="py-2">
            <Link to="/faq" className="hover:text-gray-400">
              FAQ
            </Link>
          </li>
          <li className="py-2">
            <Link to="/contact" className="hover:text-gray-400">
              CONTACT
            </Link>
          </li>
        </ul>
      </div> */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-gray-800 h-auto z-50`}>
  <ul className="flex flex-col justify-around items-start px-6 py-0 text-white">
    <li className="py-2">
      <Link to="/" className="hover:text-gray-400">
        HOME
      </Link>
    </li>
    <SchoolLifeMobile/>
    {/* <GroupOfInstitutionMobile /> */}
    <li className="py-2">
      <Link to="/facility" className="hover:text-gray-400">
        FACILITIES
      </Link>
    </li>
    <li className="py-2">
      <Link to="/career" className="hover:text-gray-400">
        CAREER
      </Link>
    </li>
    <li className="py-2">
      <Link to="/preschool" className="hover:text-gray-400">
        SCHOOL LIFE
      </Link>
    </li>
    <li className="py-2">
      <Link to="/admission" className="hover:text-gray-400">
        ADMISSION 2024-25
      </Link>
    </li>
    <li className="py-2">
      <Link to="/faq" className="hover:text-gray-400">
        FAQ
      </Link>
    </li>
    <li className="py-2">
      <Link to="/contact" className="hover:text-gray-400">
        CONTACT
      </Link>
    </li>
  </ul>
</div>

    
    </div>

    <NavText/>
    </>
  );
};

export default NavLinks;
