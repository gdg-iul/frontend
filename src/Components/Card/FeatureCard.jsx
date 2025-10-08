import React from 'react';
// Assuming you have an icon library installed (like react-icons)
// If not, replace <svg> with a simple placeholder text like "[Icon]"

const FeatureCard = ({ title, description, icon: IconComponent }) => {
  return (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 flex flex-col items-center text-center">
      {/* Icon Placeholder */}
      <div className="text-4xl text-blue-500 mb-4">
        {IconComponent ? <IconComponent /> : '[Icon]'}
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;