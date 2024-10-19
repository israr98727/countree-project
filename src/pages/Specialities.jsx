import React, { useState, useRef } from 'react';
import { IoChevronForwardOutline, IoChevronBackOutline } from 'react-icons/io5';

// Updated specialities array with SVG image paths
const specialities = [
  { name: 'Cardiology', icon: '/specialities-01.svg' },
  { name: 'Neurology', icon: '/specialities-02.svg' },
  { name: 'Urology', icon: '/specialities-03.svg' },
  { name: 'Orthopedic', icon: '/specialities-04.svg' },
  { name: 'Dentist', icon: '/specialities-05.svg' },
  { name: 'Ophthalmology', icon: '/specialities-06.svg' },
];

const Specialities = () => {
  const [startIndex, setStartIndex] = useState(0);
  const specialtiesRef = useRef(null); // Create a ref for the specialties container

  // Calculate the displayed specialities with wrap-around
  const displayedSpecialities = [
    ...specialities.slice(startIndex, startIndex + 6),
    ...specialities.slice(0, Math.max(0, startIndex + 6 - specialities.length)),
  ];

  const scrollForward = () => {
    // Update the start index and scroll the container smoothly
    const newIndex = (startIndex + 1) % specialities.length;
    setStartIndex(newIndex);
    scrollToSpecialty(newIndex);
  };

  const scrollBackward = () => {
    // Update the start index and scroll the container smoothly
    const newIndex = (startIndex - 1 + specialities.length) % specialities.length;
    setStartIndex(newIndex);
    scrollToSpecialty(newIndex);
  };

  // Scroll to the selected specialty smoothly
  const scrollToSpecialty = (index) => {
    const container = specialtiesRef.current;
    const targetOffset = (index % 6) * 150; // Assuming each card is 150px wide
    container.scrollTo({
      left: targetOffset,
      behavior: 'smooth',
    });
  };

  return (
    <section className="my-8 mx-auto max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-semibold">
          Specialities
          <span className="text-blue-600 ml-2">+</span>
        </h2>
        <div className="flex space-x-4">
          <button
            onClick={scrollBackward}
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200"
          >
            <IoChevronBackOutline size={24} />
          </button>
          <button
            onClick={scrollForward}
            className="p-2 rounded-full bg-gray-100 shadow hover:bg-gray-200"
          >
            <IoChevronForwardOutline size={24} />
          </button>
        </div>
      </div>

      <div
        ref={specialtiesRef} // Attach the ref to the container
        className="flex overflow-x-auto scrollbar-hide space-x-8 px-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {displayedSpecialities.map((speciality, index) => (
          <div
            key={index}
            className="flex-none border rounded-lg p-4 flex flex-col items-center justify-center min-w-[150px] 
                       transition-all duration-300 hover:shadow-lg"
          >
            {/* Container for the SVG image */}
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-500 hover:rotate-[180deg] hover:fill-white">
              <img
                src={speciality.icon}
                alt={speciality.name}
                className="object-contain w-14 h-14 rounded-full" // Ensure the SVG maintains aspect ratio
              />
            </div>
            <p className="text-lg font-medium">{speciality.name}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          See All Specialities
        </button>
      </div>
    </section>
  );
};

export default Specialities;
