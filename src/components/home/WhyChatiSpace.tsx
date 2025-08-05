import { HomeTeams } from '@/constants/HomeTeams'
import Image from 'next/image'
import React from 'react'

const WhyChatiSpace = () => {
    return (
        <section className='container py-5'>
            <h1 className='text-[#000000] text-4xl font-semibold !font-Poppins text-center'>Why teams choose Chati Space</h1>
            <p className='text-[#5A5A5A] text-xl leading-[150%] mt-2 text-center'>Built for modern teams who demand speed, scale, and simplicity</p>

            <div className='mt-6 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {HomeTeams.map((item,index) => (
                    <div key={index}>
                        <Image src={item.image} alt='team' width={253.5} height={290.81} />
                        <h2 className='text-[#000000] text-2xl font-medium mt-6'>{item.title}</h2>
                        <p className='text-[#000000] text-xl font-normal leading-[200%] w-[278px] capitalize'>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyChatiSpace
