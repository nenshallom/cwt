'use client'
import React, { useState } from 'react'
import { sendMessage } from './actions/contact'
import { toast } from 'react-toastify';

type Props = {}

const Contact = (props: Props) => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const SubmitForm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        const formData = {
            name,
            message,
            email,
            phone,
        }

        if(!name || !message || !email || !phone)
        {
            toast.error('Please fill in all required fields');
            return;
        }

        setLoading(true);

        try {
            const res = await sendMessage(formData)
            const data = await res.json()

            setLoading(false);

            if (res.ok) {
                setName('');
                setMessage('');
                setEmail('');
                setPhone('');
                toast.success('Message Sent')
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='relative  bg-[#121820] py-10'>
                <div className='xl:w-[75%]  lg:w-[100%] md:w-[90%] mx-auto py-16 px-5 sm:px-16 md:px-0 '>
                    <div className='lg:flex items-end justify-between'>
                            <div className='overflow-hidden lg:w-[40%]'>
                                    <h2 className='font-syne text-[29px] lg:text-[42px] text-white '>Contact <span className='text-[#92519c]'>Us</span></h2>
                            </div>
                    </div>


                    <div className='mt-20'>
                        <div className='lg:flex justify-between'>
                            <div className='lg:w-[48%] space-y-8'>
                                    <div className='w-full'>
                                            <label htmlFor='Name' className='text-white font-syne text-[15px]'>Name <span className='text-[#92519c]'>Required</span></label>
                                            <div>
                                  <input
                                      onChange={e => setName(e.target.value)}
                                      value={name}
                                      type='text'
                                      className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora' />
                                            </div>
                                    </div>
                                    <div className='w-full'>
                              <label htmlFor='email '
                                  className='text-white font-syne text-[15px]'>Email <span className='text-[#92519c]'>Required</span></label>
                                            <div>
                                  <input type='email'
                                      value={email}
                                      onChange={e => setEmail(e.target.value)}
                                      className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora' />
                                            </div>
                                    </div>
                                    <div className='w-full'>
                                            <label htmlFor='phone' className='text-white font-syne text-[15px]'>Phone <span className='text-[#FFFFFF80]'>Optional</span></label>
                                            <div>
                                  <input type='text'
                                      onChange={e => setPhone(e.target.value)}
                                      value={phone}
                                      className='w-full py-5 outline-none form_btm bg-transparent text-white font-sora' />
                                            </div>
                                    </div>
                            </div>

                            <div className='lg:w-[48%]  relative lg:h-full mt-8 lg:mt-0'>
                                <div className=''>
                                    <label htmlFor='message' className='text-white font-syne text-[15px]'>Message <span className='text-[#92519c]'>Required</span></label>
                                    <div className='w-full h-[200px]'>
                                  <textarea value={message} onChange={e => setMessage(e.target.value)} className='w-full h-full outline-none form_btm bg-transparent text-white font-sora' />
                                    </div>
                                </div>
                                <div className='mt-10'>
                                        <p className='mb-5 text-[#FFFFFF80] font-sora text-[13px]'>
                                            We will process your personal information in accordance with our Privacy Policy.
                                        </p>
                                    <div className='flex items-center gap-5'>
                                        <input type='checkbox' className='p-3 bg-[#92519c]'/>
                                        <p className='text-white font-sora text-[13px]'>I would like to be contacted with news and updates about your <span className='text-[#92519c]'>events and services</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                  <button onClick={SubmitForm} className='bg-[#92519c] text-white w-full rounded-full py-5 mt-10 font-sora text-[16px] font-bold'>
                    {loading ? 'Sending....' : 'Send Message'}
                  </button>
                    </div>
                </div>
    </div>
  )
}

export default Contact