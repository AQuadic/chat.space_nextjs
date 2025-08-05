import React from 'react'
import Whatsapp from '../icons/Whatsapp'
import Link from 'next/link'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import UpArrow from '../icons/UpArrow'

const DiscoverMore = () => {
    return (
        <section className='pt-7 pb-14'>
            <h1 className='text-[#1F2937] text-[30px] font-semibold text-center !font-Poppins'>Discover more.</h1>
            <p className='text-[#6B7280] text-lg font-normal leading-[150%] mt-[18px] text-center'>WhatsApp, Facebook, and Instagram are leaders in social messaging.</p>
            <div className='flex items-center justify-center gap-9 mt-7'>
                <Link href='/' className='flex items-center gap-3'>
                    <Whatsapp />
                    <p className='text-[#22C55E] text-xl font-bold leading-7 !font-inter'>WhatsApp</p>
                </Link>
                <Link href='/' className='flex items-center gap-3'>
                    <Facebook />
                    <p className='text-[#2563EB] text-xl font-bold leading-7 !font-inter'>Facebook</p>
                </Link>
                <Link href='/' className='flex items-center gap-3'>
                    <Instagram />
                    <p className='text-[#EC4899] text-xl font-bold leading-7 !font-inter'>Instagram</p>
                </Link>
            </div>
            <div className='mt-10 flex items-center justify-center gap-5'>
                <UpArrow />
                <p className='text-[#4B5563] text-xl font-semibold'>chati space is one of the fastest-growing WhatsApp Business Solution Providers</p>
            </div>
            <div className='flex justify-center mt-10'>
                <button className='w-[210px] h-[60px] rounded-[12px] bg-[#22C55E] text-[#FFFFFF] text-lg font-semibold'>
                    Book a Demo
                </button>
            </div>
        </section>
    )
}

export default DiscoverMore
