import React, { useState } from "react";
import IconButton from "./IconButton";

const BottomNavbar = () => {
  // Track active index
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-white/50 to-white/30 p-4 items-center justify-between backdrop-blur flex py-4 px-11 gap-7 mb-6 rounded-3xl">

      {/* Nav Item 1 */}
      <IconButton
        iconSrc="/octalume/src/assets/dashboard.svg"
        active={activeIndex === 0}
        onClick={() => setActiveIndex(0)}
      />

      {/* Nav Item 2 */}
      <IconButton
        iconSrc="/octalume/src/assets/apps.svg"
        active={activeIndex === 1}
        onClick={() => setActiveIndex(1)}
      />

      {/* Nav Item 3 */}
      <IconButton
        iconSrc="/octalume/src/assets/inbox.svg"
        active={activeIndex === 2}
        onClick={() => setActiveIndex(2)}
      />

      {/* Nav Item 4 */}
      <IconButton
        iconSrc="/octalume/src/assets/analytics.svg"
        active={activeIndex === 3}
        onClick={() => setActiveIndex(3)}
      />

      {/* Nav Item 5 */}
      <IconButton
        iconSrc="/octalume/src/assets/settings.svg"
        active={activeIndex === 4}
        onClick={() => setActiveIndex(4)}
      />
    </div>
  );
};

export default BottomNavbar;
