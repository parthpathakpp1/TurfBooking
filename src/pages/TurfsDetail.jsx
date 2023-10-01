import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { turfInfo } from '../data/PlaygroundsData';
import DateTimePicker from '../components/Turfs/DateTimePicker';
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
      <div className="bg-primary-color py-4">
        <Navbar />
      </div>

      <div className="bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">{selectedTurf.turf_name}</h2>
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

            <div className="mt-6">
              <DateTimePicker
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onDateChange={(date) => setSelectedDate(date)}
                onTimeChange={(time) => setSelectedTime(time)}
              />
            </div>

            <div className="mt-6">
              <button
                className="bg-primary-color hover:bg-secondary-color text-white font-bold py-3 px-6 rounded-full"
                onClick={handleBookTurf}
              >
                Book Turf
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TurfDetails;
