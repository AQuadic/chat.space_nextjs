import React from 'react'
import blogHero from '../../../../public/images/resources/blogHero.png'
import Image from 'next/image'
import Link from 'next/link'
const BlogeHero = () => {
    return (
        <section className='container py-[54px] pb-3'>
            <div className='w-full h-full rounded-[16px] py-6 px-8 flex lg:flex-row flex-col justify-between gap-4'
                style={{boxShadow: '0px 4px 6px 0px #0000001A'}}
            >
                <Image src={blogHero} alt='blog hero' />
                <div>
                    <div className='w-[172px] h-7 bg-[#DCFCE7] rounded-full flex items-center justify-center'>
                        <p className='text-[#166534] text-sm font-medium'>Introducing Coexistence</p>
                    </div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold mt-3'>Scale on WhatsApp Without <br /> Missing a Beat</h2>
                    <p className='text-[#4B5563] md:text-base text-sm font-normal leading-[150%] mt-5'>Discover how our latest coexistence feature allows you to seamlessly <br /> manage multiple WhatsApp accounts while maintaining optimal <br /> performance and customer satisfaction.</p>
                    <div className='mt-7 text-right'>
                        <Link href='/' className='text-[#16A34A] text-base font-medium leading-7'>Read more →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BlogeHero
