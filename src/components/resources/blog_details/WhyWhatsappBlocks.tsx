import { CommonReasons } from '@/constants/CommonReasons'
import React from 'react'

const WhyWhatsappBlocks = () => {
    return (
        <section className='container py-16'>
            <h2 className='text-[#111827] md:text-[30px] text-xl font-semibold text-center'>8 Common Reasons Why WhatsApp Blocks Accounts</h2>
            <div className='lg:mt-[55px] mt-5 flex flex-wrap gap-8 items-center justify-center'>
                {CommonReasons.map((item, index) => {
                    return (
                        <div key={index} className='lg:w-[400px] w-full h-32 bg-[#F9FAFB] rounded-[8px] p-6 flex gap-4'>
                            <div className='w-[19.59px] h-8 bg-[#EF4444] rounded-full text-[#FFFFFF] font-bold text-base flex items-center justify-center font-[Inter]'>
                                {item.number}
                            </div>
                            <div className='flex-1'>
                                <h2 className='text-[#111827] text-base font-semibold leading-[100%]'>{item.title}</h2>
                                <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-2.5'>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default WhyWhatsappBlocks
