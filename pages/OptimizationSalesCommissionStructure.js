import React from 'react';
import '../src/app/globals.css';
import Footer from '../src/app/Footer';
import Header from '../src/app/Header';
import Image from 'next/image';
import { FaCoins, FaChartLine, FaChartBar } from 'react-icons/fa';


const MachineLearningProjects = () => {
  return (
    <div className="w-full">
      <Header />
      <main className="bg-dark">
        <div className="text-center">
          <h1 className="text-color_rosado font-bold italic tracking-tighter text-sm lg:text-2xl">
            Optimization of Sales Commission Structure through Sales Analysis and Simulation
          </h1>
          <div className="flex justify-center space-x-4 mt-2">
            <FaCoins className="text-white text-2xl" />
            <FaChartLine className="text-white text-2xl" />
            <FaChartBar className="text-white text-2xl" />
          </div>
        </div>
        <div className="flex flex-wrap items-center">
            <div className="w-full md:w-1/2 p-8">
                <h1 className="text-teal_medio italic text-xl ml-8 mb--8">
                    1) Problem Statement:
                </h1>
                <p className="text-terciario text-l ml-8 mb-4">
                The main objective was to find a commission structure that caters to the salesperson`s needs while maximizing motivation and performance. To achieve this, I employed a data-driven and simulation-based approach to understand the sales distribution and explore different scenarios.
                </p>
            </div>            
        </div>
            <div className="flex flex-wrap items-center">
                <div className="w-full md:w-auto p-8">
                    <h1 className="text-teal_medio italic text-xl ml-8 mt-8">
                        2) Input Data:
                    </h1>
                    <p className="text-terciario text-l ml-8 mb-4">
                        A friend handed me a confidential dataset of his company, covering the last 54 months of sales.
                    </p>
                    <h1 className="text-teal_medio italic text-xl ml-8 mb-4 mt-4">
                        3) Project Approach:
                    </h1>
                    <p className="text-terciario text-l ml-8 mb-4 mt-4">
                        Using this data, with the help of Python`s libraries (numpy, matplotlib, scipy.stat & seaborn), I proceeded to see the histogram of sales and realized that the shape of it was of a left-hand-side asymmetrical distribution. I tried to see if the lognormal distribution fit the data, but didn`t get good results. After trying with other distributions, I found that the Gamma distribution with a logarithmic transformation fit the data very well. Here`s a comparison of density distributions:
                    </p>
                    <Image src="/plots/ComparacionDensidades_DistribucionVA.png" alt="Density Distribution Comparison" className="w-1/2 h-auto mx-auto block" width={1080} height={1080}/>
                    <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">Density Distribution Comparison</h1>
                    <p className="text-terciario text-l ml-8 md:ml-24 mb-4 mt-4">
                        To test this distribution, we subjected it to the following tests:
                    </p>
                    <ol className="text-terciario list-decimal ml-8 md:ml-24 mb-4 mt-4">
                        <li>
                            Kolmogorov-Smirnov Test: The p-value was 0.8448, which indicates that there is no strong evidence to reject the null hypothesis. In the context of the KS test, this suggests that the data is reasonably consistent with the assumed distribution.
                        </li>
                        <li>
                            Q-Q Plot: It compares the quantiles of the observed data against the quantiles of the expected theoretical distribution. The plot indicates a reasonable straight line, suggesting that the observed data follows the expected distribution.
                        </li>
                    </ol>
                    <Image src="/plots/Q-QPlot.png" alt="Q-Q Plot" className="w-3/4 h-auto mx-auto block" width={1080} height={1080}/>
                    <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">Q-Q Plot</h1>
                    <h1 className="text-teal_medio italic text-xl ml-8 md:ml-20 mb-4 mt-4">4) Simulation and Analysis:</h1>
                    <p className="text-terciario text-l ml-8 md:ml-24 mb-4 mt-4">I performed 500 simulations using the fitted Gamma random variable. These simulations allowed me to generate different scenarios and gain a better understanding of the sales distribution. 
                        You can check the barplots for the observed data versus the simulated data, each color represents one simulation, we ran out of colors thus we ran 500 simulis.
                    </p>
                    <Image src="/plots/Comparacion de Densidad de Probabilidad - Valores Simulados.png" alt="Image" className="w-3/4 h-auto mx-auto block" width={1080} height={1080}/>
                    <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">Simulated Density Distribution Comparison</h1>
                </div>
                <div className="w-full md:w-auto p-8">
                    <h1 className="text-teal_medio italic text-xl ml-8">5) Sales Results:</h1>
                    <p className="text-terciario text-l ml-8 md:ml-16 mb-8">Based on the simulations, I generated three key scenarios: optimistic, realistic, and pessimistic. 
                        These scenarios were defined using percentiles from the distribution obtained from the 500 simulations. 
                        Specifically, the optimistic scenario was based on the 75th percentile, the realistic scenario on the 50th percentile, and the pessimistic scenario on the 25th percentile.
                    </p>
                    <h1 className="text-teal_medio italic text-xl ml-8">6) Optimizing the Commission Structure:</h1>
                    <p className="text-terciario text-l ml-8 md:ml-16 mb-8">
                        To determine the optimal commission structure, I used the scenario manager tool in Excel. This tool allowed me to vary prices and commission percentages estimated for each case: optimistic, realistic, and pessimistic. Through this variation, I could evaluate the impact of different combinations of fixed and variable amounts in the offer to the salesperson. You can check the table below for results:
                    </p>
                    <Image src="/TablaEscenarios.png" alt="Scenario-Table" className="w-1/2 h-auto mx-auto block" width={1080} height={1080}/>
                    <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mb-8 mt-auto">The objective was that the salesman earns a minimum of 5000 Pesos</h1>
                    <Image src="/TablaPropuesta.png" alt="Table" className="w-1/2 h-auto mx-auto block" width={1080} height={1080}/>
                    <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">Table that shows the best options for every Scenario</h1>              
                </div>
            </div>
      </main>
      <Footer />
    </div>
  );
};

export default MachineLearningProjects;
