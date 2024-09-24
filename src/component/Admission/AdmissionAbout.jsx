import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpen';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons/faMobileAlt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AdmissionAbout = () => {
  return (
    <section className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-6/12 px-4">
            <div className="bg-gray-50">
              <div className="mb-3">
                <h2 className="text-4xl text-amber-500 font-bold my-2 text-left">
                  About
                </h2>
              </div>
              <p className="text-black text-justify">
                <span className='text-4xl text-amber-400 font-semibold'>Progressive Educational Trust (PET)</span> was established in 1996 with a vision to provide quality education across various disciplines. With a commitment to academic excellence, PET offers a diverse range of programs, from early childhood education to postgraduate courses, catering to the needs of students in and around Bangalore City. Our institutions prioritize innovative teaching methods and a holistic educational experience, equipping students with the skills necessary to thrive in their chosen fields. Through dedicated faculty and comprehensive curriculum, we strive to foster an environment that encourages personal and professional growth.
              </p>
            </div>
          </div>
          <div className="w-full md:w-5/12 px-4 mt-8 md:mt-0 md:ml-auto">
            <div className="bg-gray-800 p-6 rounded-none shadow-lg text-white">
              <ul className="space-y-4">
                <li className="text-3xl text-amber-500 font-semibold text-left">Contact Us</li>
                <li className='text-left'># 123, New Horizon Road, Gubbalala Cross, Kanakapura Main Road, Bangalore-560062, Karnataka, India.</li>
                <hr className="border-gray-700" />
                <li className="text-3xl text-amber-500 text-left font-semibold">Admission</li>
                <li className='text-left'><FontAwesomeIcon className='text-amber-500' icon={faMobileAlt}/>: 098 459 56633, 097 428 03553, 099 005 42900</li>
                <li className='text-left'><FontAwesomeIcon className='text-amber-500' icon={faEnvelopeOpen}/>: <a href="mailto:admissions@petacademy.in" className="text-blue-400 hover:underline">admissions@petacademy.in</a></li>
                <hr className="border-gray-700" />
                <li>
                  <a
                    href="assets-admission/brochure/PET-Brochure.pdf"
                    target="_blank"
                    className="inline-block bg-amber-500 hover:bg-green-600 h-10 text-white font-semibold py-2 px-4 rounded-md"
                  >
                    Download Brochure
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionAbout;
