import React from 'react';
// Assuming you have react-icons/fi installed (npm install react-icons)
import { FiTwitter, FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const footerLinks = [
  {
    title: "Community",
    links: ["About GDG", "Team", "Code of Conduct", "Volunteers"]
  },
  {
    title: "Resources",
    links: ["Events Calendar", "Blog", "Tech Articles", "Mentorship"]
  },
  {
    title: "Contact",
    links: ["Join Discord", "Email Us", "Support"]
  }
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-5">
        
        {/* Top Section: Logo, Links, and Social */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-8 border-b border-gray-700">
          
          {/* Logo/Branding */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-3xl font-bold text-blue-500 mb-3">GDG Hub</h3>
            <p className="text-gray-400">Building a stronger developer community, together.</p>
          </div>
          
          {/* Navigation Columns */}
          {footerLinks.map((col, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-200 text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom Section: Copyright and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8">
          
          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GDG Hub. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-5 text-gray-400">
            <a href="#" className="hover:text-blue-500 transition duration-200"><FiTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition duration-200"><FiLinkedin size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition duration-200"><FiGithub size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition duration-200"><FiMail size={20} /></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;