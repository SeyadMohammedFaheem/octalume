import React from 'react';

const ProgressCard = ({ deviceName, subtitle, progress, timeLeft }) => {
  return (
    <div className="bg-primary-container-bg text-white p-5 rounded-3xl flex flex-col items-center justify-between
    ">
      {/* Device Info */}
      <div className="flex flex-row w-full pb-5 justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{subtitle}</p>
        </div>
        <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/up arrow.svg" alt="Up Arrow" />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="flex items-center space-x-4 flex-grow w-full mx-6">
        <div className="w-full bg-primary-container-text h-12 rounded-full overflow-hidden relative">
          <div className="h-12 rounded-full absolute top-0 left-0"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(to right, #FBC02D, #7CB342)",
            }}
          />
          <p className="text-primary-default font-secondary-h2 absolute right-4 top-1/2 -translate-y-1/2">{timeLeft}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;