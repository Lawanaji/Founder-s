import heroimage from '../../assets/img/hero_image.png';
import buttonArrow from '../../assets/img/arrow.svg'
import collaboratorImage1 from '../../assets/img/Ellipse 1.png'
import collaboratorImage2 from '../../assets/img/Ellipse 2.png'
import collaboratorImage3 from '../../assets/img/Ellipse 3.png'
import collaboratorImage4 from '../../assets/img/Ellipse 4.png'
import collaboratorImage5 from '../../assets/img/Ellipse 5.png'
import  ArrowUpRight  from '../../assets/img/BoxArrowUpRight.svg';
const HeroSection = () => {
  const images = [
    collaboratorImage1,collaboratorImage2,collaboratorImage3,collaboratorImage4,collaboratorImage5
  ]
  return (
    <div style={{backgroundPosition: "80%"}} className="min-h-[500px] grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-10 md:gap-0 md:bg-[url('/src/assets/img/line.svg')] bg-no-repeat bg-contain py-14 px-[5%] -mt-4">
      <div className="z-10 py-10 space-y-5">
        <p className="font-extrabold text-gray-700">Join our premier monthly meetup for startup founders and tech visionaries</p>
        <h1 className="md:whitespace-nowrap text-3xl md:text-[2.6rem] font-bold text-textColor">Connect, Collaborate, Innovate!</h1>
        <p className="text-sm md:text-base text-gray-600">Every last Friday of the month, we bring together the brightest minds in our local tech ecosystem. Whether you're a seasoned entrepreneur or just starting your journey, Founder's Friday is your launchpad for new ideas, valuable connections, and game-changing opportunities.</p>
        <button className="flex justify-center items-center border-primaryColor border px-20 py-3 rounded-3xl text-sm md:text-base mt-4 transition duration-300">Register For Our Next Event
          <img src={buttonArrow} alt="" className='w-10'/>
        </button>
        <p className="text-sm md:text-base  text-textColor">Join Us for our next meetup on the 26th of July 2024</p>
       <div className='flex gap-5'>
       {images.map((image)=>(
          <div key={image} className='flex justify-center items-center gap-3'><img src={image} alt="" /></div>
        ))}
       </div>
        <p className='flex gap-2'>Become a collaborator today 
          <img src={ArrowUpRight} alt="" />
        </p>
      </div>
   
      <img src={heroimage} alt="Tech Meetup" className="w-full h-auto object-cover" />
    </div>
  );
};

export default HeroSection;
