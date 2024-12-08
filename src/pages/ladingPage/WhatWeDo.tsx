import { ArrowRight } from '@phosphor-icons/react';
import image from '../../assets/img/Frame 26 (1).jpg';

const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-4 space-y-4 md:space-y-0 px-[5%] py-[10rem] space-x-4">
      <img src={image} alt="What we do" className="w-2/3 md:w-2/3 lg:w-[40rem]" />
      <div className="text-center md:text-left">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">
          At Founder’s Friday, Every Friday Is a Learning Experience!
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-600">
          Join us in our mission to transform ideas into impact and shape the future of Nigeria’s startup landscape.
        </p>
        <button 
        className="flex items-center justify-center border-2 border-primaryColor text-white bg-primaryColor shadow-md px-8 md:px-14 py-3 md:py-5 rounded-3xl text-sm md:text-xl mt-4 transition duration-300 hover:bg-primaryColor hover:text-white"
      >
        Register
        <ArrowRight size={20} weight="bold" className="ml-2" />
      </button>
      </div>
    </div>
  );
};

export default WhatWeDo;
