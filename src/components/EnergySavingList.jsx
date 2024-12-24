import React from "react";

// EnergySavingItem: Single List Row Component
const EnergySavingItem = ({ icon, deviceName, energyValue }) => {
  return (
    <div className=" font-primary text-primary-h3 flex items-center justify-between w-full py-4">
      {/* Icon & Device Info */}
      <div className="flex items-center gap-3">
        {/* Icon */}
        <div className="bg-primary-container-text rounded-full w-12 h-12 flex justify-center items-center">
          <img src={icon} alt={deviceName} className="w-6 h-6" />
        </div>
        {/* Device Details */}
        <div className="flex flex-col">
          <span className="text-white font-medium">{deviceName}</span>
          <span className=" font-secondary text-secondary-text text-secondary-h3">
            3% savings then the last month
          </span>
        </div>
      </div>
      {/* Energy Consumption */}
      <div className="text-[#DFFF4F] font-semibold text-lg">
        {energyValue} <span className="text-sm">kWh</span>
      </div>
    </div>
  );
};

// Main Component
const EnergySavingList = () => {
  const devices = [
    {
      name: "Television",
      icon: "/src/assets/tv.svg",
      value: 234,
    },
    {
      name: "Refrigerator",
      icon: "/src/assets/fridge.svg",
      value: 623,
    },
    {
      name: "Air Conditioner",
      icon: "/src/assets/ac.svg",
      value: 843,
    },
    {
      name: "Smart Light",
      icon: "/src/assets/light.svg",
      value: 23,
    },
  ];

  return (
    <div className="bg-[#111111] rounded-2xl p-5 w-full  gap-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-2 ">
        <div>
          <h3 className="font-primary text-primary-h2">Energy saving</h3>
          <p className="font-secondary text-secondary-text">April</p>
        </div>
        {/* Button */}
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>

      {/* List of Energy Items */}
      <div className="">
        {devices.map((device) => (
          <EnergySavingItem
            key={device.name}
            icon={device.icon}
            deviceName={device.name}
            energyValue={device.value}
          />
        ))}
      </div>
    </div>
  );
};

export default EnergySavingList;
