import Number1 from '@/components/icons/resources/Number1'
import Number2 from '@/components/icons/resources/Number2'
import Number3 from '@/components/icons/resources/Number3'
import Image from 'next/image'
import React from 'react'

const WhyUseWhatsapp = () => {
    return (
        <section className='bg-[#F0FDF4] py-16'>
            <div className='container w-full h-full rounded-3xl bg-[#DCFCE7] p-12'>
                <h2 className='text-[#111827] text-[30px] font-semibold font-[Poppins] text-center'>Why use WhatsApp Templates?</h2>
                <div className='mt-12 flex flex-wrap items-center justify-center gap-12'>
                    <div>
                        <Image src='/images/resources/whyuseWhatsapp.png' alt='image' width={378} height={180} />
                    </div>
                    <div>
                        <div className='flex items-center gap-4'>
                            <Number1 />
                            <div>
                                <h1 className='text-[#111827] text-base font-semibold'>Save Time</h1>
                                <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize'>Broadcast messages swiftly and efficiently</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mt-5'>
                            <Number2 />
                            <div>
                                <h1 className='text-[#111827] text-base font-semibold'>Consistent Branding</h1>
                                <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize'>Keep your brand image professional and reliable</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-4 mt-5'>
                            <Number3 />
                            <div>
                                <h1 className='text-[#111827] text-base font-semibold'>Personalization</h1>
                                <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-4 capitalize'>Add the recipient&apos;s name or specific offers to make customers feel valuable and <br /> appreciated</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyUseWhatsapp
