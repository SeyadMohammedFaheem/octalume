import CameraFeedIcon from '../assets/camera feed.svg';
import UpArrowIcon from '../assets/up-arrow.svg';
import UpArrow from './UpArrow';

const PeepholeCam = ({ deviceName, subtitle }) => {
  return (
    <div className="bg-primary-container-bg flex flex-col items-center justify-center p-5 gap-5 rounded-3xl">
      <div className="relative">
        <img src={CameraFeedIcon} alt="Camera Feed" />
      </div>
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="font-primary text-primary-h2">{deviceName}</h3>
          <p className="font-secondary text-secondary-text">{subtitle}</p>
        </div>
        <button className="w-16 h-16 rounded-full flex justify-center items-center">
        <UpArrow/>
        </button>
      </div>
    </div>
  );
};

export default PeepholeCam;
