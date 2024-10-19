import React, { useRef } from 'react';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const doctors = [
  {
    id: 1,
    name: 'Dr. Hamaila Saeed',
    specialization: 'General Physician',
    rating: '4.9',
    image: '08f9c0448870ecdd6964685c2569b9d9.jpeg',
  },
  {
    id: 2,
    name: 'Dr. Saad Ullah Siddiqui',
    specialization: 'General Physician',
    rating: '4.9',
    image: 'SECOND.png',
  },
  {
    id: 3,
    name: 'Dr. Humza Khizer',
    specialization: 'General Physician',
    rating: '4.9',
    image: 'c1d48ea47cafa644ce5d095d37226359.png',
  },
  {
    id: 4,
    name: 'Dr. Israr',
    specialization: 'General Physician',
    rating: '4.9',
    image: 'israr.jpeg',
  },
];

const TopRatedDoctors = () => {
  // Reference for the scrollable container
  const scrollRef = useRef(null);

  // Function to handle left scroll
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Function to handle right scroll
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center items-center h-screen mx-[5vw]">
      {/* Container for the content */}
      <div className="w-full p-6 flex items-center justify-between max-w-7xl">
        {/* Left Section - Heading and Description */}
        <div className="mr-8 w-[15vw]">
          <h2 className="text-3xl font-semibold mb-2">Top Rated Doctors</h2>
          <p className="text-gray-600 text-[16px] ">
            Browse from a list of PMDC
            <br /> certified doctors and <br /> choose the one that's right
            <br /> for you!
          </p>
        </div>

        {/* Right Section - Doctors Cards with Navigation */}
        <div className="flex items-center space-x-6">
          {/* Left Arrow */}
          <button className="p-2 bg-gray-200 rounded-full" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>

          {/* Scrollable Doctor Cards */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-hidden max-w-[800px]"
          >
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white shadow-md rounded-lg p-4  min-w-[250px] relative "
              >
               
                <div className='w-[200px] items-start'>
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="mx-auto mb-4 w-32 h-32 object-cover object-top   rounded-md ml-[-8px]" // Changed here for box-shaped image
                />
              
                </div>
                <div className="flex justify-center items-center mt-2 px-[15px] bg-blue-400 h-fit absolute right-0 top-[60px] rounded-tr-[18px] py-1">
                <FaStar className="text-white mr-1 text-[12px]" />
                <span className='text-white'>{doctor.rating}/5</span>
              </div>
                <h3 className="text-xl font-medium mb-[3vh]">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.specialization}</p>
                
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="p-2 bg-gray-200 rounded-full" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopRatedDoctors;
