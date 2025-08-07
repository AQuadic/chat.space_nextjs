import BlueNumber1 from '@/components/icons/resources/BlueNumber1'
import BlueNumber2 from '@/components/icons/resources/BlueNumber2'
import Image from 'next/image'
import React from 'react'

const UsingTemplatesInWati = () => {
    return (
        <section className='bg-[#EFF6FF] py-16'>
            <div className='container w-full h-full rounded-3xl bg-[#DBEAFE] p-12'>
                <h2 className='text-[#111827] text-[30px] font-semibold font-[Poppins] text-center'>Using Templates in Wati</h2>
                <div className='mt-12 flex flex-wrap items-center justify-center gap-12'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <BlueNumber1 />
                                <h1 className='text-[#374151] text-base font-normal leading-6'>Go to <span className='font-bold'>&apos;Broadcasts&apos;</span> and click &apos; <span className='font-bold'>New Template Message&apos;</span> in the top right <br /> corner.</h1>
                        </div>
                        <div className='flex items-center gap-4 mt-5'>
                            <BlueNumber2 />
                                <h1 className='text-[#374151] text-base font-normal leading-6'>Click <span className='font-bold'>&apos;Use a template&apos;</span> to access the library.</h1>
                        </div>
                    </div>
                    <div>
                        <Image src='/images/resources/usingTemplates.png' alt='image' width={378} height={180} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UsingTemplatesInWati
