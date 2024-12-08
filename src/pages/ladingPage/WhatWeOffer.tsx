import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

interface AccordainProps {
    title: string;
    content: string;
}

const WhatWeOffer = () => {
    const [Accordain] = useState<number>(0)
    const accordainData: AccordainProps[]=[
        {
            title: 'Monthly Meetups',
            content: 'Our cornerstone event, held on the last Friday of every month, featuring keynote speakers, panel discussions, and ample networking opportunities.'
        },
        {
            title: 'Diverse Network',
            content: 'Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.'
        },
        {
            title: 'Knowledge Sharing',
            content: 'Connect with a wide range of professionals, from early-stage founders to seasoned entrepreneurs, investors, and industry experts.'
        },
        {
            title: 'Collaboration Opportunities',
            content: 'Find potential co-founders, mentors, or partners for your next big venture.'
        },
        {
            title: 'Community Support',
            content: 'Be part of a supportive ecosystem that celebrates successes and provides guidance through challenges.'
        },
    ]

    
  return (
    <div className='py-[5rem] container'>
        <h1 className='text-center text-4xl font-semibold'>What We Offer </h1>
      
      <div className='py-10'>
        {accordainData.map((data,index)=>(
            <div key={index} className='flex justify-between items-center border-b-2 py-5 '>
            <div className='flex justify-start items-center gap-2'>
            <span className='inline-block w-[20px] h-[20px] rounded-full bg-primaryColor'></span>
            <h1 className='md:text-3xl font-bold'>{data.title}</h1>
            </div>
        <div className=' text-pretty'>
        <p className=' text-left text-sm'>{data.content}</p>
        </div>
            { Accordain ? (<Minus size={32} weight="bold" />):( <Plus size={35} weight="bold"/>) }
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhatWeOffer
