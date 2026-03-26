import Image from 'next/image'
import React from 'react'

type Props = {}

const RecentPost = (props: Props) => {
  return (
    <div className='my-10'>
        <div className='flex items-center gap-5 mb-10'>
            <div className='w-[10px] h-[10px] rounded-full bg-[#92519c]'></div>
            <h5 className='font-syne text-[18px] text-[#121820]'>Recent Posts</h5>
        </div>

        <div className='space-y-5'>
                    <div className='flex items-center gap-3'>
                        <Image alt='' width={500} height={500} src='/15.jpg' className='w-16 h-16 rounded-full tran_filter'/>
                        <h6 className='font-syne text-[16px]'>The World’s Fastest 2 Qubit Qate</h6>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image alt='' width={500} height={500} src='/4.jpg' className='w-16 h-16 rounded-full tran_filter'/>
                        <h6 className='font-syne text-[16px]'>Build Your Money Machine, Take Control</h6>
                    </div>
                    <div className='flex items-center gap-3'>
                        <Image alt='' width={500} height={500} src='/6.jpg' className='w-16 h-16 rounded-full tran_filter'/>
                        <h6 className='font-syne text-[16px]'>Android App For Shaving Products Drive</h6>
                    </div>
        </div>
    </div>
  )
}

export default RecentPost