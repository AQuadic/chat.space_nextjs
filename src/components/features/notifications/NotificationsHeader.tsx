import Credit from '@/components/icons/home/Credit'
import Image from 'next/image'
import React from 'react'

const NotificationsHeader = () => {
    return (
        <section className='bg-[linear-gradient(90deg,_#FAF5FF_0%,_#FDF2F8_50%,_#FEFCE8_100%)] pt-[50px] pb-8 '>
            <div className='container flex flex-wrap justify-between gap-8 xl:gap-0'>
                <div>
                <div className='px-3 py-2 w-fit bg-[#F3F4F6] rounded-full'>
                    <p className='text-[#4B5563] text-sm font-medium leading-[100%] capitalize'>Custom Notifications</p>
                </div>
                <h1 className='text-[#111827] text-5xl font-semibold mt-4 capitalize leading-[1.1]'>Build relationships <br /> and grow sales</h1>
                <p className='text-[#4B5563] text-xl font-normal leading-[150%] mt-8 capitalize'>Use customized message alerts to drive your business <br /> forward.</p>
                <div className='mt-7 flex flex-wrap items-center md:gap-6 gap-2'>
                <div className='flex items-center'>
                        <Image src='/images/testimonials/rate.png' alt='stars' width={90} height={24} />
                        <p className='text-[#4B5563] text-sm font-normal leading-[200%]'>4.7/5 on G2</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Credit />
                        <p className='text-[#4B5563] text-sm font-normal leading-[200%]'>No credit card required</p>
                    </div>
                </div>
            </div>
            <div className='relative'>
                <Image src='/images/features/customNotificationHeader.png' alt='hero' width={588} height={392} className='z-10' />
                <div className='w-12 h-12 bg-[#F9A8D4] rounded-full absolute bottom-12 -left-4 opacity-60'></div>
                <div className='w-16 h-16 bg-[#FDE047] rounded-full absolute top-0 right-0 opacity-60'></div>
                <div className='w-8 h-8 bg-[#D8B4FE] rounded-full absolute top-[170px] -right-4 opacity-60'></div>
            </div>
            </div>
        </section>
    )
}

export default NotificationsHeader
