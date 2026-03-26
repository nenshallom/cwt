import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

interface TrainingsProps {
    image: string;
    title1: string;
    title2: string;
    stars: string;
    header: string;
    duration: string;
    tutor: string;
}
const Trainings: React.FC<TrainingsProps> = ({image, title1, title2, stars, header, duration, tutor}) => {
    return (
        <div className='carousel-item w-[99%] md:w-[48.80%] lg:w-[30.50%]'>
                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                    <Image width={500} height={500} src={image} className='w-full rounded-xl  h-[400px] lg:h-[350px] object-cover' alt=''/>
                    <div className='flex  items-center justify-between gap-5 py-5 '>
                        <div className='flex items-center justify-between w-full relative top-1'>
                            <ul className='flex items-center gap-3'>
                                <li className='font-sora text-[15px]'>{title1}</li>
                                <li className='font-sora text-[15px]'>{title2}</li>
                            </ul>
                            <p className='font-sora text-[15px]'>{stars}</p>
                        </div>
                                            
                        <div className='flex items-center gap-2'>
                            <BsStarFill size={18} color='#92519c'/>
                            <BsStarFill size={18} color='#92519c'/>
                            <BsStarFill size={18} color='#92519c'/>
                            <BsStarFill size={18} color='#92519c'/>
                            <BsStarFill size={18} className='text-zinc-300'/>
                        </div>
                    </div>
                    <div className='mx-auto flex gap-2  '>
                            <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                            <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                    </div>

                    <h4 className='text-[21px] font-syne mt-5'>{header}</h4>
                    <div className='flex justify-between'>
                        <p className='text-[14px] font-sora text-[#12182066] my-5'><span className='text-black text-[16px]'>Duration:</span> {duration}</p>
                        <p className='text-[14px] font-sora text-[#12182066] my-5'><span className='text-black text-[16px]'>Tutor:</span> {tutor}</p>
                    </div>
                </Link>
            </div>
    )
}

const Training = () => {
  return (
    <div className='deep_bg relative py-10'>
                <Image
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[40%] lg:block absolute'
                    alt='Decorative Element' width={500} height={500}
                />
            <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
                        <div className='lg:flex items-end justify-between flex-wrap'>
                            <div className='overflow-hidden'>
                                    <div className='flex items-center gap-3 mb-5'>
                                        <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                                        <h2 className='font-syne text-[16px]'>Unlimited Training</h2>
                                    </div>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Latest Courses</h2>
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

                        <div className="carousel carousel-center px-0 p-4 space-x-4 lg:space-x-10 rounded-box w-full mt-20  ">
                            <Trainings image='/frontend.jpg' title1='Development' title2='Team' stars={'4.5'} header='Front-End Web Development' duration='3 Months' tutor={'Abdulrahman Sadiq'}/>
                            <Trainings image='/backend.jpg' title1='Development' title2='Team' stars={'4.5'} header='BackEnd Web Development' duration='3 Months' tutor={'Joshua Ogbole'}/>
                            <Trainings image='/uiux.jpg' title1='Design' title2='Team' stars={'4.5'} header='UI/UX Design' duration='3 Months' tutor={'Daniel Elijah'}/>
                            <Trainings image='/funder.jpg' title1='Technical' title2='Team' stars={'4.5'} header='Computer Fundermentals' duration='3 Months' tutor={'Ogala Muctar'}/>
                        </div>
                </div>
    </div>
  )
}

export default Training