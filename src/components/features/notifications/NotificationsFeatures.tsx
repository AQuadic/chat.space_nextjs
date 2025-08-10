import SolutionCheck from '@/components/icons/solution/SolutionCheck'
import Image from 'next/image'
import React from 'react'

const NotificationsFeatures = () => {
    return (
        <section className='container py-16'>
            <div className='flex flex-wrap items-center gap-4 justify-between'>
                <div>
                    <h1 className='text-[#111827] text-[30px] font-semibold font-[Poppins] leading-[100%]'>Update customers and prospects</h1>
                    <ul className='mt-9'>
                        <li className='flex items-center gap-3'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Alert customers when products are in stock</p>
                        </li>
                        <li className='flex items-center gap-3 mt-4'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Cross-sell based on interests</p>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <Image src='/images/features/notificationfeature1.png' alt='image' width={557} height={370} className='z-10' />
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-4 justify-between mt-20'>
                <div className=''>
                    <Image src='/images/features/notificationfeature2.png' alt='image' width={592} height={320} className='z-10' />
                </div>
                <div>
                    <h1 className='text-[#111827] text-[30px] font-semibold font-[Poppins] leading-[100%]'>Offers and promotions</h1>
                    <ul className='mt-9'>
                        <li className='flex items-center gap-3'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Notify customers of special offers and discounted prices</p>
                        </li>
                        <li className='flex items-center gap-3 mt-4'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Offer tailored deals to prospects</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex flex-wrap items-center gap-4 justify-between mt-20'>
                <div>
                    <h1 className='text-[#111827] text-[30px] font-semibold font-[Poppins] leading-[100%]'>Stronger relationships</h1>
                    <ul className='mt-9'>
                        <li className='flex items-center gap-3'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Promote continuity between users and teams</p>
                        </li>
                        <li className='flex items-center gap-3 mt-4'>
                            <SolutionCheck />
                            <p className='text-[#4B5563] text-base font-normal leading-[150%]'>Customize alerts to specific teams/messages</p>
                        </li>
                    </ul>
                </div>
                <div className=''>
                    <Image src='/images/features/notificationfeature3.png' alt='image' width={544} height={343} className='z-10' />
                </div>
            </div>
        </section>
    )
}

export default NotificationsFeatures
