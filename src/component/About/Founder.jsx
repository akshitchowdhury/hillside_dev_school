import React from 'react';
import FounderHero from './FounderHero';
import FounderText from './FounderText';
import NavUni from '../Nav/NavUni';

const Founder = () => {
  return (
    <>
      <NavUni />
      <FounderHero />
      <FounderText />
      <div className="p-12">
        <div className="bg-white flex flex-col md:flex-row justify-evenly rounded-none overflow-hidden mx-auto md:max-w-6xl">
          {/* Image Section */}
          <img
            src="https://ihs.edu.in/wp-content/uploads/2023/06/vice-principal.jpg"
            alt="Mrs. Vidya Sriraman"
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />

          {/* Text Section */}
          <div className="flex flex-col justify-center p-6 md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Mrs. Vidya Sriraman, Dean
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mrs. Sheela Bolar is an educator whose career spans almost five decades. In 2001, she became India’s first recipient of the National Award for ICSE teachers awarded by His Excellency Dr. APJ Abdul Kalam.
              She began her teaching career in the U.K. in 1968, coaching students for entrance to the prestigious King Edwards Schools. Later moving to Bangalore, India, Mrs. Bolar headed a well-known local school for several years, going on to establish Progressive Educational Trust in 1985. She has authored textbooks and workbooks in English, Kannada, and Science for Classes 1 to 6.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Mrs. Bolar was a member of the Council for the Indian School Certificate Examinations (CISCE), New Delhi from 1993 to 2010. She founded the Association of Schools for the Indian School Certificate, Karnataka (ASISC-K) in 1999 and went on to serve as the Secretary-Treasurer of the All India Association of Heads of ISC Schools from 2000 to 2003. From 2005 to 2012, she was a Member of the Board of PG Studies in Education at the University of Mysore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
