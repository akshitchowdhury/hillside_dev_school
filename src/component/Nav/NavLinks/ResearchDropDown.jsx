import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResearchDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li 
      className="relative group z-50"  
      onMouseEnter={() => setIsOpen(true)} 
    //   onMouseLeave={() => setIsOpen(false)}
    >
      <Link 
        to="/research" 
        className="block mb-2 after:content-[''] 
        after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 
        group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
      >
        RESEARCH
      </Link>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-60 bg-white shadow-lg  py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <li>
            <a href="https://hillsidepharmacycollege.edu.in/research-activities.html" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              Hillside Pharmacy College and Research Centre 
            </a>
          </li>
          {/* <li>
            <a href="/research/topic2" className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              Research Topic 2
            </a>
          </li>
          <li>
            <a href="/research/topic3" className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
              Research Topic 3
            </a>
          </li> */}
        </ul>
      )}
    </li>
  );
}

export default ResearchDropDown;
