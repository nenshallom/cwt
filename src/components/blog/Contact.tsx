import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div>
        <div className='flex items-center gap-5 mt-10'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>Contact us</h5>
        </div>

        <p className="font-sora text-[15px] text-[#12182066] my-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>

        <Link href='' className='flex items-center gap-5  font-sora text-[16px]'>
            Send
            <div className='bg-[#92519c] p-2 rounded-full w-fit'><BsArrowRight size={15} color='white'/></div>
        </Link>
    </div>
  )
}

export default Contact