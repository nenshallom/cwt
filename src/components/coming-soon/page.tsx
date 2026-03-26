import React from 'react'
import Image from 'next/image'
import { BiArrowToRight } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'

function page() {
    return (
        <div className='w-full text-white font-syne'>
            <Image width={500} height={500} src='/aboutImg.jpg' alt='' className='w-full h-screen absolute z-0'/>
            <div className="h-screen bg-[#121820CC] flex items-center relative z-10 px-5">
                <div className='grid lg:grid-cols-2 items-center  xl:w-[75%] md:w-[90%] mx-auto space-y-5 gap-10'>
                    <div>
                        <h1 className='text-[42px] lg:text-[60px] font-syne mb-5'>Coming <span className="text-[#92519c]">Soon</span></h1>
                        <p className='text-[16px] text-[#FFFFFF80] font-sora'>We are working on our website</p>
                    </div>

                    <div className='space-y-10 lg:space-y-5 lg:w-[85%]'>
                        <div className='grid lg:grid-cols-2'>
                            <h4 className="font-syne text-[22px] my-2">Join The <span className="text-[#92519c]">Tech</span><br /> Experience</h4>
                            <p className=" text-[15px] text-[#FFFFFF80] font-sora">The Page you have requested is being worked on and will be available to you soon. thank you</p>
                        </div>
                        <div className='w-full bg-white flex justify-between rounded-full p-1'>
                            <input type="text" placeholder="Your email address" className=' text-[#121820]  rounded-full px-10 outline-none w-[80%] py-5' />
                            <button type="submit" className="bg-[#92519c]   rounded-full  py-5 px-10 text-white">Subscribe</button>
                        </div>
                        <a className="flex gap-2 items-center mt-10" href="/contact">
                                <span>Contact Us</span>
                                <div className='bg-[#92519c] rounded-full  p-2'>
                                    <FaArrowRight size={12}/>
                                </div>                
                        </a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default page