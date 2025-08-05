import { NavLinks } from '@/constants/NavLinks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full pt-[59px] pb-[30px] bg-[#111827] flex flex-col justify-center'>
            <div className='container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-0 gap-8'>
                <div>
                    <Image src='/images/header/footerLogo.svg' alt='logo' width={195.6} height={32} />
                    <p className='text-[#D1D5DB] text-base font-normal mt-5 xl:w-[274px]'>Scale your business communication with Chati Space API.</p>
                </div>

                <div>
                    <h2 className='text-[#FFFFFF] text-base font-normal mb-3'>Product</h2>
                    <div>
                        {NavLinks.slice(-4).map((item,index) => (
                            <div key={index} className='mt-2'>
                            <ul>
                                <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer'>{item.title}</Link>
                            </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h2 className='text-[#FFFFFF] text-base font-normal mb-1'>Company</h2>
                    <div>
                        <ul className='flex flex-col'>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>About</Link>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>Blog</Link>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>Careers</Link>
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className='text-[#FFFFFF] text-base font-normal mb-1'>Support</h2>
                    <div>
                        <ul className='flex flex-col'>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>Help Center</Link>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>Contact</Link>
                            <Link href='/' className='text-[#D1D5DB] text-base font-normal cursor-pointer mt-2'>Privacy</Link>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className='my-4 text-[#1F2937] container'/>

            <p className='text-[#9CA3AF] text-base font-normal mx-auto mt-4'>© 2025 Chati Space. All rights reserved.</p>
        </footer>
    )
}

export default Footer
