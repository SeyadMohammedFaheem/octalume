import React from "react";
import BarChart from "./BarChart"; // Adjust path if needed

const StatsCard = () => {
  const barChartData = [
    { label: "Kids Room", value: 100, height: 20, gradient: false },
    { label: "Bedroom", value: 150, height: 28, gradient: false },
    { label: "Living Room", value: 200, height: 44, gradient: true },
  ];

  return (
    <div className="bg-primary-container-bg p-5 h-full justify-between rounded-3xl">
      <div className="flex flex-col justify-between h-full gap-3">
     <div className="flex flex-col justify-between h-full gap-3">
      {/* Bar Chart Section */}
      <BarChart data={barChartData} />
      <div className="flex  flex-row justify-between  gap-3">
        {/* Bar 1 */}
        <div className="flex flex-col items-center w-full gap-3">

         
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Kidsroom
          </div>
        </div>

        {/* Bar 2 */}
        <div className="flex flex-col items-center w-full gap-3">
        
         
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Bedroom
          </div>
        </div>

        {/* Bar 3 */}
        <div className="flex flex-col items-center w-full gap-3">
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Living Room
          </div>
         
        </div>

        
      </div>
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center ">
        <div className="flex flex-col justify-between text-sm text-gray-400 gap-2">
          <h2 className="font-primary text-primary-h2 text-primary-text gap-2">
            Electricity Consumed By Rooms
          </h2>
          <p className="text-secondary-text">Peephole Cam (Video Doorbell)</p>
        </div>
        <div>
          <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
            <img src="/octalume/src/assets/up-arrow.svg" alt="Up Arrow" />
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default StatsCard;
