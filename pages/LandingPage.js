import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import '../src/app/globals.css';

export default function landingpage() {
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  return (
    <div>
        <main className="bg-dark flex flex-col items-center justify-between p-4">
            <div className="z-2 w-full items-center justify-between text-sm lg:flex mb-12">
              <div className="flex">
                <div class="w-2/3 pr-4 p-8">
                  <section>
                  <h1 className="text-l lg:text-2xl font-bold text-center text-color_rosado mt-2 mb-4">Section Heading 1!</h1>
                    <p className="text-s lg:text-l text-align-left tracking-tight leading-tight text-color_celeste dark:text-color_celeste mt:2 mb-8:">Welcome to the world of optimized workflows and digital transformations led by a passionate self-taught web 
                    developer and programmer. 
                    With a strong commitment to supporting small businesses, I bring expertise and creativity to help you thrive 
                    in the digital realm.</p>
                  </section>
                  <section>
                      <h2 className="text-l lg:text-2xl font-bold text-center text-color_rosado mt-4">Section Heading</h2>
                      <p className="text-xs lg:text-l text-justify tracking-tight leading-snug text-color_celeste dark:text-color_celeste mt:4 mb-8:">My portfolio showcases successful projects where I have seamlessly integrated technology to streamline operations and enhance your online presence. Drawing inspiration from my passion for sports, I bring discipline and responsibility to every project, ensuring exceptional results.</p>
                  </section>
                </div>
              <div className="w-1/3 lg:mt--20 lg:ml-4">
                <div className="flex flex-col ml--4 mt--20">
                  <Image src="/ImagenLandingPageGPT_I.png" alt="AI_generatedImage" className="w-full h-auto lg:w-auto lg:h-auto" />
                  <h1 className="text-xs lg:2xl text-center tracking-tighter text-color_blancoide italic p-2 mt-auto">This is an AI generated Image</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 grid text-center lg:mb-0 lg:grid-cols-3 gap-8 lg:text-left">
            <Link className="group transition-colors hover:border-color_celeste hover:bg-blue-100 group-hover:text-black rounded-lg border border-color_blancoide px-5 py-4" href="/aboutme" passHref>
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
          <Link className="group transition-colors hover:border-white-300 hover:bg-blue-100 hover:dark:border-red-700 hover:dark:bg-yellow-800/30 group-hover:text-black rounded-lg border border-white px-5 py-4" href="/project1" passHref>
            <div className="flex flex-col">
              <h2 className={`mb-3 text-2xl font-semibold text-white dark:text-gray-800 group-hover:text-black`}>
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
          </div>
        </main>
    </div>
  )
}
