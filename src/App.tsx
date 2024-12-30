import React from 'react';
import Navigation from './components/Navigation';
import JDMFact from './components/JDMFact';
import VideoHero from './components/VideoHero';
import CarListing from './components/CarListing';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <JDMFact />
      <VideoHero />
      <CarListing />
      <WhyChooseUs />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;