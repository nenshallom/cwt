import Image from 'next/image'
import React from 'react'
import { BsPlayFill } from 'react-icons/bs'

type Props = {
    label: string
}
function Header({ data }: { data?: Props[] }) {

    return (
        <div className='w-full fixed  z-50'>
            <div className=' container  mx-auto py-7 px-5 sm:px-16 md:px-0'>
                <div className="flex justify-between items-center">
                    <Image
                        src={"/4.svg"}
                        width={100}
                        height={100}
                        alt='Logo'
                        className='w-12 h-12 text-white bg-white'
                    />

                    <div className="flex items-center">
                        We Provide <span className='text-[#F57C00] mx-3'>IT Solutions & Services</span> For Enterprise
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header