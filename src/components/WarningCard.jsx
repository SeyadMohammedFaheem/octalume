import React from "react";

const WarningCard = ({ message, type }) => {
  const color = type === "warning" ? "text-w" : "text-red-400";
  return (
    <div className={`flex flex-col bg-primary-container-bg p-5  gap-9 rounded-3xl ${color}`}>
            <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-between">
      <h3 className="font-primary text-primary-h2 text-danger">Warning!!!</h3>
      <p className="font-secondary text-secondary-text">{message}</p>
      </div>
      <button className="bg-primary-container-text text-white w-16 h-16 rounded-full flex justify-center items-center">
          <img src="/src/assets/danger.svg" alt="Up Arrow" />
        </button>
        </div>

        <div className="flex flex-row justify-between">
        <div className="flex flex-col justify-between">
          <h3 className="font-primary text-primary-h2 text-primary-text">Door/Window Sensors</h3>
      <p className="font-secondary text-secondary-text">you have a open window</p>
      </div>
      <div className="rounded-full flex justify-end items-end">
      <h3 className="font-secondary text-secondary-h3 text-secondary-text">Alert Security</h3>
        </div>
        </div>

         
    </div>

    
  );
};

export default WarningCard;
