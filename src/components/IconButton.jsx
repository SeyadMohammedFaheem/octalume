import React from "react";

const IconButton = ({ iconSrc, active, onClick }) => {
  return (
    <button
      className={`w-14 h-14 rounded-full flex justify-center items-center transition-all duration-300 ${
        active
          ? "bg-secondary-container-bg" // Active state styles
          : "bg-primary-container-text"
      } hover:scale-125 "`} // Hover styles
      onClick={onClick}
    >
      <img src={iconSrc} alt="Icon" className="w-6 h-6 " />
    </button>
  );
};

export default IconButton;
