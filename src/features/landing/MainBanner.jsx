import React from 'react';

const MainBanner = () => {
  return (
    // ... (Outer section wrapper remains the same)
    <section className="glow-background-container max-w-7xl mx-auto px-5 flex flex-col items-center text-center pb-32 pt-20"> 
      
      {/* Launching Badge remains the same */}
      <div className="flex items-center space-x-2 bg-gray-700/50 text-white px-4 py-2 rounded-full mb-10 border border-gray-600 backdrop-blur-md shadow-xl transition duration-300 transform hover:scale-[1.03]">
        <span role="img" aria-label="rocket" className="text-xl">🚀</span>
        <span className="text-sm font-medium tracking-wide">Launching GDG Hub 2025</span>
      </div>

      {/* Main Title remains the same */}
      <h1 className="text-8xl sm:text-9xl md:text-[10rem] lg:text-[12rem] font-extrabold leading-none mb-6 text-hero-glow tracking-tighter">
        <span className="block">Unite. Build. Grow.</span>
      </h1>
      
      {/* Subtitle/Description remains the same */}
      <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto mb-16 tracking-wide leading-relaxed">
        The ultimate digital ecosystem for Google Developer Groups worldwide. One platform to preserve legacy, foster collaboration, and accelerate innovation.
      </p>
      
      {/* CTA Buttons - ONLY KEEPING THE PRIMARY BUTTON */}
      <div className="flex gap-6 items-center">
        
        {/* Primary Button: Gradient Fill (Keep this one) */}
        <button 
          className="btn-primary-gradient text-white font-semibold py-4 px-10 rounded-full shadow-lg transition duration-300 text-lg hover:shadow-blue-500/50"
        >
          Explore Platform
        </button>
        
        {/* REMOVED: Secondary Button (Watch Demo) block goes here. */}
        
      </div>
      
    </section>
  );
};

export default MainBanner;