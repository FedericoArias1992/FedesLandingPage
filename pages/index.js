import React from 'react';
import Header from '../src/app/Header';
import '../src/app/globals.css';
import LandingPageUnderConstruction  from './LandingPageUnderConstruction';
import Footer from '../src/app/Footer';

export default function Home() {
  const projects = ['Project 1', 'Project 2', 'Project 3'];

  return (
    <div>
      <Header />    
      <LandingPageUnderConstruction />
      <Footer />
    </div>
  )
}
