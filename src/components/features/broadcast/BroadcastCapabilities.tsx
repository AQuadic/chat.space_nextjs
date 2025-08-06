import { BroadcastCapabilitiesData } from '@/constants/BroadcastCapabilitiesData'
import React from 'react'

const BroadcastCapabilities = () => {
    return (
        <section className='container mb-[134px] mt-10'>
            <div className='w-full border-2 border-[#BFDBFE] rounded-[16px] grid lg:grid-cols-3 gap-4 p-[34px]'>
                {BroadcastCapabilitiesData.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <item.icon />
                        <h2 className='text-[#111827] text-xl font-semibold mt-2.5'>{item.title}</h2>
                        <p className='text-[#4B5563] text-base font-normal leading-[150%] text-center md:w-[320px]'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default BroadcastCapabilities
