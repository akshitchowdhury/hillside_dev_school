import React from 'react';
import Admission from './Admission';

const AdmissionText = () => {
  return (
    <div className="md:absolute md:top-20 md:left-0 md:z-40 bg-white bg-opacity-70 p-8 max-w-[500px]  mt-4 md:mt-32 lg:mt-40 ">
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
