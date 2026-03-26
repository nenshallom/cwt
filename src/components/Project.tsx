'use client'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

interface ProjectsProps {
    image: string;
    title: string;
    author: string;
    description: string;
    link: string
}


const Projects: React.FC<ProjectsProps> = ({image, title, author, description, link}) => {
    return (
        <div className="carousel-item w-full md:w-[48.50%]  lg:w-[47.50%]">
            <a href={`${link}`} target='blank' className='overflow-hidden tran_filter ease-in-out duration-300 w-full'>
                    <Image src={image} className="w-full object-cover rounded-xl h-[400px] lg:h-[450px]" alt='' width={500} height={500}/>
                    <div className='lg:flex justify-between gap-10 my-5'>
                        <div className='lg:w-[40%]'>
                                <h4 className='font-syne text-[22px]'>{title}</h4>
                                <div className='font-sora text-[15px] my-2'>Client: <span className='text-[#92519c]'>{author}</span></div>
                        </div>
                        <p className='font-sora lg:text-[15px] text-[#12182066] lg:w-[500px]'>{description}</p>
                    </div>
            </a>
        </div>
    )
}

const Project = () => {
    
  return (
    <div className='relative '>
        <Image
            src='https://itsulu-react.netlify.app/_next/static/media/deco-1.07790e8b.svg'
            className='w-[200px] lg:w-auto top-0   hidden lg:right-80 lg:block absolute'
            alt='Decorative Element' width={500} height={500}
          />
        <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                <div className='lg:flex items-end justify-between flex-wrap'>
                        <h2 className='font-syne text-[29px] lg:text-[45.50px]  px-5 text-[#121820]  '>Latest Projects</h2>
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

            <div className="carousel w-full space-x-5 lg:space-x-20 mt-20  ">
                <Projects link={'https://code-warriors-tech.github.io/school_website'} image='/school.jpg' title='School Website' author='School' description='Discover our comprehensive approach to enhancing the digital presence of educational institutions. From intuitive designs that engage students and parents to robust features for managing academic information, events, and resources, '/>
                <Projects link={'https://code-warriors80.github.io/gym_website/'} image='/gym.png' title='Gym & Fitness Website' author='Jane Meldrun' description='Explore our dynamic gym website projects tailored to amplify fitness brands. Our designs blend functionality and aesthetics, offering seamless membership management, class scheduling, and fitness tracking capabilities'/>
                <Projects link={'tinyurl.com/reeskitchen/'} image='/rees.jpg' title='Food Ordering Andriod App' author="Ree's Kitchen" description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, tenetur inventore praesentium eaque consectetur ullam quod architecto odit!'/>
            </div>

            <div className='flex justify-between items-center lg:mt-20 flex-wrap'>
                <Link href='/' className='hidden lg:flex gap-3 items-center font-syne text-[16px] font group'>Learn More<div className='bg-[#92519c] p-3 rounded-full relative ease-in-out duration-300 group-hover:left-3'><BsArrowRight size={20} color='white'/></div></Link>   
                <Link href='/about' className='border-2  border-[#92519c] px-10 lg:px-20 py-5 font-sora text-[16px] rounded-full font ease-in-out duration-300 hover:border-[3px]'>How We Work</Link>
            </div>
    </div>
    </div>
  )
}

export default Project