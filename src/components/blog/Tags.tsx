import React from 'react'

type Props = {}

const Tags = (props: Props) => {
  return (
    <div>
        <div className='mx-auto flex gap-2  my-10'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='flex items-center gap-5 mb-10'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>Tags</h5>
        </div>

        <ul className='flex items-center gap-5 flex-wrap'>
            <li className='p-2 rounded-full font-sora text-[12px]'><a href="#.">Business</a></li>
            <li className='p-2 rounded-full font-sora text-[12px]'><a href="#.">Design</a></li>
            <li className='p-2 rounded-full font-sora text-[12px]'><a href="#.">General</a></li>
            <li className='p-2 rounded-full font-sora text-[12px]'><a href="#.">Development</a></li>
            <li className='p-2 rounded-full font-sora text-[12px]'><a href="#.">Learning</a></li>
        </ul>
    </div>
  )
}

export default Tags