import { ArrowRight } from '@phosphor-icons/react';
import frame5 from '../../assets/img/Frame 610.svg';
import line4 from '../../assets/img/line4.png';

const Community = () => {
  return (
    <div className="text-center py-2 flex flex-col items-center">
      <h1 className="text-3xl md:text-4xl font-extrabold">
        Register And Be Part of Our Community
      </h1>
      <p className="text-lg md:text-xl font-light text-pretty my-4">
        Join our community of over 1000+ founders, developers, and tech junkies in general. 
        Be inspired by people who live to inspire!
      </p>
      <div 
        className="w-full bg-no-repeat bg-contain mb-4" 
        style={{ backgroundImage: `url(${line4})` }}
      >
        <img src={frame5} alt="Community banner" className="mx-auto" /> 
      </div>
      <button 
        className="flex items-center justify-center border-2 border-primaryColor text-primaryColor shadow-md px-8 md:px-14 py-3 md:py-5 rounded-3xl text-sm md:text-xl mt-4 transition duration-300 hover:bg-primaryColor hover:text-white"
      >
        Register
        <ArrowRight size={20} weight="bold" className="ml-2" />
      </button>
    </div>
  );
};

export default Community;
