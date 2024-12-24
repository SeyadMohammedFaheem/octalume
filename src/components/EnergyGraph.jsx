import React from "react";
import LineChart from "./LineChart";

const EnergyGraph = () => {
  return (
    <div className="bg-primary-container-bg p-5 h-full rounded-3xl">
      <div className="flex justify-between items-center text-sm text-gray-400 mb-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-primary text-primary-h2 text-primary-text">
            Electricity Consumed
          </h2>
          <p className="text-secondary-text">Peephole Cam (Video Doorbell)</p>
        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>
      <div className="flex flex-col h-48">
      {/* LineChart Component */}
      <LineChart />
</div>
      <div className="flex flex-row justify-between text-sm text-gray-400 gap-2 mt-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-primary text-primary-h3 text-primary-text">
            Average Electricity Consumed
          </h3>
          <p className="text-primary-default text-secondary-h1">10,800 kWh</p>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-primary text-primary-h3 text-primary-text">
            Target Energy Consumption Goal
          </h3>
          <div className="flex gap-2">
            <p className="text-primary-default text-secondary-h1">18,000 kWh</p>
            <p className="text-secondary-text text-secondary-h3">Edit Goal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyGraph;
