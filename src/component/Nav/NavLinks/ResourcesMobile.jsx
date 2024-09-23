import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const ResourcesMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <li 
        className="relative group py-2 text-left z-50"  
        onClick={() => setIsOpen(true)} 
        // onMouseLeave={() => setIsOpen(false)}
      >
        <div
          className="block mb-2 after:content-[''] 
          after:absolute after:w-10 after:h-0.5 after:bg-amber-400 after:left-0 after:bottom-0 after:scale-x-0 
          group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
        >
         RESOURCES
        </div>
  
        {/* Dropdown Menu */}
        {isOpen && (
          
          <ul className="absolute left-32 mt-2 w-56
           bg-white shadow-lg  py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">  
            <li>
             <Link to="/faculty" className='block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200'>
                Faculty
             </Link>
            </li>
            <li>
             <Link to="/alumni" className='block px-4 py-2 text-gray-700 hover:bg-amber-400 hover:text-white transition-colors duration-200'>
                Alumni 
             </Link>
            </li>
            
           
          </ul>
        )}
      </li>
    );
}

export default ResourcesMobile