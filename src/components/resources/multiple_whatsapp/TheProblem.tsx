import { ProblemData } from '@/constants/ProblemData'
import React from 'react'

const TheProblem = () => {
    return (
        <section className='bg-[#EFF6FF] py-16'>
            <div className='container'>
                <h1 className='text-[#111827] text-4xl font-semibold text-center font-[Poppins] capitalize'>The Problem</h1>
                <p className='text-[#4B5563] text-xl font-normal mt-4 capitalize text-center leading-[150%]'>You&apos;re juggling separate WhatsApp subscriptions—and it&apos;s costing you growth, <br /> efficiency, and your brand every day.</p>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 gap-4 mt-12 justify-center'>
                    {ProblemData.map((item,index) => (
                        <div 
                            key={index} 
                            className='w-[284px] h-[268px] bg-[#FFFFFF] rounded-2xl flex flex-col items-center p-8'
                            style={{boxShadow: '0px 1px 2px 0px #0000000D'}}
                        >
                            <item.icon />
                            <h2 className='text-[#111827] text-xl font-semibold mt-6'>{item.text}</h2>
                            <p className='text-[#4B5563] text-base font-normal font-[Inter] text-center mt-3'>
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TheProblem
