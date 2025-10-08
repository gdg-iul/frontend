import React from 'react';
// Correctly import the renamed component
import EventCard from '../../Components/Card/EventCard.jsx'; 

const DUMMY_EVENTS = [
    { id: 1, title: "Next-Gen AI & Web Development Trends", date: "Oct 20, 2025", topic: "AI & Web" },
    { id: 2, title: "Secure Cloud Services with Firebase", date: "Nov 5, 2025", topic: "Cloud/Backend" },
    { id: 3, title: "Building Responsive UIs with Tailwind", date: "Nov 18, 2025", topic: "Design & UX" },
];

const EventsSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 py-20">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white">Upcoming Events</h2>
        <p className="text-xl text-gray-400 mt-3">Learn, collaborate, and grow with our community.</p>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {DUMMY_EVENTS.map(event => (
          <EventCard 
            key={event.id}
            title={event.title}
            date={event.date}
            topic={event.topic}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="bg-transparent text-white border-2 border-white py-3 px-8 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition duration-300">
            View All Events
        </button>
      </div>
    </section>
  );
};

export default EventsSection;