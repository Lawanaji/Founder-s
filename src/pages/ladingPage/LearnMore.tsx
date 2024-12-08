import { ArrowRight } from "@phosphor-icons/react"
import line from '../../assets/img/founder_Event.png'
const LearnMore = () => {
  return (
    <div >
    <div style={{backgroundPosition: "90%"}} className="min-h-[500px] flex flex-col md:flex-row  justify-start items-start gap-10 md:gap-0 md:bg-[url('/src/assets/img/line3.svg')] bg-no-repeat bg-cover py-[5rem] md:py-[20rem] px-[5%] ">

      <div className='z-10 space-y-4 md:space-y-8 w-full md:w-[50%]' >
        <h1 className="text-xl md:text-left text-center font-bold text-primaryColor">Founders Friday</h1>
        <h1 className="text-xl md:text-left text-center font-extrabold md:text-5xl">What Happen At Founders Friday</h1>
        <p className="text-left md:text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>

        <button className="bg-primaryColor flex justify-center items-center gap-4 py-3 px-4 rounded-lg text-white">Learn More   <ArrowRight  size={20} weight="bold" /></button>
      </div>
      <img src={line} alt="" className=" md:w-[35%] h-auto object-cover" />
    </div>
    <h1 className="text-2xl font-bold text-textColor px-[5%]">Sponsor The Next Friday</h1>
    </div>
  )
}

export default LearnMore
