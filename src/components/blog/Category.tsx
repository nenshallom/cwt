import React from 'react'

type Props = {}

const Category = (props: Props) => {
  return (
    <div>
        <div className='mx-auto flex gap-2  my-10'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='flex items-center gap-5 mb-10'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>Categories</h5>
        </div>

        <ul className='space-y-5'>
            <li className='font-sora text-[15px]'><a href="#.">Business</a></li>
            <li className='font-sora text-[15px]'><a href="#.">Design</a></li>
            <li className='font-sora text-[15px]'><a href="#.">Development</a></li>
            <li className='font-sora text-[15px]'><a href="#.">Management</a></li>
            <li className='font-sora text-[15px]'><a href="#.">Software</a></li>
        </ul>
    </div>
  )
}

export default Category