import Credit from '@/components/icons/home/Credit'
import Image from 'next/image'
import React from 'react'

const SharedTeamHero = () => {
    return (
        <section className='container flex flex-wrap justify-between gap-8 xl:gap-0 pt-[50px] pb-8'>
            <div>
                <h1 className='text-[#111827] text-[52px] font-semibold leading-[1.2]'>Manage <br /> Conversations <br />
                    <span className='text-[#00D563]'>More Easily</span>
                </h1>
                <p className='text-[#4B5563] text-xl font-normal mt-10 capitalize leading-[150%]'>Centralize message management and team <br /> collaboration.</p>
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
                <Image src='/images/features/sharedTeamHero.png' alt='hero' width={588} height={392} className='z-10' />
                <Image 
                    src='/images/solution/blueFrame.png'
                    alt='blue frame'
                    width={572}
                    height={394}
                    className='md:block hidden absolute top-5 left-10 -z-10'
                />
            </div>
        </section>
    )
}

export default SharedTeamHero
