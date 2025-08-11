import Image from 'next/image'
import React from 'react'

const BlogDetailsHero = () => {
    return (
        <section className='container flex flex-col items-center py-14'>
            <Image src='/images/resources/blogDetailsHero.png' alt='hero' width={912} height={476} /> 
            <h1 className='text-[#111827] lg:text-5xl md:text-3xl text-xl font-semibold text-center mt-[30px]'>Complete Guide: WhatsApp Account Recovery</h1>
            <div className='mt-10 text-[#4B5563] text-base font-normal leading-[150%] flex items-center gap-4'>
                <p>By Sarah Johnson</p>
                <div className='text-[#4B5563] text-base font-[Inter]'>•</div>
                <p>January 15, 2025</p>
            </div>
            <p className='text-[#374151] md:text-lg text-base font-normal leading-[150%] mt-[30px] text-center capitalize'>Getting blocked on WhatsApp can be frustrating, especially for businesses relying on the <br /> platform for communication. This comprehensive guide will help you understand why accounts <br /> get blocked and provide actionable steps to recover your access.</p>
        </section>
    )
}

export default BlogDetailsHero
