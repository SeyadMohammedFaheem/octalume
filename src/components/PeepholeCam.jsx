import React from 'react';

const PeepholeCam = ({ deviceName, subtitle,}) => {

  return (
    <div className="bg-primary-container-bg flex flex-col items-center justify-center p-5 gap-5 rounded-3xl">
       <div className="relative ">
       <img src="/octalume/src/assets/camera feed.svg
       "  />
        </div>
<div className="flex flex-row w-full justify-between">
<div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{subtitle}</p>
        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/octalume/src/assets/up-arrow.svg" alt="Up Arrow" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default PeepholeCam;