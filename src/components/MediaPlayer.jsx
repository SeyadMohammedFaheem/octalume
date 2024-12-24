import React from "react";

const MediaPlayer = () => {
  return (
    <div className="relative bg-black text-white rounded-lg w-[400px]  overflow-hidden">
      {/* Media Background */}
      <div className="">
      <img src="/src/assets/media.png" alt="Up Arrow" />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

      {/* Song Details */}
      <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm">Billie Eilish</p>
        <h2 className="text-lg font-semibold">Bad Guy</h2>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 left-8 right-8">
        <div className="flex items-center justify-between text-sm">
          <span>2:25</span>
          <span>4:02</span>
        </div>
        <div className="relative mt-2 h-2 bg-gray-600 rounded-full">
          {/* Progress Bar */}
          <div
            className="absolute h-2 rounded-full"
            style={{
              width: "55%",
              background: "linear-gradient(to right, #DFFF00, #ADFF2F)",
            }}
          />
          {/* Progress Knob */}
          <div
            className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2 bg-[#DFFF00] w-4 h-4 rounded-full"
          />
        </div>
      </div>

      {/* Media Controls */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center space-x-6">
        <button className="flex justify-center items-center bg-gray-700 w-10 h-10 rounded-full">
          {/* Previous Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M15.5 3.14v17.72L6.43 12.02 15.5 3.14zm-.78 1.68l-7.78 6.71 7.78 6.71V4.82z" />
          </svg>
        </button>
        <button className="flex justify-center items-center bg-[#DFFF00] w-14 h-14 rounded-full">
          {/* Pause Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 24 24"
            className="h-6 w-6"
          >
            <path d="M8 5h3v14H8zM13 5h3v14h-3z" />
          </svg>
        </button>
        <button className="flex justify-center items-center bg-gray-700 w-10 h-10 rounded-full">
          {/* Next Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M6.14 3.14v17.72L15.07 12.02 6.14 3.14zm.79 1.68l7.78 6.71-7.78 6.71V4.82z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MediaPlayer;
