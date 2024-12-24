import React from "react";

const EnergySavedCard = () => {
  return (
    <div className="bg-secondary-container-bg rounded-3xl  p-5 flex justify-between w-full">
      {/* Content Section */}
      <div className="flex flex-col gap-9 w-full">
      <div className="flex flex-row gap-2 justify-between ">
      <div className="flex flex-col gap-2">
      <h2 className="font-primary text-primary-h2 text-primary-text-inverse gap-2">Energy Saved</h2>
      <p className="text-secondary-text">Connected Appliances</p>
      </div>
      <button className="bg-primary-container-text w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
        </div>
     
        <div className="flex items-center  gap-2   ">
          <span className="text-primary-h1 text-primary-text-inverse">4300 kWh</span>
          <span className="text-sm  text-gray-700">3% savings then <br></br> the last month</span>
        </div>
      </div>

      {/* Arrow Icon */}
      
    </div>
  );
};

export default EnergySavedCard;
