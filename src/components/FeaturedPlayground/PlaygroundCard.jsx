import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade'; // Import the Fade component from react-reveal

const PlaygroundCard = ({ image, location, description, turfName, rates, turfId }) => {
  return (
    <Fade duration={1000}>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
        <img src={image} alt="Turf" className="w-full h-48 object-cover" />

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{turfName}</h2>
          <p className="text-gray-600 mb-4">{description}</p>

          <div className="flex justify-between">
            <div>
              <p className="text-gray-700 font-semibold">Location</p>
              <p className="text-gray-600">{location}</p>
            </div>
            <div>
              <p className="text-gray-700 font-semibold">Rates</p>
              <p className="text-gray-600">{rates}</p>
            </div>
          </div>

          <div className="mt-2"> {/* Adjusted the margin-top for spacing */}
            <Link to={`/turfs/${turfId}`}>
              <button className="bg-primary-color hover:bg-primary-darker text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
                Book Turf
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default PlaygroundCard;
