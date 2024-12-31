import React from 'react';
import UpArrow from "./UpArrow";

const WifiCard = ({ deviceName, devicedesc, energyConsumption, downloadSpeed, uploadSpeed }) => {
  return (
    <div className="bg-primary-container-bg p-5 rounded-3xl flex flex-col gap-9">
      <div className="flex justify-between  items-center">
        <div>
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{devicedesc}</p>
        </div>
        <label className="relative inline-block w-14 h-8">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-full h-full  bg-primary-container-text rounded-full peer-checked:bg-primary-container-text peer-checked:after:translate-x-full after:absolute after:top-[4px] after:left-[4px] after:bg-black   after:w-6 after:h-6 after:rounded-full after:transition-all peer-checked:after:bg-secondary-container-bg"></div>
        </label>
      </div>
      <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2">
<div className="  h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/download icon.svg
          " alt="Up Arrow" />
        </div>
        <div className="flex flex-col gap-2">
      <h2 className=" text-secondary-h2 text-primary-text gap-2">Download</h2>
      <p className="text-secondary-text text-primary-h2">68%</p>
      </div>
</div>
<div className="flex flex-row gap-2">
<div className="  h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/upload icon.svg
          " alt="Up Arrow" />
        </div>
        <div className="flex flex-col gap-2">
      <h2 className=" text-secondary-h2 text-primary-text gap-2">Upload</h2>
      <p className="text-secondary-text text-primary-h2">45%</p>
      </div>
</div>
<button className="rounded-full flex justify-center items-center">
        <UpArrow/>
        </button>
</div>
      

     
    </div>
  );
};

export default WifiCard;