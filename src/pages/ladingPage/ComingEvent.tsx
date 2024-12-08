import { ArrowRight } from "@phosphor-icons/react"
import logo from '../../assets/img/WhatsApp Image 2024-07-02 at 19.41.31_2c96fd5a 1.png'
const ComingEvent = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-start text-white px-[5%] bg-[url('/src/assets/img/coming_event.png')] bg-no-repeat bg-cover  py-[10rem]">
        <div className="space-y-4">
    <h1 className="text-4xl font-bold">Founders Friday is coming to</h1>
    <h1 className="text-6xl font-extrabold text-primaryColor">Kaduna</h1>
        <p className="text-lg font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac rutrum felis. Nulla nibh lorem, facilisis vel est at, vehicula dignissim lacus. Cras sagittis imperdiet dolor, eget accumsan leo suscipit id. Maecenas ut ante quis quam lobortis consequat eu id turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
        <button className="flex  text-primaryColor justify-center items-center border-primaryColor shadow-md border-2 px-14 py-5 rounded-3xl text-sm md:text-xl mt-4 transition duration-300">Register
        <ArrowRight  size={20} weight="bold" />
        </button>
        </div>
        <img src={logo} alt=""  className="mt-8 md:mt-0 md:w-[30rem] w-full max-w-xs object-contain" />
    </div>
  )
}

export default ComingEvent
