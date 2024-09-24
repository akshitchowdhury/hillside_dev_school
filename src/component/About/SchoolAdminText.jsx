import React from 'react';
import SchoolAdmin from './SchoolAdmin';

const SchoolAdminText = () => {
  return (
    <div className="absolute top-20 left-0 z-40 bg-white bg-opacity-70 p-8 max-w-[500px]  mt-20 md:mt-32 lg:mt-40 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">Administration</h2>
      
      {/* Description */}
      <p className="text-amber-950 text-lg md:text-xl">
      The true teachers are those who help us think for ourselves.
      </p>
    </div>
  );
}

export default SchoolAdminText;
