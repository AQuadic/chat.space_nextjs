import { NotificationCapabilitiesData } from '@/constants/NotificationCapabilitiesData'
import React from 'react'

const NotificationCapabilities = () => {
    return (
        <section className='bg-[#EFF6FF] py-16'>
            <div className='container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
                {NotificationCapabilitiesData.map((item,index) => (
                <div key={index} className='xl:w-[346px] w-full h-[246px] bg-[#FFFFFF] border border-[#DBEAFE] rounded-[12px] flex flex-col items-center py-[33px]'>
                    <item.icon />
                    <h1 className='text-[#111827] text-xl font-semibold mt-6'>{item.title}</h1>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-4 text-center'>{item.description}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default NotificationCapabilities
