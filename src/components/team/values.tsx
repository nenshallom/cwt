import Image from 'next/image';
import React from 'react'

interface OurValuesProps {
    index: string;
    title: string;
    description: string;
  }

const OurValues: React.FC<OurValuesProps> = ({index, title, description}) => (
    <div className='text-center space-y-5'>
        <div className='relative w-fit mx-auto'>
                <Image width={40} height={40} src='5.svg' className='relative z-10' alt='Main Image' />
                <div className='bg-[#92519c] w-[20px] h-[20px] rounded-full absolute -right-1 top-6 z-0'></div>
        </div>
        <h5 className="text-[18px] font-syne"><span className="text-[#92519c]">{index}.</span>&nbsp; {title}</h5>
        <p className="text-[15px] font-sora text-[#12182066]">{description}</p>
    </div>
)

const Values = () => {
  return (
    <div className='py-10'>
        <div className='mx-auto flex gap-2  my-20'>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
                <div className='w-full h-[2px] bg-zinc-200 rounded-full'></div>
                <div className='w-[30px] h-[2px] bg-[#92519c]  rounded-full'></div>
        </div>

        <div className='lg:flex justify-between space-y-5'>
            <h2 className='text-[32px] lg:text-[42px] font-syne text-center'>Values that <span className="text-[#92519c]">Lead Us</span></h2>
            <p className='text-[15px] text-[#12182066] font-sora lg:w-[35%] text-center lg:text-left'>These values are the foundation of our culture and guide our decisions and actions every day, helping us to deliver exceptional results for our clients.</p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-20 gap-16'>
            <OurValues index={'01'} title={'Productivity'} description={'We prioritize productivity, ensuring that we deliver high-quality work efficiently and effectively.'}/>
            <OurValues index={'02'} title={'Transparency'} description={'Transparency is key to our approach. We believe in open and honest communication, both internally and with our clients, to build trust and foster strong relationships.'}/>
            <OurValues index={'03'} title={'Personality'} description={' We celebrate the unique personalities and talents of our team members, recognizing that diversity enhances our creativity and innovation.'}/>
            <OurValues index={'04'} title={'Volition'} description={'We are driven by a strong sense of purpose and determination. We approach challenges with a proactive mindset, taking initiative to achieve our goals.'}/>
        </div>
    </div>
  )
}

export default Values