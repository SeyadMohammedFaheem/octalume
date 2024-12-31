import React from 'react';
import UpArrowIcon from '../assets/up-arrow.svg';

const UpArrow = () => {
  return (
    <div className="">
     
     
       <button className="bg-primary-container-text w-16 h-16 rounded-full flex justify-center items-center">
                 <img src={UpArrowIcon} alt="Up Arrow" />
               </button>
      </div>
     
    
  );
};

export default UpArrow;