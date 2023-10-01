import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { turfInfo } from '../data/PlaygroundsData';
import DateTimePicker from '../components/Turfs/DateTimePicker';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar'

const TurfDetails = () => {
  const { turfId } = useParams();

  const [selectedDate, setSelectedDate] = useState(new Date()); // Initialize with the current date
  const [selectedTime, setSelectedTime] = useState('12:00');

  // Find the turf with the matching turfId
  const selectedTurf = turfInfo.find((turf) => turfId === turf.turfId);

  // Handle the case where the turf is not found
  if (!selectedTurf) {
    return <div>Turf not found</div>;
  }

  // Function to handle booking action (You can replace this with your actual booking logic)
  const handleBookTurf = () => {
    alert(`Turf booked for ${selectedDate.toDateString()} at ${selectedTime}`);
  };

  return (
    <>
    <div className="bg-black pb-6">
         <Navbar />
    </div>
 
    <div className="bg-gray-200">
      <div className="bg-white shadow-md rounded-lg p-4 mx-auto max-w-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">{selectedTurf.turf_name}</h2>
          <img src={selectedTurf.image} alt="Turf" className="mt-4 rounded-lg w-full" />
        </div>
        <div className="mt-4">
          <p className="text-gray-600 text-lg">Location: {selectedTurf.location}</p>
          <p className="text-gray-600 text-lg">Rates: {selectedTurf.rates}</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-800 text-lg font-semibold">Description:</p>
          <p className="text-gray-600 text-lg">{selectedTurf.description}</p>
        </div>
        {/* DateTimePicker */}
        <div className="mt-6">
          <DateTimePicker
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            onDateChange={(date) => setSelectedDate(date)}
            onTimeChange={(time) => setSelectedTime(time)}
          />
        </div>

        {/* Book Turf Button */}
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleBookTurf}
          >
            Book Turf
          </button>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default TurfDetails;
