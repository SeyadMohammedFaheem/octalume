import React from 'react';
import UpArrowIcon from '../assets/up-arrow.svg';

const Aqi = ({ deviceName, devicedesc, humidity, AQILevel, AllergenRisk }) => {
  return (
    <div className="bg-primary-container-bg p-5 rounded-3xl flex flex-col gap-9">
      <div className="flex justify-between  items-center">
        <div>
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{devicedesc}</p>
        </div>
       <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
                 <img src={UpArrowIcon} alt="Up Arrow" />
               </button>
      </div>
      <div className="flex flex-row justify-between">
      <div className="flex flex-row gap-2">
<div className="  h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/Humidity icon.svg" />
        </div>
        <div className="flex flex-col gap-2">
      <h2 className=" text-secondary-h2 text-primary-text gap-2">Humidity</h2>
      <p className="text-secondary-text text-primary-h2">85%</p>
      </div>
</div>
<div className="flex flex-row gap-2">
<div className="  h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/AQI icon.svg" />
        </div>
        <div className="flex flex-col gap-2">
      <h2 className=" text-secondary-h2 text-primary-text gap-2">AQI Level</h2>
      <p className="text-secondary-text text-primary-h2">Good</p>
      </div>
</div>
<div className="flex flex-row gap-2">
<div className="  h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/Allergen icon.svg"  />
        </div>
        <div className="flex flex-col gap-2">
      <h2 className=" text-secondary-h2 text-primary-text gap-2">Allergen Risk</h2>
      <p className="text-secondary-text text-primary-h2">5 Moderate</p>
      </div>
</div>

</div>
      

     
    </div>
  );
};

export default Aqi;