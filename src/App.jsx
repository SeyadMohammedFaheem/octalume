import React from "react";
import Header from "./components/Header";
import EnergyGraph from "./components/EnergyGraph";
import DeviceCard from "./components/DeviceCard";
import WarningCard from "./components/WarningCard";
import StatsCard from "./components/StatsCard";
import MediaPlayer from "./components/MediaPlayer";
import ProgressCard from "./components/ProgressCard"; // Import ProgressCard
import PeepholeCam from "./components/PeepholeCam"; // Import PeepholeCam
import WifiCard from "./components/WifiCard"; 
import SmartLightCard from "./components/SmartLightCard"; 
import EnergySavedCard from "./components/EnergySavedCard";
import EnergySavingList from "./components/EnergySavingList";
import TemperatureControlPanel from "./components/TemperatureControlPanel";
import SmartDoorLock from "./components/SmartDoorLock";
import Aqi from "./components/Aqi";



const App = () => {
  return (
    <div className="bg-[#000000] text-white min-h-screen px-8 pt-8 pb-12">
      {/* Header */}
      <Header />
      <div className="flex flex-col gap-5">
        {/* Main Dashboard Layout */}
        <div className="flex flex-row gap-5">
          {/* Energy Graph */}
          <div className="w-2/3">
            <EnergyGraph />
          </div>
          {/* Stats Card */}
          <div className="w-5/12">
            <StatsCard
              title="Energy Consumed by Rooms"
              details="Living Room"
              value="10,800 kWh"
            />
          </div>
        </div>
        <div className="flex flex-row gap-5">
        <div className="flex flex-col gap-5 w-2/3">
        {/* Progress Card */}
        <div className="w-full">
          <ProgressCard
            deviceName="Vacuum Cleaner"
            subtitle="Peephole Cam (Video Doorbell)"
            progress={80} // Progress in percentage
            timeLeft="08 min left" // Time remaining
          />
        </div>
        {/* Device Cards */}
        <div className="flex flex-row gap-5 w-full">
        <div className="flex flex-col gap-5 w-full">
      <div className="flex flex-col">
        <DeviceCard
          deviceName="Television"
          devicedesc="Peephole Cam (Video Doorbell)"
        />
      </div>
       
        {/* wifi Cards */}
      
        <div className="flex flex-col ">
        <WifiCard
          deviceName="Wifi"
          devicedesc="Home Network 5G"
        />
      </div>
      
      {/* Warning Card */}
      <div className="">
          <WarningCard
            message="Windows are opened in the kids room"
            type="warning"
          />
        </div>
        <div>
        <EnergySavingList />
    </div>
      </div>

      <div className="flex flex-col gap-5 w-full ">
      {/* Peephole Cam */}
      

      <div className="flex flex-col gap-5 ">
        <SmartLightCard
          deviceName="Smart Light"
          devicedesc="Auto Mode"
        />
          <div>
      <TemperatureControlPanel />
    </div>
      {/* Media Player */}
      <div>
        <MediaPlayer song="Bad Guy - Billie Eilish" />
      </div>

      </div>
      </div>
      </div>
      </div>
      <div className="flex flex-col gap-5 ">
      <div className="">
          <PeepholeCam 
           deviceName="Vacuum Cleaner"
          subtitle="Peephole Cam (Video Doorbell)"
          />
        </div>
        <div>
        <EnergySavedCard />
    </div>
    <Aqi
          deviceName="Atmosphere Quality Index"
          devicedesc="Home"
        />
    <div>
      <SmartDoorLock />
    </div>
    </div>
       
      </div>

      

      
    
      
    

    </div>
    </div>
  );
};

export default App;
