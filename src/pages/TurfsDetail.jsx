import { useState } from 'react';
import { useParams,} from 'react-router-dom';
import { turfInfo } from '../data/PlaygroundsData';
import DateTimePicker from '../components/Turfs/DateTimePicker';
import Footer from '../components/Footer/Footer';

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


  
  return (
    <>
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

   
      </div>
      <Footer />
    </>
  );
};

export default TurfDetails;
