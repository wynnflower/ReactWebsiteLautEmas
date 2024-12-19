import React, { useState, useEffect } from 'react';

const images = [
  'https://images.unsplash.com/photo-1691387896833-dba10ea7d614?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1603630138578-a45a87fa97e9?auto=format&fit=crop&w=1920',
  'https://images.unsplash.com/photo-1691387824643-227cc84127cf?auto=format&fit=crop&w=1920'
];

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Bring the Beauty of the Ocean Into Your Home
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Professional Aquascape Design & Maintenance Services
          </p>
          <div className="space-x-4">
            <a
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </a>
            <a
              href="/portfolio"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}