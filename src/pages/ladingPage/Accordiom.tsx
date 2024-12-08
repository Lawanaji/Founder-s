import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react"

interface Props {
    title: string;
    content: string;
    className?: string;
}

const Accordiom = ({title, content, className}: Props) => {
    const [show, setShow] = useState(false);

  return (
    <div className={`w-full ${className ?? ""}`}>
        <div tabIndex={0} onBlur={() => setTimeout(() => setShow(false), 200)} onClick={() => setShow(!show)} className="flex justify-start items-start gap-4 cursor-pointer select-none">
            <h2>{title}</h2>
            <CaretDown size={24} className={`min-w-[25px] ${show ? "-rotate-180" : ""} transition-all`} />
        </div>
        <div className={`w-full ${show ? "max-h-[1000px] mt-2" : "max-h-0"} transition-all duration-300 overflow-hidden`}>{content}</div>
    </div>
  )
}

export default Accordiom