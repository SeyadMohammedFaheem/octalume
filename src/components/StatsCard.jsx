import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-primary-container-bg p-5 h-full justify-between rounded-3xl">
      {/* Graph Section */}
      <div className="flex justify-between items-end gap-3">
        {/* Bar 1 */}
        <div className="flex flex-col items-center w-full gap-3">
        <span className="text-secondary-text text-secondary-h3">100kWh</span>
          <div className="bg-primary-container-text w-full h-20 rounded-2xl flex items-end justify-center">
          </div>
         
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Kidsroom
          </div>
        </div>

        {/* Bar 2 */}
        <div className="flex flex-col items-center w-full gap-3">
        <span className="text-secondary-text text-secondary-h3">100kWh</span>
          <div className="bg-primary-container-text w-full h-20 rounded-2xl flex items-end justify-center">
          </div>
         
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Bedroom
          </div>
        </div>

        {/* Bar 3 */}
        <div className="flex flex-col items-center w-full gap-3">
        <span className="text-secondary-text text-secondary-h3">200kWh</span>
          <div className="bg-[#FBC02D] w-full  rounded-2xl flex items-end justify-center relative overflow-hidden">
            <div className="bg-gradient-to-t from-[#7CB342] via-[#FBC02D] to-transparent w-full h-44 rounded-2xl"></div>
          </div>
          <div className="p-2 bg-primary-container-text text-primary-text w-full text-center text-secondary-h3 rounded-full" >Living Room
          </div>
         
        </div>

        
      </div>

      {/* Footer Section */}
      <div className="flex justify-between items-center mt-6">
      <div className="flex flex-col justify-between text-sm text-gray-400 gap-2">

<h2 className="font-primary text-primary-h2 text-primary-text gap-2">Electricity Consumed By Rooms</h2>
<p className="text-secondary-text">Peephole Cam (Video Doorbell)</p>

</div>

        <div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
