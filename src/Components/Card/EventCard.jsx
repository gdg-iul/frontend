import React from 'react';

// This component displays a single event item
const EventCard = ({ title, date, topic }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-xl hover:shadow-blue-500/20 transition duration-300 transform hover:-translate-y-1 border border-gray-700">
      <p className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">{topic}</p>
      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{title}</h3>
      <p className="text-gray-400 mb-4 text-sm font-mono">{date}</p>
      <button className="text-blue-500 font-semibold border border-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition duration-300 w-full">
        Register Now
      </button>
    </div>
  );
};

export default EventCard;