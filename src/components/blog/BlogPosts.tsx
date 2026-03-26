import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

type Props = {}

const BlogPosts = (props: Props) => {
  return (
    <div className='lg:w-[65%] mt-16 lg:my-20 space-y-10  px-10 mb-10 '>
        <div className='w-full mx-auto mb-10 '>
            <Link href='' className='tran_filter ease-in-out duration-300'>
                <Image width={500} height={500} src='/1.jpg' alt='' className='rounded-xl w-full object-cover h-[350px] lg:h-[500px]'/>
                <div className='lg:flex justify-between my-5 gap-10'>
                    <div className='mb-5 lg:mb-0'>
                        <ul className='flex items-center gap-5 font-sora mb-5'>
                            <li className='text-[13px] text-[#12182066] '>Management</li>
                            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                            <li className='text-[13px] text-[#12182066]'>29 Oct 2023</li>
                        </ul>
                        <h4 className='font-syne text-[22px]'>Easy &amp; Most Powerful Server Platform.</h4>
                    </div>
                    <p className='lg:w-[55.10%] font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                </div>
            </Link>
        </div>

        <div className='w-full mx-auto mb-10'>
                <Link href='' className='w-full mx-auto tran_filter ease-in-out duration-300'>
                    <Image width={500} height={500} src='/12.jpg' alt='' className='rounded-xl w-full object-cover h-[350px] lg:h-[500px]'/>
                    <div className='lg:flex justify-between my-5 gap-10'>
                        <div className='mb-5 lg:mb-0'>
                            <ul className='flex items-center gap-5 font-sora mb-5'>
                                <li className='text-[13px] text-[#12182066] '>Management</li>
                                <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                                <li className='text-[13px] text-[#12182066]'>29 Oct 2023</li>
                            </ul>
                            <h4 className='font-syne text-[22px]'>Easy &amp; Most Powerful Server Platform.</h4>
                        </div>
                        <p className='lg:w-[55.10%] font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </Link>
        </div>

        <div className='w-full mx-auto mb-10'>
            <Link href='' className='tran_filter  ease-in-out duration-300'>
                <Image width={500} height={500} src='/3.jpg' alt='' className='rounded-xl w-full object-cover h-[350px] lg:h-[500px]'/>
                <div className='lg:flex justify-between my-5 gap-10'>
                    <div className='mb-5 lg:mb-0'>
                        <ul className='flex items-center gap-5 font-sora mb-5'>
                            <li className='text-[13px] text-[#12182066] '>Management</li>
                            <li className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></li>
                            <li className='text-[13px] text-[#12182066]'>29 Oct 2023</li>
                        </ul>
                        <h4 className='font-syne text-[22px]'>Easy &amp; Most Powerful Server Platform.</h4>
                    </div>
                    <p className='lg:w-[55.10%] font-sora text-[15px] text-[#12182066]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tempor incididunt dolor sit amet, consectetur adipisicing.</p>
                </div>
            </Link>
        </div>

        <div className='mx-auto flex gap-2  py-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='flex justify-between items-center gap-5 mt-5 lg:mt-0'>
                            <div className='lg:flex items-center gap-3 hidden'>
                                <BsArrowLeft size={20}/>
                                <p className='font-syne'>Prev</p>
                            </div>
                            <ul className='flex items-center gap-5 mx-auto'>
                                <li className='font-sora text-[15px] bg-[#92519c] w-10 h-10 rounded-full  flex items-center justify-center text-white'><a href=''>1</a></li>
                                <li className='font-sora text-[15px]  rounded-full  flex items-center justify-center text-black'><a href=''>2</a></li>
                                <li className='font-sora text-[15px]   rounded-full  flex items-center justify-center text-black'><a href=''>3</a></li>
                            </ul>
                            <div className='hidden lg:flex items-center gap-3'>
                                <p className='font-syne'>Next</p>
                                <BsArrowRight size={20}/>
                            </div>
        </div>
    </div>
  )
}

export default BlogPosts