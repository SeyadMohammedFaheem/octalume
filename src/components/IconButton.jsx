import React from "react";
import UpArrowIcon from '../assets/up-arrow.svg';

const IconButton = ({ iconSrc, active, onClick }) => {
  return (
    <button
      className={`w-14 h-14 rounded-full flex justify-center items-center transition-all duration-300 ${
        active ? "bg-secondary-container-bg" : "bg-primary-container-text"
      } hover:scale-125`} // Hover styles
      onClick={onClick}
    >
      <img
        src={iconSrc}
        alt="Icon"
        className={`w-6 h-6 icon ${active ? 'icon--active' : ''}`}
      />
    </button>
  );
};

export default IconButton;
