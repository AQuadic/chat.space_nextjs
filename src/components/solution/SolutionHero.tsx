import Image from 'next/image'
import React from 'react'
import Credit from '../icons/home/Credit'

const SolutionHero = () => {
    return (
        <section className='container flex flex-wrap justify-between gap-8 xl:gap-0 pt-[50px] pb-11'>
            <div>
                <h1 className='text-[#111827] md:text-5xl text-4xl font-semibold leading-[1.2] capitalize'>Engage and grow  <br /> student sign ups on <br /> 
                    <span className='text-[#00D563]'>WhatsApp</span>
                </h1>
                <p className='text-[#4B5563] text-xl leading-[150%] font-normal capitalize mt-8'>Market classes, manage admission, onboard students and <br /> keep up to date.</p>
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
                <Image src='/images/solution/solutionHero.png' alt='hero' width={588} height={392} className='z-10' />
                <Image 
                    src='/images/solution/blueFrame.png'
                    alt='blue frame'
                    width={572}
                    height={394}
                    className='absolute top-8 left-12 -z-10'
                />
            </div>
        </section>
    )
}

export default SolutionHero
