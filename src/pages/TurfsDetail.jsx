import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { turfInfo } from '../data/PlaygroundsData';
import DateTimePicker from '../components/Turfs/DateTimePicker';
import { BsFillStarFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { BiCurrentLocation } from 'react-icons/bi';
import { PiCoatHanger } from 'react-icons/pi';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar';

const TurfDetails = () => {
  const { turfId } = useParams();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');

  const selectedTurf = turfInfo.find((turf) => turfId === turf.turfId);

  if (!selectedTurf) {
    return <div>Turf not found</div>;
  }

  const handleBookTurf = () => {
    alert(`Turf booked for ${selectedDate.toDateString()} at ${selectedTime}`);
  };

  return (
    <div>
      {/* Header Styling */}
      <div className="bg-gradient-to-b from-primary-color to-secondary-color py-4 text-white">
        <Navbar />
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="w-[1080px] mx-auto">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">

              <div className="flex justify-between">
                <div className="text-center w-[50%] flex flex-col items-center justify-center relative">
                  {/* Turf Image with Hover Effect */}
                  <img
                    src={selectedTurf.image}
                    alt="Turf"
                    className="mt-4 rounded-lg h-[60%] w-[80%] transition-transform transform hover:scale-105"
                  />
                  {/* Rating Stars with Hover Effect */}
                  <div className='flex mt-3 w-[80%] justify-between items-center'>
                    <h2 className="text-3xl font-semibold">{selectedTurf.turf_name}</h2>
                    <div className='flex justify-between items-baseline space-x-1'>
                      <BsFillStarFill color='red' className="hover:text-yellow-500 hover:scale-110" />
                      <span className='text-[15px]'>4.5</span>
                    </div>
                  </div>
                </div>
                <div className='w-[50%]'>
                  <div className="mt-4">
                    {/* Location and Navigate Links with Hover Effect */}
                    <p className="text-gray-600 text-lg flex items-center justify-between">
                      <p className='flex items-center'>
                        Location: <IoLocationSharp color='red'/> {selectedTurf.location}
                      </p>
                      <p className='flex items-center text-blue-600 text-sm cursor-pointer hover:underline'>
                        Navigate <BiCurrentLocation color='blue'/>
                      </p>
                    </p>
                    {/* Rates Styling */}
                    <p className="text-gray-600 text-lg">Rates: {selectedTurf.rates}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-800 text-lg font-semibold">Description:</p>
                    {/* Description Styling */}
                    <p className="text-gray-600 text-lg">{selectedTurf.description}</p>
                  </div>

                  <div className="mt-6">
                    <DateTimePicker
                      selectedDate={selectedDate}
                      selectedTime={selectedTime}
                      onDateChange={(date) => setSelectedDate(date)}
                      onTimeChange={(time) => setSelectedTime(time)}
                    />
                  </div>

                  <div className="mt-6">
                    {/* Add Hover Effect to Book Turf Button */}
                    <button
                      className="bg-primary-color hover:bg-secondary-color text-white font-bold py-3 px-6 rounded-full transform hover:scale-105"
                      onClick={handleBookTurf}
                    >
                      Book Turf
                    </button>
                  </div>
                </div>
              </div>

              <div className='bg-slate-600 h-[1px] mt-9' />

              
<div className='mt-9'>
  <h2 className='text-4xl mb-6'>Details</h2>
  <div className='mt-4'>
    <div className='text-xl mb-2'>Available Sports</div>
    <div className='flex space-x-4'>
      <div className='py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
        Football
      </div>
      <div className='py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
        Cricket
      </div>
    </div>
  </div>

  <div className='mt-6'>
    <div className='text-xl mb-2'>Amenities</div>
    <div className='flex space-x-4'>
      <div className='w-[15%] py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
        Changing Room <span><PiCoatHanger /></span>
      </div>
      <div className='w-[15%] py-2 px-4 border border-gray-300 rounded-full text-sm hover:bg-gray-200 transition-all duration-300'>
        Drinking Water <span><PiCoatHanger /></span>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TurfDetails;
