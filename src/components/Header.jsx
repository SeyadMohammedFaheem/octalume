import React, { useState } from "react";
import RoomTabButton from "./RoomTabButton";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Living Room");

  const rooms = [
    "Living Room",
    "Dining Room",
    "Bedroom",
    "Bathroom",
    "Kidsroom",
    "Kitchen",
  ];

  return (
    <div className="flex  items-center justify-between  mb-10 rounded-xl">
      {/* Logo */}
      <img
        src="octalume/src/assets/logo.png"
        alt="OctaLume Logo"
        className="h-10"
      />
      <div className="flex items-center space-x-4">
        {/* Regular Tabs */}
        {rooms.map((room, index) => (
          <RoomTabButton
            key={index}
            label={room}
            isActive={room === activeTab}
            onClick={() => setActiveTab(room)}
          />
        ))}
        {/* Outlined Add Room Button */}
        <RoomTabButton
          label="Add Room"
          variant="outline"
         
        />
      </div>
      <div className="flex items-center space-x-4">
        {/* Profile Icons */}
        <button
          className="bg-primary-container-text text-white px-4 py-4 rounded-full"
        >
          <img
        src="octalume/src/assets/alert.svg"
      />
        </button>        
        <div className="bg-primary-container-text text-white w-12 h-12 rounded-full">

        <img
        src="octalume/src/assets/avatar.svg"
      />
        </div>
      </div>
    </div>
  );
};

export default Header;
