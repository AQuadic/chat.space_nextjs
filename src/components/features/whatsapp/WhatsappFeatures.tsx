import SolutionCheck from '@/components/icons/solution/SolutionCheck'
import React from 'react'
import whatsappImg1 from '../../../../public/images/features/whatsappImg1.png'
import whatsappImg2 from '../../../../public/images/features/whatsappImg2.png'
import whatsappImg3 from '../../../../public/images/features/whatsappImg3.png'
import Image from 'next/image'
const WhatsappFeatures = () => {
    return (
        <section className='container grid lg:grid-cols-3 md:grid-cols-2 gap-8 pt-[65px] pb-[50px]'>
            <div>
                <h1 className='text-[#111827] lg:text-2xl text-base font-bold leading-[100%]'>Maximize WhatsApp as a Channel</h1>
                <ul className='mt-8'>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3'>
                        <SolutionCheck />
                        Lead-gen awareness campaigns
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        Rich mobile promotions
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        Interactive customer journeys
                    </li>
                </ul>
                <Image src={whatsappImg1} alt='image' className='mt-6' />
            </div>
            
            <div>
                <h1 className='text-[#111827] lg:text-2xl text-base font-bold leading-[100%]'>Partner with Wati</h1>
                <ul className='mt-8'>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3'>
                        <SolutionCheck />
                        Recommend Wati to clients
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        Manage WhatsApp for them
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        White-label solutions
                    </li>
                </ul>
                <Image src={whatsappImg2} alt='image' className='mt-6' />
            </div>

            <div>
                <h1 className='text-[#111827] lg:text-2xl text-base font-bold leading-[100%]'>Added Value from Efficiency</h1>
                <ul className='mt-8'>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3'>
                        <SolutionCheck />
                        Custom configuration
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        Performance reporting
                    </li>
                    <li className='text-[#4B5563] text-base font-normal flex items-center gap-3 mt-3'>
                        <SolutionCheck />
                        24/7 support
                    </li>
                </ul>
                <Image src={whatsappImg3} alt='image' className='mt-6' />
            </div>
        </section>
    )
}

export default WhatsappFeatures
