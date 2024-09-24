
import React from 'react';
import ContactBanner from './ContactBanner';
import ContactForm from './ContactForm';
import ContactHero from './ContactHero';
import ContactText from './ContactText';
import NavUni from '../Nav/NavUni';

const Contact = () => {
  return (
    <>
    <NavUni/>
    <ContactHero/>
    <ContactText/>
      <div className="flex flex-col md:flex-row items-center bg-white gap-8 p-6 md:p-8 justify-center ">
          {/* Contact Info */}
          <ContactBanner/>

          {/* Contact Form */}
          <ContactForm/>
        </div>
    </>
  );
};

export default Contact;
