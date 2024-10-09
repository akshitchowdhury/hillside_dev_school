import { faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faEnvelopeOpen, faMobile, faMobileAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const ContactBanner = () => {
  return (
    <div className="contact-info bg-blue-950 h-[460px]  text-gray-50 p-4 ">
            <h3 className="text-2xl text-left font-semibold mb-2 my-4 ">CONTACT INFO</h3>
            <h5 className="text-base text-amber-500 font-medium ">PET CAMPUS & ADMISSION</h5>
            <p className="text-sm  mb-4 text-left py-6">
            Athibele Checkpost, Athibele,
            <br/> BENGALURU - 562102
            </p>
            <ul className="address-list text-sm text-left space-y-3">
              <li>
                <FontAwesomeIcon className='text-amber-500' icon={faPhoneAlt}/> <i className="fa fa-phone "></i>+91-9743788868 / +91-9731044016
              </li>
              <li>
                <hr />
                <h5 className="text-base text-amber-500 font-medium">ADMISSION</h5>
              </li>
              <li>
              <FontAwesomeIcon className='text-amber-500' icon={faMobileAlt}/> (+91) 9743788868
              </li>
              <li>
              <FontAwesomeIcon className='text-amber-500' icon={faEnvelopeOpen}/> admissions@progressiveeducationaltrust.in
              </li>
              <li>
                <hr />
              </li>
            </ul>
            <ul className="social-icon-2 flex space-x-4 mt-4 mx-20">
              <li>
                <FontAwesomeIcon icon={faInstagram} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faFacebook} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faLinkedinIn} className='text-white'/>
              </li>
              <li>
              <FontAwesomeIcon icon={faGoogle} className='text-white'/>
              </li>
            </ul>
          </div>
  )
}

export default ContactBanner
