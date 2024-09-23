import React from 'react';
import { Facebook, Instagram, Twitter, MessageCircle, Mail, MapPin, Phone, FileText } from 'lucide-react';
import footerLogo from "../../assets/footerLogo.png";
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              Hillside Academy started back in 1996 by Bheemachandra Education Trust. Hillside Group has various
              educational institutions ranging from Kindergarten to PG courses in and around Bangalore City.
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
                admissions@hillsideacademy.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: 'Home', link: '/' },
                { label: 'About Us', link: '/about-us' },
                { label: 'Research', link: '/research' },
                { label: 'Group of Institutions', link: '/group-of-institutions' },
                { label: 'Alumni Association', link: '/alumni-association' },
                { label: 'Admission 2023-24', link: '/admission-2023-24' },
                { label: 'Contact', link: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.link} className="hover:text-amber-400 transition-colors">
                    {item.label}
                  </a>
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
                # 9, Raghuvanahalli, Gubbalala Cross, Kanakapura Main Road, Bangalore-560062, Karnataka, India.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Admission</h4>
              <div className="flex items-start space-x-2">
                <Phone className="text-amber-400 h-5 w-5 mt-1 flex-shrink-0" />
                <p className="text-sm">
                  080 655 87775, 080 655 87776, 098 459 56633, 097 428 03553, 099 005 42900
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="text-amber-400 h-5 w-5" />
              <a
                href="/brochure/Hillside-Academy-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-amber-400 transition-colors"
              >
                Download Brochure
              </a>
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
