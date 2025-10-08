import React from 'react';
import FeatureCard from '../../Components/Card/FeatureCard.jsx';
// Example: Using react-icons for illustrative purposes
// You'll need to install this package: npm install react-icons
import { FiUsers, FiCpu, FiGlobe } from 'react-icons/fi'; 

const FEATURES_DATA = [
  { 
    id: 1, 
    title: "Global Networking", 
    description: "Connect with developers, industry leaders, and speakers from around the world.", 
    icon: FiGlobe 
  },
  { 
    id: 2, 
    title: "Hands-On Workshops", 
    description: "Deep-dive into new technologies with practical, code-focused learning sessions.", 
    icon: FiCpu 
  },
  { 
    id: 3, 
    title: "Mentorship & Support", 
    description: "Get personalized guidance from experienced mentors to accelerate your career growth.", 
    icon: FiUsers 
  },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Why Join Our Hub?</h2>
        <p className="text-xl text-gray-400 mt-3">Benefits tailored for growth and connection.</p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES_DATA.map(feature => (
          <FeatureCard 
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;