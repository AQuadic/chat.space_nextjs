import { TrendingBlogsData } from '@/constants/TrendingBlogsData'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TrendingBlogs = () => {
    return (
        <section className='container py-[50px]'>
            <h1 className='text-[#111827] text-[30px] font-bold leading-9 font-[Inter]'>Trending Blogs</h1>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-6 mt-6'>
                {TrendingBlogsData.map((item, index) => (
                    <div key={index} className='lg:w-[389px] h-[444px] bg-[#FFFFFF] rounded-[12px] p-6'
                        style={{ boxShadow: "0px 6px 18px 0px #0000000D" }}
                    >
                        <div className={`w-fit px-3 h-7 rounded-full flex items-center justify-center`}
                            style={{
                                backgroundColor: item.categoryBgColor,
                                color: item.categoryTextColor,
                            }}
                        >
                            <p className='text-sm font-medium'>{item.category}</p>
                        </div>
                        <Image src={item.image} alt='blog image' className='mt-4' />
                        <h1 className='text-[#111827] text-xl font-semibold mt-4'>{item.title}</h1>
                        <p className='text-[#4B5563] text-base font-normal mt-2'>{item.description}</p>
                        <div className='mt-4'>
                            <Link href='/' className='text-[#16A34A] text-base font-medium leading-7'>Read more →</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default TrendingBlogs;
