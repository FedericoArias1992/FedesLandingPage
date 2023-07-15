import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const projects = [
    { name: 'Machine Learning - Projects', path: '/MachineLearningProjects' },
    { name: 'E-commerce Platform - Projects', path: '/' },
    { name: 'Optimization of Sales Commission Structure Proyects - Project', path: '/OptimizationSalesCommissionStructure' },
    { name: 'My Trips Blog - Project', path: '/' },
  ];

  return (
  <footer className="bg-gray-900 py-4">
    <div className="flex items-center justify-center">
      <a href="https://www.linkedin.com/in/federico-arias-su%C3%A1rez-544908117/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white text-3xl mx-2" />
      </a>
      <a href="https://api.whatsapp.com/send?phone=59162102600&text=Hi, i saw your landing page!/" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp className="text-white text-3xl mx-2" />
      </a>
    </div>
  </footer>
  );
};

export default Footer;
