import Credit from '@/components/icons/features/Credit'
import Star from '@/components/icons/features/Star'
import React from 'react'
import broadcastHero from '../../../../public/images/features/broadcastHero.png'
import Image from 'next/image'

const BroadcastHero = () => {
    return (
        <section className='container flex flex-wrap items-center justify-between py-[54px]'>
            <div>
                <h1 className='text-[#000000] text-base font-normal leading-[150%]'>Broadcast & Bulk Messages</h1>
                <h2 className='text-[#111827] md:text-[52px] text-4xl font-semibold mt-[10px]'>Drive engagement</h2>
                <p className='text-[#374151] text-xl font-normal leading-[150%] mt-5'>Design and manage your campaigns to get better results.</p>
                <div className='flex items-center gap-6 md:mt-14 mt-8 md:mb-0 mb-4'>
                    <div className='flex items-center gap-2'>
                        <Star />
                        <p className='text-[#374151] text-base font-medium'>4.7/5 on G2</p>
                    </div>
                    <div className='flex items-center gap-2'>
                        <Credit />
                        <p className='text-[#374151] text-base font-medium'>No credit card required</p>
                    </div>
                </div>
            </div>
            <div>
                <Image src={broadcastHero} alt='Hero' />
            </div>
        </section>
    )
}

export default BroadcastHero
