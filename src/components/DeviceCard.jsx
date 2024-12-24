import React from 'react';

const DeviceCard = ({ deviceName, devicedesc, energyConsumption, downloadSpeed, uploadSpeed }) => {
  return (
    <div className="bg-primary-container-bg p-5 rounded-3xl">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{devicedesc}</p>
        </div>
        <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-full h-full  bg-primary-container-text rounded-full peer-checked:bg-primary-container-text peer-checked:after:translate-x-full after:absolute after:top-[4px] after:left-[4px] after:bg-black   after:w-6 after:h-6 after:rounded-full after:transition-all peer-checked:after:bg-secondary-container-bg"></div>
        </label>
      </div>

     
    </div>
  );
};

export default DeviceCard;