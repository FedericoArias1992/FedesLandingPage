import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const projects = [
    { name: 'Machine Learning - Projects', path: '/MachineLearningProjects' },
    { name: 'E-commerce Platform - Projects', path: "https://laestrella.store/" },
    { name: 'Optimization of Sales Commission Structure', path: '/OptimizationSalesCommissionStructure' },
    { name: 'My Trips Blog - Project', path: '/' },
  ];

  return (
    <header className="flex items-center justify-between bg-gray-900 px-8 py-4 z-10">
      <div>
        <Link href="/" passHref>
        <span className="text-center lg:flex lg:flex-col lg:items-center text-xs lg:text-xl md:text-xs sm:text-xs font-bold text-gray-200 cursor-pointer">
          <span className="block">My</span>
          <span className="block">Portfolio</span>
        </span>
        </Link>
      </div>
      <div className="flex items-center relative">
        <button
          onClick={toggleExpand}
          className="text-xs lg:text-2xl ms:text-xl text-gray-200 hover:text-color_purpura_2 px-4 focus:outline-none cursor-pointer">
          Projects
        </button>
        {isExpanded && (
          <ul className=" text-m lg:2xl absolute top-full left-0 bg-gray-900 text-gray-200 hover:text-color_purpura_2 py-2 px-4 mt-2 rounded-md">
            {projects.map((project, index) => (
              <li key={index} className="py-1">
                <Link href={project.path} passHref>
                  <span className="hover:text-gray-300 cursor-pointer">{project.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link href="/" passHref>
          <span className="text-xs lg:text-2xl ms:text-xl text-gray-200 hover:text-color_purpura_2 px-4 cursor-pointer">Home</span>
        </Link>
        <Link href="/" passHref>
          <span className="text-xs lg:text-2xl ms:text-xl text-gray-200 hover:text-color_purpura_2 px-4 cursor-pointer">Contact</span>
        </Link>
      </div>
      <div>
        <Image
          src="/profile-picture.png" // Replace with the path to your profile picture
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
