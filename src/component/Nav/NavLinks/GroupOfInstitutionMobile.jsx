import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const GroupOfInstitutionMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li 
        className="relative group text-left py-2 z-50"  
        onClick={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className="block mb-2 after:content-[''] 
          after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 
          group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
        >
          GROUP OF INSTITUITONS
        </div>
  
        {/* Dropdown Menu */}
        {isOpen && (
          <ul className="absolute left-32 mt-2 w-56
           bg-white shadow-lg  py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <li>
              <a href="https://www.hillsideayurveda.com/" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Ayurveda Medical College and Hospital
              </a>
            </li>
            <li>
              <a href="https://hillsidepharmacycollege.edu.in/" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Pharmacy College
              </a>
            </li>
            <li>
              <a href="https://www.hillsidenursingcollege.edu.in/" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Nursing College
              </a>
            </li>
            <li>
              <a href="https://hillsidebusinessschool.edu.in/" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Business School
              </a>
            </li>
            <li>
              <a href="https://www.hillsideacademy.in/Bheemchandra-Paramedical-Institute.html" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Bheemachandra Paramedical Institute
              </a>
            </li>
            <li>
              <a href="https://hillsidecollegeofphysiotherapy.edu.in/" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                College of Physiotherapy
              </a>
            </li>
            <li>
              <a href="" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
                Pre-University Colleges (PUC)
              </a>
            </li>
            <li>
              <a href="" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
               Vocational Diploma Courses
              </a>
            </li>
            <li>
              <a href="" target='_blank' className="block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200">
               Hillside Public School
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

export default GroupOfInstitutionMobile