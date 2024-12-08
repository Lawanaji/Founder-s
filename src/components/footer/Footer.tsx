import buttonArrow from '../../assets/img/arrow.svg';
import footerLogo from '../../assets/img/footer_logo.png';
import { FacebookLogo, InstagramLogo, XLogo } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <div className="py-[5rem]">
      <div className="border-t border-[#75687E] space-y-5 px-[5%]">
   <img src={footerLogo} alt="footer_logo" className="w-40" />

        <div className="flex justify-center items-center h-[50vh]">
          <div className="text-center">
            <h1 className="text-xl md:text-2xl lg:text-5xl font-bold mb-4">
              Want To Be A Part Of Abuja’s Biggest Tech Community?
            </h1>
            <div className="flex justify-center">
              <button className="flex justify-center items-center text-primaryColor border-primaryColor border-2 px-6 py-3 rounded-3xl text-sm md:text-base mt-4 transition duration-300">
                Register For Our Next Event
                <img src={buttonArrow} alt="" className="w-10 ml-2" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t py-3 border-[#B86DFF]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ul className="flex gap-2">
              <span className="flex justify-center items-center bg-primaryColor w-[2.5rem] h-[2.5rem] rounded-full">
                <FacebookLogo size={25} color="white" />
              </span>
              <span className="flex justify-center items-center bg-primaryColor w-[2.5rem] h-[2.5rem] rounded-full">
                <InstagramLogo size={25} color="white" />
              </span>
              <span className="flex flex-col md:flex-row justify-center items-center bg-primaryColor w-[2.5rem] h-[2.5rem] rounded-full">
                <XLogo size={25} color="white" />
              </span>
            </ul>

            {/* Navigation Links */}
            <ul className=" flex gap-6">
              <li>Home</li>
              <li>About</li>
              <li>Gallery</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <p className='text-center'>  Powered by BELSOFT SYSTEMS LTD</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
