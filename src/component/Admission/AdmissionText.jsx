import React from 'react';
import Admission from './Admission';

const AdmissionText = () => {
  return (
    <div className="absolute top-20 left-0 z-40 bg-white bg-opacity-70 p-8 max-w-2xl  mt-20 md:mt-32 lg:mt-40 ">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-pink-950 mb-4">Admissions</h2>
      
      {/* Description */}
      <p className="text-amber-950 text-lg md:text-xl">
      We provide a supportive environment equipped with all the resources students need to thrive and succeed in their educational journey
      </p>
    </div>
  );
}

export default AdmissionText  ;
