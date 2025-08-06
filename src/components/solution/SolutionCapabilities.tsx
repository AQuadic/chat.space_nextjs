import { SolutionCapabilitiesData } from '@/constants/SoluionCapabilitiesData'
import Image from 'next/image'
import React from 'react'

const SolutionCapabilities = () => {
    return (
        <section className='bg-[#B9EBFFCC] md:p-20 p-4'>
            <div className='container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {SolutionCapabilitiesData.map((item,index) => (
                <div key={index} className='lg:w-[384px] w-full lg:h-[212px] h-full bg-[#FFFFFF] rounded-2xl p-8'
                    style={{boxShadow: '0px 1px 2px 0px #0000000D'}}
                    >
                    <Image src={item.icon} alt='icon' />
                    <h1 className='text-[#111827] text-xl font-bold mt-[14px]'>{item.title}</h1>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-1.5'>{item.description}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default SolutionCapabilities
