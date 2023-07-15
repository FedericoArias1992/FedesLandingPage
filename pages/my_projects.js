import React from 'react';
import Header from '../src/app/Header';
import '../src/app/globals.css';
import Footer from '../src/app/Footer';
import Link from 'next/link';
import Image from 'next/image';

const my_projects = () => {
  return (
    <div className="bg-dark">
      <Header />
      <div className="flex flex-col items-center">
        <h1 className="text-2xl text-gray-100 font-bold mb-4">This is me!</h1>
        <Image
        src="/profile-picture.png"
        alt="Profile Picture"
        width={256}
        height={256}
        className="rounded-full"
      />
      </div>
      <div className="container mx-auto py-8 p-4">
        <h1 className="text-4xl text-center text-gray-200 font-bold mb-4">My Portafolio</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Proyecto 1 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Contenido del proyecto */}
            <h2 className="text-2xl text-left font-semibold mb-2">&#127992;Machine Learning Project&#127970;</h2>
            <h2 className="text-xl text-left font-semibold mb-2">Estimating House Prices&#127750;</h2>
            <p className="text-gray-600 mb-4">The project encompasses identifying the problem of estimating house prices in Santa Cruz de la Sierra, conducting an ETL process to extract and transform the data, loading it into a Python script for further analysis, and ultimately generating a machine learning model to provide accurate price estimates..</p>
            {/* Enlace al proyecto */}
            <Link href="/MachineLearningProjects">
              <span className="text-blue-500 hover:underline">Click to see the complete Project!</span>
            </Link>
          </div>
          {/* Proyecto 2 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Contenido del proyecto */}
            <h2 className="text-2xl font-semibold mb-2">Simulation Project 📈</h2>
            <h2 className="text-xl font-semibold mb-2">💰Optimization Sales Commission Structure💳</h2>
            <p className="text-gray-600 mb-4">The main objective was to find a commission structure that caters to the salesperson`s needs while maximizing motivation and performance. To achieve this, I employed a data-driven and simulation-based approach to understand the sales distribution and explore different scenarios.
            </p>
            {/* Enlace al proyecto */}
            <Link href="/OptimizationSalesCommissionStructure">
              <span className="text-blue-500 hover:underline">Click to see the complete Project!</span>
            </Link>  
          </div>

          {/* Proyecto 3 */}
          <div className="bg-white rounded-lg shadow-md p-4">
            {/* Contenido del proyecto */}
            <h2 className="text-2xl font-semibold mb-2">💳E-commerce Store🛒</h2>
            <p className="text-gray-600 mb-4">The Final project of the Next Online Course from Platzi! Check it out!.</p>
            {/* Enlace al proyecto */}
            <span href="https://laestrella.store/" className="text-blue-500 hover:underline">Click to see the complete Project!</span>
          </div>

          {/* Agregar más proyectos según sea necesario */}
        </div>
      </div>    
      <Footer />
    </div>
  );
};

export default my_projects;
