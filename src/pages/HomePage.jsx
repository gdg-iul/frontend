import React from 'react';
// Using uppercase 'C' for Components folder as per your local file structure
import Navbar from '../Components/Navbar/Navbar.jsx'; 
import MainBanner from '../features/landing/MainBanner.jsx'; 
import EventsSection from '../features/landing/EventsSection.jsx'; 
import FeaturesSection from '../features/landing/FeaturesSection.jsx'; 
// IMPORT THE NEW FOOTER
import Footer from '../Components/Footer/Footer.jsx'; 

const HomePage = () => {
  return (
    // <> fragment for the whole page wrapper
    <>
      {/* 1. Navigation Bar */}
      <Navbar />
      
      {/* 2. Main Content Sections */}
      <main>
        <MainBanner /> 
        <EventsSection />
        <FeaturesSection />
        {/* If you have any other sections, they go here */}
      </main>
      
      {/* 3. Footer */}
      <Footer /> 
    </>
  );
};

export default HomePage;