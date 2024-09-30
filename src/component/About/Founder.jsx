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
            src="https://hosabelaku.org/wp-content/uploads/2024/08/Dr.-S.-B.-Umesh-Babu-258x300.webp"
            alt="Mrs. Vidya Sriraman"
            className="w-full md:w-1/2 h-64 md:h-[300px] object-contain"
          />

          {/* Text Section */}
          <div className="flex flex-col justify-center p-6 md:w-1/2 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
            Dr. S. B. Umesh Babu – President
            </h2>
            <p className="text-gray-700 leading-relaxed">
            Dr. S.B. Umesh Babu, MDS, has an extensive academic and professional background, having served as both a Professor and Principal at a leading Dental College. His contributions to the field of health sciences extend to his role as a Senate Member at Rajiv Gandhi University of Health Sciences, where he played an integral part in shaping the academic framework.  
            </p>
            <p className="text-gray-700 leading-relaxed">
            Additionally, Dr. Umesh Babu has held the prestigious position of Syndicate Member at Rajiv Gandhi University of Health Sciences, Karnataka, for two consecutive terms, further demonstrating his commitment to advancing healthcare education. His involvement as a Board of Visitors Member for BBMP Hospitals, South Zone, highlights his dedication to improving public health services in the region.  
            </p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
