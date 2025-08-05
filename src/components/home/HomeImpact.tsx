import { HomeImpactData } from '@/constants/HomeImpactData'
import Link from 'next/link'
import React from 'react'

const HomeImpact = () => {
    return (
        <section className='bg-[linear-gradient(90deg,_#EFF6FF_0%,_#ECFDF5_100%)] py-8'>
            <div className='container flex flex-col items-center'>
                <h1 className='text-[#000000] text-4xl font-semibold !font-Poppins text-center'>Real Impact. Real Results.</h1>
                <p className='text-[#5A5A5A] text-xl leading-[150%] mt-2 text-center'>See how businesses like yours are achieving extraordinary growth with ConnectFlow</p>

            <div className='mt-[42px] grid xl:grid-cols-4 md:grid-cols-2 gap-[14px]'>
                {HomeImpactData.map((item,index) => (
                    <div key={index} className='w-[300px] h-[290px] bg-[#FFFFFF] rounded-3xl px-6 pt-5'
                        style={{boxShadow: '1px 1px 2px 0px #00000040'}}
                    >
                        <div className='flex items-center gap-2'>
                            <item.icon />
                            <h2 className='text-[#000000] text-base font-medium !font-Inter '>{item.name}</h2>
                        </div>
                        <h3 className='text-[#6AC192] text-2xl font-semibold mt-6'>{item.percentage}</h3>
                        <p className='text-[#5A5A5A] text-base font-normal mt-3 leading-[150%]'>{item.details}</p>
                        <hr className='mt-10 mb-3 text-[#5A5A5A4D]'/>
                        <Link href='/' className='text-[#6AC192] text-base font-medium left-7'>
                            Read full story →
                        </Link>
                    </div>
                ))}
            </div>
            </div>
        </section>
    )
}

export default HomeImpact
