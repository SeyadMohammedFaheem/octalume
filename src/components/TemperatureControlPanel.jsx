import React from "react";

const TemperatureControl = () => {
  return (
    <div className="bg-primary-container-bg p-5 h-full  justify-between rounded-3xl">
      {/* Header */}
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-xl font-semibold">Air Conditioner</h1>
          <p className="text-sm text-gray-400">Auto mode</p>
        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/up-arrow.svg" alt="Up Arrow" />
        </button>
      </div>

      {/* Arc with Temperature */}
      <div className="relative py-5">
       <img src="/octalume/src/assets/temperature container.png
       "  />
        </div>

      {/* Heating & Cooling Options */}
      <div className="mt-8 space-y-6">
        {/* Heating Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
          <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/fire icon.svg" alt="Up Arrow" />
        </button>
            <span>Heating</span>
          </div>
          <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-full h-full  bg-primary-container-text rounded-full peer-checked:bg-primary-container-text peer-checked:after:translate-x-full after:absolute after:top-[4px] after:left-[4px] after:bg-black   after:w-6 after:h-6 after:rounded-full after:transition-all peer-checked:after:bg-secondary-container-bg"></div>
        </label>
        </div>

        {/* Cooling Option */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
          <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/snow icon.svg" alt="Up Arrow" />
        </button>
            <span>Cooling</span>
          </div>
          <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-full h-full  bg-primary-container-text rounded-full peer-checked:bg-primary-container-text peer-checked:after:translate-x-full after:absolute after:top-[4px] after:left-[4px] after:bg-black   after:w-6 after:h-6 after:rounded-full after:transition-all peer-checked:after:bg-secondary-container-bg"></div>
        </label>
        </div>
      </div>
    </div>
  );
};

export default TemperatureControl;
