import React from 'react'
import recentblog1 from '../../../../public/images/resources/recentblogs1.png'
import recentblog2 from '../../../../public/images/resources/recentblogs2.png'
import recentblog3 from '../../../../public/images/resources/recentblogs3.png'
import Image from 'next/image'
import Link from 'next/link'
const RecentBlogs = () => {
    return (
        <section className='container pb-3'>
            <h2 className='text-[#111827] text-[30px] font-bold font-[Inter] leading-9'>Recent Blogs</h2>
            <div className='mt-6 grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
                <div className='lg:w-[389px] h-[400px] bg-[#FFFFFF] rounded-[12px] p-6'
                    style={{boxShadow: "0px 1px 2px 0px #0000000D"}}
                >
                    <Image src={recentblog1} alt='blog' />
                    <h2 className='tex-[#111827] text-xl font-semibold mt-4'>WhatsApp API Integration Best Practices</h2>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-2 capitalize'>Master the art of integrating WhatsApp API with your existing business tools for seamless communication.</p>
                    <div className='mt-4'>
                        <Link href='/' className='text-[#16A34A] text-base font-medium leading-7'>Read more →</Link>
                    </div>
                </div>

                <div className='w-[389px] h-[400px] bg-[#FFFFFF] rounded-[12px] p-6'
                    style={{boxShadow: "0px 1px 2px 0px #0000000D"}}
                >
                    <Image src={recentblog2} alt='blog' />
                    <h2 className='tex-[#111827] text-xl font-semibold mt-4'>Improving Customer Support with WhatsApp</h2>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-2 capitalize'>Transform your customer service experience with WhatsApp&apos;s powerful messaging capabilities.</p>
                    <div className='mt-4'>
                        <Link href='/' className='text-[#16A34A] text-base font-medium leading-7'>Read more →</Link>
                    </div>
                </div>

                <div className='w-[389px] h-[400px] bg-[#FFFFFF] rounded-[12px] p-6'
                    style={{boxShadow: "0px 1px 2px 0px #0000000D"}}
                >
                    <Image src={recentblog3} alt='blog' />
                    <h2 className='tex-[#111827] text-xl font-semibold mt-4'>Creating Effective WhatsApp Campaigns</h2>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-2 capitalize'>Learn how to design and execute WhatsApp marketing campaigns that drive real results.</p>
                    <div className='mt-4'>
                        <Link href='/' className='text-[#16A34A] text-base font-medium leading-7'>Read more →</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentBlogs
