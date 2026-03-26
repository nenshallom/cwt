import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const NewsLetter = (props: Props) => {
  return (
    <div>
        <div className='mx-auto flex gap-2  mt-10'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='flex items-center gap-5 my-10'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>NewsLetter</h5>
        </div>

        <div className=''>
            <div className='flex items-center justify-between py-1 border-2 rounded-full px-2'>
                <input type='text' placeholder='Your Email Address' className='py-5 px-3 w-full outline-none font-sora rounded-full'/>
                <button className='bg-[#92519c] p-5 rounded-full'><BsArrowRight size={18} color='white'/></button>
            </div>
        </div>

        <div className='mx-auto flex gap-2  mt-10'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>
    </div>
  )
}

export default NewsLetter