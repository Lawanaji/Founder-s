// import line from '../../assets/img/Line 1.png'
import aboutImage from "../../assets/img/who_we_are.png"
import { ArrowRight } from '@phosphor-icons/react';
import dollarBag from '../../assets/img/Money Bag.svg'
const WhoWeAre = () => {
  return (
    <div className='w-full min-h-[400px] grid grid-cols-1 md:grid-cols-2 gap-10 -mt-4 px-[5%] mb-[5rem]'>
        <div>
          <img src={aboutImage} alt="Image" className='w-full h-auto object-cover' />
        </div>

        <div className='h-max grid grid-cols-6 gap-[-8px]'>
          <div className="bg-[url('/src/assets/img/line1.png')] bg-no-repeat bg-center bg-contain my-6 relative md:-right-4 xl:-right-10">
          </div>

          <div className='col-span-5 space-y-[1.6rem] md:px-5  md:text-left lg:text-left'>
              <h2 className='text-2xl lg:text-6xl font-extrabold'>Who We Are!</h2>
              <p className='text-lg lg:text-xl'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi sed dignissimos maiores vero autem totam? Adipisci minus nemo assumenda quos tempora dignissimos mollitia, molestias obcaecati sed libero dolorum maxime quibusdam?
              </p>
              <div className='flex flex-col lg:flex-row gap-5 justify-center lg:justify-start py-5'>
                <button className='flex items-center justify-center gap-2 text-lg lg:text-2xl border bg-primaryColor text-white border-primaryColor px-6 lg:px-10 rounded-3xl py-2 lg:py-3'>
                  Register 
                  <ArrowRight  size={35} weight="bold" />
                </button>
                <button className='flex items-center justify-center gap-2 text-lg lg:text-2xl border border-primaryColor px-6 lg:px-10 rounded-3xl py-2 lg:py-3'>
                  Donate 
                  <img src={dollarBag} alt="" className='w-6 lg:w-8' />
                </button>
              </div>
              <p className='z-10 font-extrabold '>
                Founder's Friday is more than just a meetup — it's a movement.
              </p>
          </div>
      </div>
  </div>
  )
}

export default WhoWeAre
