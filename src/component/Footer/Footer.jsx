import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, Mail, MapPin, Phone, FileText } from 'lucide-react';
import footerLogo from "../../assets/footerLogo.png";
import { Link } from 'react-router-dom';
export default function Footer() {
  const handleClick = () => {
    window.scrollTo({ behavior: 'smooth', top: "0" });
  };
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <img
              src={footerLogo}
              alt="Hillside Academy Logo"
              width={200}
              height={70}
              className="h-[70px] w-auto"
            />
            <p className="text-sm">
            Progressive Eduation Society is an institution that is dedicated to promoting, managing, and overseeing educational initiatives, schools and programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-amber-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" aria-label="WhatsApp" className="text-gray-400 hover:text-amber-400 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-amber-400 h-5 w-5" />
              <a
                href="mailto:admissions@hillsideacademy.in"
                className="text-sm hover:text-amber-400 transition-colors"
              >
                admissions@progressiveeducationaltrust.in
              </a>
            </div>
          </div>

         {/* OUR FAMILY */}
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Family</h3>
            <ul className="space-y-2">
              {[
                { label: 'Our Founder', link: '/founder' },
                { label: 'School Administration', link: '/admin' },
                { label: 'Faculty', link: '/faculty' },,
              ].map((item) => (
                <li key={item.label}>
                  <Link  to={item.link} onClick={handleClick} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


                          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', link: '/' },
                { label: 'Facilities', link: '/facility' },
                { label: 'Career', link: '/career' },
                { label: 'School Life', link: '/preschool' },
                { label: 'Admission 2024-25', link: '/admission' },
                { label: 'FAQ', link: '/faq' },
                { label: 'Contact', link: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.link} onClick={handleClick} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>


          {/* Contact Us */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="text-amber-400 h-5 w-5 mt-1 flex-shrink-0" />
              <p className="text-sm">
              Athibele Checkpost, Athibele, BENGALURU - 562102 Karnataka, India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Admission</h4>
              <div className="flex items-start space-x-2">
                <Phone className="text-amber-400 h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                +91-9743788868 / +91-9731044016
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {/* <FileText className="text-amber-400 h-5 w-5" /> */}
              {/* <a
                href="/brochure/Hillside-Academy-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-amber-400 transition-colors"
              >
                Download Brochure
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-4">
        <p className="text-center text-sm">© Copyright 2023. All rights reserved.</p>
      </div>
    </footer>
  );
}
