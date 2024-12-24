import React from "react";

const SmartDoorLock = () => {
  return (
    <div className="h-full rounded-xl p-5 justify-between relative w-full">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
       <img src="/src/assets/doorbell.png
       "  />
        </div>
      

      

      {/* Header */}
      <div className=" relative w-full flex flex-col gap-24 h-full justify-between ">

       <div className="  w-full flex flex-row  justify-between ">
      <div className="flex flex-col gap-2">
      <h2 className="font-primary text-primary-h2 text-primary-text-inverse gap-2">Energy Saved</h2>
      <p className="text-secondary-text">Connected Appliances</p>
      </div>
      <button className="bg-primary-container-text w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
        </div>
      {/* Status Container */}
      <div className=" bottom-4 left-4 right-4 bg-gradient-to-r from-white/0 to-white/47 p-4 rounded-full flex items-center justify-between backdrop-blur">
        <div className="flex items-center">
          {/* Lock Icon */}
          
          <button className="bg-[#DFFF00] text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/Lock Icon.svg" alt="Up Arrow" />
        </button>
          
          <div className="ml-4">
            <h3 className="text-lg font-medium">Smart Lock</h3>
            <p className="text-sm text-gray-300">Doors Locked</p>
          </div>
        </div>
        {/* Right Arrow Icon */}
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default SmartDoorLock;
