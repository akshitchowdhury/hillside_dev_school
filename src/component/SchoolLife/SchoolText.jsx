import React from 'react';

const SchoolText = () => {
  return (
    <div className="absolute top-20 left-0 z-40 bg-white bg-opacity-70 p-8 max-w-[700px]  mt-20 md:mt-32 lg:mt-40 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">SCHOOL LIFE</h2>
      
      {/* Description */}
      <p className="text-amber-950 text-lg md:text-xl">
      A school’s excellence shines through its teachers, guiding students from their first steps in preschool to their transformative journey through.
      </p>
    </div>
  );
}

export default SchoolText;
