import React, { useState } from "react";
import IconButton from "./IconButton";

// Import every icon from the assets folder
import dashboardIcon from '../assets/Dashboard.svg';
import appsIcon from '../assets/apps.svg';
import inboxIcon from '../assets/Inbox.svg';
import analyticsIcon from '../assets/analytics.svg';
import settingsIcon from '../assets/settings.svg';


const BottomNavbar = () => {
  // Track active index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/50 to-white/30 p-4 items-center justify-between backdrop-blur flex py-4 px-11 gap-7 mb-6 rounded-3xl">

      {/* Nav Item 1 */}
      <IconButton
        iconSrc={dashboardIcon}
        active={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
      />

      {/* Nav Item 2 */}
      <IconButton
        iconSrc={appsIcon}
        active={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
      />

      {/* Nav Item 3 */}
      <IconButton
        iconSrc={inboxIcon}
        active={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
      />

      {/* Nav Item 4 */}
      <IconButton
        iconSrc={analyticsIcon}
        active={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
      />

      {/* Nav Item 5 */}
      <IconButton
        iconSrc={settingsIcon}
        active={activeIndex === 4}
        onClick={() => setActiveIndex(4)}
      />
    </div>
  );
};

export default BottomNavbar;
