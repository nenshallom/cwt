import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight, BsStar, BsStarFill } from 'react-icons/bs'

type Props = {}

const New = (props: Props) => {
  return (
    <div className='relative py-10'>
        <Image
                    src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
                    className='w-[150px] lg:w-auto top-0   hidden lg:right-[30%] lg:block absolute'
                    alt='Decorative Element' width={500} height={500}
        />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0'>
                        <div className='lg:flex items-end justify-between flex-wrap'>
                                <div>
                                        <div className='flex items-center gap-3 mb-5'>
                                            <div className='bg-[#92519c] w-[7px] h-[7px] rounded-full'></div>
                                            <h2 className='font-syne text-[16px]'>Our Latest News</h2>
                                        </div>
                                        <h2 className='font-syne text-[29px] lg:text-[42px] text-[#121820] '>Latest Thinking</h2>
                                    </div>
                                    <div className='flex items-center gap-5 mt-5 lg:mt-0'>
                                        <div className='flex items-center gap-3'>
                                            <BsArrowLeft size={20} color='#121820'/>
                                            <p className='font-syne'>Prev</p>
                                        </div>
                                        <div className='flex items-center gap-3'>
                                            <p className='font-syne'>Next</p>
                                            <BsArrowRight size={20}/>
                                        </div>
                            </div>
                        </div>

                        <div className='carousel carousel-center px-0 p-4 space-x-4 lg:space-x-10 rounded-box w-full mt-20 '>
                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[45.50%] group'>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                        <Image width={500} height={500} src='/ecom.jpg' alt='' className='rounded-xl w-full h-[350px] lg:h-[400px] object-cover'/>
                                        <div className='lg:flex justify-between gap-10 my-5'>
                                            <div className='lg:w-[60%]'>
                                                <h4 className='font-syne text-[22px]'>Student E-Commerce Community</h4>
                                                <div className='font-sora text-[15px] my-2'>by: <span className='text-[#92519c]'>Jane Meldrun</span></div>
                                            </div>
                                            <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[500px]'>Connect with fellow students on our upcoming e-commerce platform. Buy, sell, and exchange goods tailored for student life.</p>
                                        </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.95%]'>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <div className='hidden lg:block'>
                                        <h4 className='font-syne text-[22px]'>Student Collaboration Platform</h4>
                                        <p className='font-sora text-[18px] lg:text-[15px] text-[#12182066] my-5'>Collaborate seamlessly with peers on projects and assignments. Share ideas and enhance your learning experience with our Student Collaboration Platform</p>
                                    </div>
                                    <Image width={500} height={500} src='/collab.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <div className='lg:hidden'>
                                        <h4 className='font-syne text-[22px] my-5'>Student Collaboration Platform</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066]'>Collaborate seamlessly with peers on projects and assignments. Share ideas and enhance your learning experience with our Student Collaboration Platform</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.95%]'>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <Image width={500} height={500} src='/6.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <h4 className='font-syne text-[22px] my-5'>Student Tech & Survey Blog</h4>
                                    <p className='font-sora lg:text-[15px] text-[#12182066]'>Explore the intersection of technology and student life with our Student Tech & Survey Blog. Stay updated on the latest tech trends and insightful surveys.</p>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[45.50%]'>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                        <Image width={500} height={500} src='/hotel.jpg' alt='' className='rounded-xl w-full h-[350px] lg:h-[400px] object-cover'/>
                                        <div className='lg:flex justify-between gap-10 my-5'>
                                            <div className='lg:w-[60%]'>
                                                <h4 className='font-syne text-[22px]'>Hotel Booking Platform</h4>
                                                <div className='font-sora text-[15px]  my-3'>by: <span className='text-[#92519c]'>Jane Meldrun</span></div>
                                            </div>
                                            <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[500px]'>Plan your stay effortlessly with our upcoming hotel booking platform. Find the perfect accommodation for your next trip with ease.</p>
                                        </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.50%] '>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <div className='hidden lg:block'>
                                        <h4 className='font-syne text-[22px] '>Automated Customer Service Solutions</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066] my-5'> Implement AI-powered chatbots for efficient customer support, reducing response times and enhancing customer experience.</p>
                                    </div>
                                    <Image width={500} height={500} src='/customer.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <div className='lg:hidden'>
                                        <h4 className='font-syne text-[22px] my-5'>Automated Customer Service Solutions</h4>
                                        <p className='font-sora lg:text-[15px] text-[#12182066]'>Implement AI-powered chatbots for efficient customer support, reducing response times and enhancing customer experience.</p>
                                    </div>
                                </Link>
                            </div>

                            <div className='carousel-item w-[99%] md:w-[48.50%] lg:w-[23.50%]'>
                                <Link href='/coming-soon' className='overflow-hidden tran_filter ease-in-out duration-300'>
                                    <Image width={500} height={500} src='/chain.jpg' alt='' className='rounded-xl w-full h-[350px] object-cover'/>
                                    <h4 className='font-syne text-[22px] my-5'>Supply Chain Management System with IoT Integration</h4>
                                    <p className='font-sora lg:text-[15px] text-[#12182066]'>Integrate IoT devices into a supply chain management system to track inventory, monitor shipments, and optimize logistics for improved efficiency and cost reduction.</p>
                                </Link>
                            </div>
                        </div>
                        <Link href='/' className='flex gap-3 items-center font-syne font mt-10 group'>View More Insight<div className='bg-[#92519c] p-3 rounded-full relative group-hover:left-3'><BsArrowRight size={20} color='white'/></div></Link>
        </div>
    </div>
  )
}

export default New