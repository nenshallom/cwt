import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const Plans = (props: Props) => {
  return (
    <div className='relative w-full overflow-hidden'>
        <Image width={500} height={500} alt='' src='/7.jpg' className='absolute w-full h-full top-0 left-0 object-cover z-0'/>
        <div className='relative text-center py-40 z-10 bg-[#121820CC] '>
                <Image width={500} height={500} alt='' src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] top-0 left-[200px] hidden lg:block  absolute'/>
                <span className='font-syne text-[16px] text-[#FFFFFF80] flex items-center justify-center gap-5'><div className='bg-[#F57C00] w-[7px] h-[7px] rounded-full'></div> Our Services and Solutions </span>
                <h2 className='font-syne text-[38px] lg:text-[60px] text-white font-bold py-10 px-10'>Compare <span className='text-[#F57C00]'>ITSulu</span> Plans</h2>
                <Link className='font-syne text-[16px] flex items-center justify-start gap-5 group text-white w-fit mx-auto' href='/'>Learn More <div className='bg-[#F57C00] p-3 rounded-full relative group-hover:ml-5 ease-in-out duration-300'><BsArrowRight size={15} color='white' className='ease-in-out duration-300'/></div></Link>
        </div>
    </div>
  )
}

export default Plans