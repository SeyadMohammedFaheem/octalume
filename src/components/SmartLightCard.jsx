import React from 'react';

const SmartLightCard = ({ deviceName, devicedesc, energyConsumption, downloadSpeed, uploadSpeed }) => {
  return (
    <div className="bg-primary-container-bg p-5 rounded-3xl">
      <div className="flex flex-col justify-between  gap-5 ">
      <div className="flex justify-between  items-center">
        <div>
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{devicedesc}</p>
        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>
      <div className="flex items-center space-x-4 flex-grow w-full">
        <div className="w-full bg-primary-container-text h-12 rounded-full overflow-hidden relative">
          <div className="h-12 rounded-full absolute top-0 left-0 w-3/4"
            style={{
            
              background: "linear-gradient(to right, #FBC02D, #7CB342)",
            }}
          />
          <p className="text-primary-default font-secondary-h2 absolute right-4 top-1/2 -translate-y-1/2"></p>
        </div>
      </div>
      </div>
      </div>
  );
};

export default SmartLightCard;