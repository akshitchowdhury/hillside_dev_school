
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faScroll, faSchoolFlag } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons/faPlusCircle';

const cardVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { 
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
      delayChildren: 0.3
    }
  }
};

const NavHome = () => {
  return (
    <div className="container mx-2 md:mx-12 lg:mx-12 px-6 py-8 lg:absolute lg:bottom-[-340px]">
      <motion.div 
        className="hidden lg:flex flex-wrap -mx-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full sm:w-1/3 px-4 mb-8" variants={cardVariants}>
          <div className="bg-indigo-900 p-6 rounded-lg shadow-lg text-center h-[300px]">
            <span className="block mb-4">
              <FontAwesomeIcon icon={faBookOpen} className="text-5xl text-amber-400" />
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">VISION AND MISSION</h3>
            <p className="text-white text-sm mb-4 text-left h-20">
              The mission of Bethel English high School is to help see the students their career prospective and act to get their ultimate goal. Hillside Academy is one of its kind...
            </p>
            
            <a
  className="bg-amber-400 text-white text-2xl rounded-full 
             w-12 h-12 flex items-center justify-center mx-auto shadow 
             transform transition-transform duration-300 ease-in-out hover:scale-110"
  href="vision-and-mission.html"
>
              <FontAwesomeIcon icon={faPlusCircle}/>
            </a>
          </div>
        </motion.div>
        <motion.div className="w-full sm:w-1/3 px-4 mb-8" variants={cardVariants}>
          <div className="bg-indigo-900 p-6 rounded-lg shadow-lg h-[300px] text-center">
            <span className="block mb-4">
              <FontAwesomeIcon icon={faScroll} className="text-5xl text-amber-400" />
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">HISTORY</h3>
            <p className="text-white text-sm h-20 mb-4 text-justify">
              Bethel English high School started back in 1996 by Bheemachandra Education Trust. Hillside Group has various educational institutions ranging from Kindergarten...
            </p>
            
            <a
  className="bg-amber-400 text-white text-2xl rounded-full 
             w-12 h-12 flex items-center justify-center mx-auto shadow 
             transform transition-transform duration-300 ease-in-out hover:scale-110"
  href="vision-and-mission.html"
>
              <FontAwesomeIcon icon={faPlusCircle}/>
            </a>
          </div>
        </motion.div>
        <motion.div className="w-full sm:w-1/3 px-4 mb-8" variants={cardVariants}>
          <div className="bg-indigo-900 p-6 rounded-lg h-[300px] shadow-lg text-center">
            <span className="block mb-4">
              <FontAwesomeIcon icon={faSchoolFlag} className="text-5xl text-amber-400" />
            </span>
            <h3 className="text-xl text-white font-semibold mb-4">ADMINISTRATION</h3>
            <p className="text-white text-sm mb-4 text-justify h-20">
              The infrastructure and facilities of Bethel English high School consists of spread-out campus alongside various amenities in the form of library, computer center...
            </p>
            
             
            <a
  className="bg-amber-400 text-white text-2xl rounded-full 
             w-12 h-12 flex items-center justify-center mx-auto shadow 
             transform transition-transform duration-300 ease-in-out hover:scale-110"
  href="vision-and-mission.html"
>
              <FontAwesomeIcon icon={faPlusCircle}/>
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Mobile View */}
      {/* ... (keep the mobile view code as it is) ... */}
      <div className="flex flex-col lg:hidden px-4 space-y-8">
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg text-center">
          <span className="block mb-4">
            <FontAwesomeIcon icon={faBookOpen} className="text-5xl text-amber-400" />
          </span>
          <h3 className="text-xl text-white font-semibold mb-4">VISION AND MISSION</h3>
          <p className="text-white text-sm mb-4 text-left">
            The mission of Hillside Group of Institutions is to help see the students their career prospective and act to get their ultimate goal. Hillside Academy is one of its kind...
          </p>
          <a
            className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow"
            href="vision-and-mission.html"
          >
            +
          </a>
        </div>
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg text-center">
          <span className="block mb-4">
            <FontAwesomeIcon icon={faScroll} className="text-5xl text-amber-400" />
          </span>
          <h3 className="text-xl text-white font-semibold mb-4">HISTORY</h3>
          <p className="text-white text-sm mb-4 text-left">
            Hillside Academy started back in 1996 by Bheemachandra Education Trust. Hillside Group has various educational institutions ranging from Kindergarten...
          </p>
          <a
            className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow"
            href="aboutus.html#abthistory"
          >
            +
          </a>
        </div>
        <div className="bg-indigo-900 p-6 rounded-lg shadow-lg text-center">
          <span className="block mb-4">
            <FontAwesomeIcon icon={faSchoolFlag} className="text-5xl text-amber-400" />
          </span>
          <h3 className="text-xl text-white font-semibold mb-4">ADMINISTRATION</h3>
          <p className="text-white text-sm mb-4 text-left">
            The infrastructure and facilities of Hillside Academy consists of spread-out campus alongside various amenities in the form of library, computer center...
          </p>
          <a
            className="bg-amber-400 text-white text-2xl rounded-full w-12 h-12 flex items-center justify-center mx-auto shadow"
            href="administration.html"
          >
            +
          </a>
        </div>
      </div>
    </div>
    
  );
};

export default NavHome;
