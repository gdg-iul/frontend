import React from 'react';

const Navbar = () => {
  return (
    // CHANGES:
    // 1. 'fixed top-0 w-full' ensures it stays fixed during scroll.
    // 2. 'bg-[#0E0F1D]' sets the exact dark blue background color from the image.
    // 3. Removed 'backdrop-blur-md' and 'bg-opacity-10' for a solid look.
    <header className="fixed top-0 w-full z-50 py-4 bg-[#0E0F1D] shadow-lg transition duration-300">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        
        {/* Logo/Branding Group */}
        <div className="flex items-center space-x-3">
            {/* GDG Logo Placeholder - Styled to match the orange/red circle in the image */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-orange-400 flex items-center justify-center text-xs font-bold text-white">
                GDG
            </div>
            <span className="text-xl font-semibold text-white">Hub</span>
        </div>
        
        {/* Navigation Links - Use space-x-6 for tighter spacing */}
        <nav className="hidden md:flex space-x-8">
          {/* Note: In the image, the links are slightly larger and spaced further apart than typical nav links */}
          <a href="#features" className="text-white hover:text-blue-500 font-normal text-base transition duration-300">Features</a>
          <a href="#community" className="text-white hover:text-blue-500 font-normal text-base transition duration-300">Community</a>
          <a href="#resources" className="text-white hover:text-blue-500 font-normal text-base transition duration-300">Resources</a>
          <a href="#events" className="text-white hover:text-blue-500 font-normal text-base transition duration-300">Events</a>
        </nav>

      </div>
    </header>
  );
};

export default Navbar;