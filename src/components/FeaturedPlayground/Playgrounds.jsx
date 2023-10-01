import React from "react";
import { turfInfo } from "../../data/PlaygroundsData";
import PlaygroundCard from "./PlaygroundCard";

const Playgrounds = () => {
  const playgroundList = turfInfo.map((turf, index) => {
    // Generate a unique key based on the index
    const turfId = `turf_${index}`;
    
    return (
      <PlaygroundCard
        key={turfId} // Use the generated turfId as the key
        image={turf.image}
        turfName={turf.turf_name}
        location={turf.location}
        rates={turf.rates}
        description={turf.description}
        turfId={turfId} // Pass the generated turfId as a prop
      />
    );
  });
  return (
    <div className="w-full bg-gray-100">
      <h2 className="pt-4 text-3xl font-extrabold text-center">
        Featured <span className="text-primary-color">Playgrounds</span>
      </h2>
      <div className="pt-20 w-4/5 mx-auto grid gap-8 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 align-center">{playgroundList}</div>
    </div>
  );
};

export default Playgrounds;
