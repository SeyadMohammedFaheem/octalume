import React from "react";
import MediaBg from '../assets/media.png';
import ForwardIcon from '../assets/forward.svg';
import BackwardIcon from '../assets/backward.svg';

const MediaPlayer = () => {
  return (
    <div className="relative w-[420px] h-[320px] rounded-2xl overflow-hidden shadow-lg text-white font-sans">
      {/* Background Image */}
      <img
        src={MediaBg}
        alt="media background"
        className="absolute w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Song Info */}
      <div className="absolute justify-between w-full p-6 h-full flex flex-col">
      <div className="align-center">
      <div className=" text-center">
        <p className="font-secondary text-secondary-h2 text-secondary-text gap-2">Billie Eilish</p>
        <h2 className="font-primary text-primary-h2 text-primary-text gap-2">Bad Guy</h2>
      </div>
      </div>

      {/* Progress Section */}
      <div className="bottom-20 left-6 right-6">
        <div className="flex justify-between text-[#DFFF00] text-sm font-medium">
          <span>2:25</span>
          <span>4:02</span>
        </div>

        <div className="relative w-full h-2 mt-2 bg-gray-600 rounded-full overflow-hidden">
          {/* Progress Fill */}
          <div
            className="absolute left-0 top-0 h-2 rounded-full"
            style={{
              width: "55%",
              background: "linear-gradient(to right, #FFD700, #DFFF00)",
            }}
          />
          {/* Knob */}
          <div
            className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2
            bg-[#DFFF00] w-4 h-4 rounded-full shadow-[0_0_10px_#DFFF00]"
          />
        </div>
      </div>

      {/* Controls */}
      <div className="bottom-5 left-0 right-0 flex justify-center items-center space-x-8">
        <button className="flex justify-center items-center bg-black/70 w-12 h-12 rounded-full">
          <img src={BackwardIcon} alt="previous" className="w-5 h-5" />
        </button>

        {/* Play/Pause Button */}
        <button className="flex justify-center items-center bg-[#DFFF00] w-20 h-20 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="w-8 h-8"
          >
            <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
          </svg>
        </button>

        <button className="flex justify-center items-center bg-black/70 w-12 h-12 rounded-full">
          <img src={ForwardIcon} alt="next" className="w-5 h-5" />
        </button>
      </div>
      </div>
    </div>
  );
};

export default MediaPlayer;
