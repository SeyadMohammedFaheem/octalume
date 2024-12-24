import React from "react";

const RoomTabButton = ({ label, onClick, isActive, variant = "default" }) => {
  return (
    <button
      className={`px-6 py-4 rounded-2xl ${
        variant === "outline"
          ? "border border-tertiary-button-border font-primary-h3 text-tertiary-button-text bg-transparent"
          : isActive
          ? "bg-primary-button-fill font-primary-h3 text-primary-button-text"
          : "bg-secondary-button-fill font-primary-h3 text-secondary-button-text"
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default RoomTabButton;
