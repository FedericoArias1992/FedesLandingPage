import React from 'react';
import '../src/app/globals.css';
import Header from '../src/app/Header';
import Image from 'next/image';
import Footer from '../src/app/Footer';

const MachineLearningProjects = () => {
  return (
    <div>
      <Header />
      <main className="bg-dark">
        <div className="flex flex-col items-center">
          <h1 className="text-color_rosado font-bold italic tracking-tighter text-justify text-3xl mt-4 ml-4 mr-4">
            Estimating House Prices in my Hometown
            <span role="img" aria-label="Magnifying Glass"> 🔍</span>
            <span role="img" aria-label="Spider Web"> 🕸️</span>
            <span role="img" aria-label="Bar Chart"> 📊</span>
          </h1>
          <h2 className="text-left text-secondary tracking-tighter text-2xl mt-4">Project Summary:</h2>
          <p className="text-terciario italic leading-snug text-xl mb-8 mt-2 mx-4 md:mx-64">The project encompasses identifying the problem of estimating house prices in Santa Cruz de la Sierra, conducting an ETL process to extract and transform the data, loading it into a Python script for further analysis, and ultimately generating a machine learning model to provide accurate price estimates.</p>
        </div>
        <div className="flex flex-wrap items-center">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-secondary italic text-xl ml-8">1) Identifying the Problem:</h1>
          <p className="text-terciario text-l ml-8 md:ml-16">The project aims to address the lack of a popular way to estimate house prices in Santa Cruz de la Sierra, Bolivia. Recognizing this opportunity, the goal is to develop a solution that can provide accurate estimates for potential homebuyers and sellers.</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-8">
              <h1 className="text-secondary italic text-xl ml-8 mt-8">2)ETL Processes:</h1>
              <h1 className="text-teal_medio text-xl ml-8 md:ml-20 mt-4">2.1) Extract:</h1>
              <p className="text-terciario text-l ml-8 md:ml-24 mb-4">To gather the necessary data, web scraping techniques are employed to extract information from the website ultracasas.com. This website contains a comprehensive listing of houses available in the city.</p>
              <h1 className="text-teal_medio italic text-xl ml-8 md:ml-20 mb-4 mt-4">2.2) Transform:</h1>
              <p className="text-terciario text-l ml-8 md:ml-24 mb-4 mt-4">The extracted data is then transformed into a useful format using the pandas library in Python. Data cleaning and preprocessing techniques are applied to ensure the data is accurate and consistent. The transformed data is saved as a pickle file, which can be easily accessed and processed.</p>
              <h1 className="text-teal_medio italic text-xl ml-8 md:ml-20 mb-4 mt-4">2.3) Load:</h1>
              <p className="text-terciario text-l ml-8 md:ml-24 mb-4 mt-4">The transformed data is loaded into a Python script that performs further analysis and generates visualizations and clusters. This step involves utilizing various libraries and algorithms to gain insights from the data.</p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <Image src="/UltraCasasScreenshot.png" alt="Image" width={1080} height={1080} className="w-full" />
          </div>
          {/*<Image src="/UltraCasasScreenshot.png" alt="Image" className="w-1/2 md:w-1/2 p-8"/>*/}
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-secondary italic text-xl ml-8">3)Exploratory analysis:</h1>
            <p className="text-terciario text-l ml-8 md:ml-16 mb-8">We proceed to make a plot of the different generated clusters</p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <p className="text-left font-bold text-2xl text-primary mb--8">Press here to see the interactive map:</p>
          <div className="relative items-center">
            <Image src="/ImagenMuestraClusters.png" alt="Original Image" className="w-full" width={1080} height={1080}/>
            <div className="w-full p-8 absolute top-0 left-0 opacity-0 transition-opacity duration-300">
              <Image src="/ImagenMuestraClusters.png" alt="Hover Image" className="w-full" width={1080} height={1080} />
            </div>
            <a href="/plots/mapa_cluster_precio_m2.html" className="absolute top-0 left-0 w-full h-full">
              <span className="sr-only">Link Text</span>
            </a>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 p-8">
              <h1 className="text-secondary italic text-xl ml-8">4) Generating the Model with Machine Learning:</h1>
              <p className="text-terciario text-l ml-8 md:ml-16 mb-8">Using the transformed and processed data, a machine learning model is developed to estimate house prices. This involves training the model on historical data, identifying relevant features, and selecting an appropriate algorithm. The model is then evaluated and fine-tuned to ensure optimal performance.</p>
          </div>
          <div className="w-full md:w-1/2 p-8">
            <h1 className="text-secondary italic text-xl ml-8">5) I am so sorry if you reached this far, this project is not finished, but i promise it will be available any time soon!</h1>
          </div>
        {/*<Image src="/UltraCasasScreenshot.png" alt="Image" className="w-1/2 md:w-1/2 p-8"/>*/}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MachineLearningProjects;
