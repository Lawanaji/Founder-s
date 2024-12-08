import { ArrowRight } from "@phosphor-icons/react"
import logo from '../../assets/img/WhatsApp Image 2024-07-02 at 19.41.31_2c96fd5a 1.png'
import { TextLoop } from "easy-react-text-loop"
const ComingEvent = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-start text-white px-[5%] bg-[url('/src/assets/img/coming_event.png')] bg-no-repeat bg-cover  py-[10rem] mb-10">
        <div className=" space-y-3 md:space-y-[5rem]">
    <h1 className="text-4xl font-bold mb-5">Founders Friday is coming to
      <br/>
    <TextLoop>
      <h1 className="text-6xl font-extrabold text-primaryColor mb-10">ABUJA</h1>
      <h1 className="text-6xl font-extrabold text-primaryColor mb-10">KANO</h1>
    </TextLoop>
    </h1>
        <p className="py-10 md:py-0 md:text-lg font-extralight text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        <button className="flex  text-primaryColor justify-center items-center border-primaryColor shadow-md border-2 px-14 py-5 rounded-3xl text-sm md:text-xl mt-4 transition duration-300">Register
        <ArrowRight  size={20} weight="bold" />
        </button>
        </div>
        <img src={logo} alt=""  className="mt-8 md:mt-0 md:w-[50rem] w-full max-w-xs object-contain" />
    </div>
  )
}

export default ComingEvent
