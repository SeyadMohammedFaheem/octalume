import React from "react";

const TemperatureControl = () => {
  return (
    <div className="bg-primary-container-bg p-5 h-full justify-between rounded-3xl">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold">Air Conditioner</h1>
          <p className="text-sm text-gray-400">Auto mode</p>
        </div>
        <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-5 h-5"
          >
            <path d="M12 2l8 8h-6v8h-4v-8H4l8-8z" />
          </svg>
        </button>
      </div>

      {/* Arc with Temperature */}
      <div className="relative mt-8 flex flex-col items-center">
        <div className="relative w-[200px] h-[200px]">
          {/* Arc Background */}
          <svg
            className="absolute top-0 left-0 w-full h-full rotate-[-140deg]"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B3B3B"
              strokeWidth="7"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#DFFF00"
              strokeWidth="7"
              strokeDasharray="251.2"
              strokeDashoffset="100"
            />
          </svg>
          {/* Center Temperature */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <span className="text-4xl text-[#DFFF00] font-bold">22°C</span>
            <p className="text-sm text-gray-400 mt-1">Temperature</p>
          </div>
        </div>
        {/* Temperature Scale */}
        <div className="flex justify-between w-full px-3 mt-4 text-sm text-gray-400">
          <span>17°</span>
          <span>29°</span>
        </div>
      </div>

      {/* Heating & Cooling Options */}
      <div className="mt-8 space-y-6">
        {/* Heating Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#FF4500"
                className="w-6 h-6"
              >
                <path d="M12 2C8.6 5.5 7 8 7 11a5 5 0 1010 0c0-3-1.6-5.5-5-9z" />
              </svg>
            </div>
            <span>Heating</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked />
            <div className="w-10 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-[#DFFF00]"></div>
            <div className="absolute left-1 top-1 bg-black peer-checked:translate-x-4 w-4 h-4 rounded-full transition-transform"></div>
          </label>
        </div>

        {/* Cooling Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#00BFFF"
                className="w-6 h-6"
              >
                <path d="M12 2v3M12 19v3M4 12H1M23 12h-3M5.636 5.636L4.222 4.222M19.778 19.778l-1.414-1.414M4.222 19.778l1.414-1.414M19.778 4.222l-1.414 1.414" />
              </svg>
            </div>
            <span>Cooling</span>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-10 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:bg-[#DFFF00]"></div>
            <div className="absolute left-1 top-1 bg-black peer-checked:translate-x-4 w-4 h-4 rounded-full transition-transform"></div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default TemperatureControl;
