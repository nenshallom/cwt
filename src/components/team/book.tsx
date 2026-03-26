import Image from 'next/image'
import React from 'react'

type Props = {}

const Book = (props: Props) => {
  return (
    <div className='relative  bg-[#121820]'>
        <Image alt='' width={500} height={500} src='https://itsulu-react.netlify.app/_next/static/media/deco-2.8cba2eb2.svg' className='w-[220px] top-0 left-[200px] hidden lg:block  absolute'/>
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
            <div className='text-center text-white space-y-10'>
                <div className='relative w-fit mx-auto'>
                        <Image src='/6l.svg' className='relative z-10' alt='Main Image' width={40} height={40}/>
                        <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
                </div>
                <p className="text-[15px] font-sora">Leadership Team</p>
                <h2 className="text-[32px] lg:text-[42px] font-syne">Let’s <span className="text-[#92519c]">Open the World</span> of IT to You</h2>
                <p className="text-[15px] font-sora text-[#FFFFFF80] mb-5">Discover a new world of possibilities with our IT solutions. We offer innovative and <br /> cutting-edge technology services to help you unlock your full potential in the digital landscape</p>
                <div className='py-10'>
                    <a href="/contact" className="text-[16px] px-[60px] py-5 rounded-full font-sora border-2 border-[#92519c] font"><span>Book an Appointment</span></a>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Book