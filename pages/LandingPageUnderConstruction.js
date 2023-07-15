import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/globals.css';
import { FaTools, FaHardHat, FaExclamationTriangle } from 'react-icons/fa';

export default function LandingPageUnderConstruction() {
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  return (
    <div>
        <main className="bg-dark flex flex-col items-center justify-between p-4 font-Poppins">
            <div className="z-2 w-full items-center justify-between text-sm lg:flex mb-12">
              <div className="flex">
                <div className="w-1/3 pr-4 p-8">
                  <section>
                  <h1 className="text-l lg:text-2xl font-bold text-center text-color_rosado mt-2 mb-4">Hi there!</h1>
                    <p className="text-l lg:text-2xl  m:text-2xl text-align-left tracking-tight leading-tight text-color_celeste dark:text-color_celeste mt:2 mb-8:">This is Federico`s Landing Page, and it is under construction!</p>
                  </section>
                </div>
                <div className="w-1/3 flex justify-center items-center space-x-4 mt-2">
                  <FaTools className="text-white text-2xl"/>
                  <FaHardHat className="text-white text-2xl"/>
                  <FaExclamationTriangle className="text-white text-2xl"/>
                </div>  
              <div className="w-1/3  flex flex-col justify-center items-center lg:ml-4">
                <div className="flex flex-col justify-center items-center ml--4">
                  <Image src="/ImagenLandingPageGPT_I.png" width={1200} height={800} alt="AI_generatedImage" className="w-full h-auto lg:w-auto lg:h-auto"/>
                  <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">This is an AI generated Image</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 grid text-center lg:mb-0 lg:grid-cols-3 gap-8 lg:text-left">
            <Link className="group transition-colors hover:border-color_celeste hover:bg-blue-100 group-hover:text-black rounded-lg border border-color_blancoide px-5 py-4" href="/" passHref>
            <div className="flex flex-col">
              <h2 className={`mb-3 text-2xl font-semibold text-color_blancoide group-hover:text-color_rosado`}>
                About Me{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm text-oscuro`}>
                Get to know me a little deeper!
              </p>
            </div>  
          </Link>
          <Link className="group transition-colors hover:border-white-300 hover:bg-blue-100 group-hover:text-black rounded-lg border border-color_blancoide px-5 py-4" href="/my_projects" passHref>
            <div className="flex flex-col">
              <h2 className={`mb-3 text-2xl font-semibold text-color_blancoide group-hover:text-color_rosado`}>
                Projects{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-sm text-oscuro`}>
                Take the tour to see my latest projects!
              </p>
            </div>  
          </Link>
          <Link className="group transition-colors hover:border-white-300 hover:bg-blue-100 hover:dark:border-red-700 hover:dark:bg-yellow-800/30 group-hover:text-black rounded-lg border border-white px-5 py-4" href="/" passHref>
            <div className="flex flex-col">
              <h2 className={`mb-3 text-2xl font-semibold text-color_blancoide dark:text-gray-800 group-hover:text-black`}>
                Let`s keep in touch!{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
              <p className={`m-0 max-w-[30ch] text-xs text-oscuro`}>
                Head to the bottom of the page to contact me through LinkedIn or Whatsapp!
              </p>
            </div>  
          </Link>
          </div>
        </main>
    </div>
  )
}
