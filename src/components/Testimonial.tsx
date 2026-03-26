import Image from 'next/image';
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

interface TestimonialsProps {
    image: string;
    name: string;
    position: string;
    description: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({image, name, position ,description}) => {
    return (
    <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[30.50%]'>
        <div className='overflow-hidden'>
            <div className='flex gap-5'>
                <Image width={40} height={40} alt='' src='/11.svg' className=''/>
                <div className='flex gap-2'>
                    <BsStarFill size={18} color='#92519c'/>
                    <BsStarFill size={18} color='#92519c'/>
                    <BsStarFill size={18} color='#92519c'/>
                    <BsStarFill size={18} color='#92519c'/>
                    <BsStarFill size={18} color='#92519c'/>
                </div>
            </div>
                <p className='font-sora text-[#12182066] py-5 lg:text-[15px]'>{description}</p>
                <div className='flex items-center gap-5'>
                    <Image width={500} height={500} src={image} className='w-12 h-12 rounded-full tran_filter' alt='vhvhg'/>
                    <div>
                        <h6 className='font-sora text-[16px]'>{name}</h6>
                        <p className='text-[#12182066] font-syne text-[13px]'>{position}</p>
                    </div>
                </div>
        </div>
    </div>
    )
}

const Testimonial = () => {
  return (
    <div className='deep_bg relative py-10'>
        <Image width={500} height={500}
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[200px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element'
            />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
        <div className='lg:flex items-end justify-between flex-wrap'>
                                <div>
                                        <div className='flex items-center gap-3 mb-5'>
                                            <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                                            <h2 className='font-syne text-[16px]'>Testimonial</h2>
                                        </div>
                                        <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>What Our <span className='text-[#92519c]'>Clients</span> Say</h2>
                                    </div>
                                    <div className='flex items-center gap-5 mt-5 lg:mt-0'>
                                        <div className='flex items-center gap-3'>
                                            <BsArrowLeft size={20}/>
                                            <p className='font-syne'>Prev</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='font-syne'>Next</p>
                                            <BsArrowRight size={20}/>
                                        </div>
                            </div>
                        </div>

                        <div className='carousel carousel-center px-0 p-4 space-x-4 lg:space-x-14 rounded-box w-full mt-20'>
                                <Testimonials description='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.' image='/17.jpg' name='Tamzyn French' position='Web developer'/>
                        </div>
        </div>
    </div>
  )
}

export default Testimonial