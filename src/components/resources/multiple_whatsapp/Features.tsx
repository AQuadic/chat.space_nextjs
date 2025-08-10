import Image from 'next/image'
import React from 'react'

const Features = () => {
    return (
        <section className='container py-24'>
            <div className='flex flex-wrap items-center justify-between gap-8'>
                <Image src='/images/resources/feature1.png' alt='feature1' width={480} height={312} />
                <div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold leading-[100%]'>One-Click Broadcasts</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-6 capitalize'>Wati brings every connected WhatsApp number into <br /> a single inbox. Simply select the number and dive <br /> into chats without switching accounts.</p>
                </div>
            </div>

            <div className='flex flex-wrap lg:flex-row flex-col-reverse lg:items-center justify-between gap-8 md:mt-20 mt-8'>
                <div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold leading-[100%]'>One-Click Broadcasts</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-6 capitalize'>Draft your template once and Wati pushes it across <br /> all numbers simultaneously—complete with per- <br />number analytics to track performance.</p>
                </div>
                <Image src='/images/resources/feature2.png' alt='feature2' width={592} height={384} />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-8 md:mt-20 mt-8'>
                <Image src='/images/resources/feature3.png' alt='feature3' width={592} height={395} />
                <div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold leading-[100%]'>Unified Contact Hub</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-6 capitalize'>Wati aggregates contacts from every number into one <br /> list, tagging each entry with its WhatsApp number so <br /> you can filter or segment instantly.</p>
                </div>
            </div>

            <div className='flex flex-wrap lg:flex-row flex-col-reverse lg:items-center justify-between gap-8 md:mt-20 mt-8'>
                <div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold leading-[100%]'>Automations Across Numbers</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-6 capitalize'>Any automation—Default Actions, Keywords, Sequences, <br /> Routing, Chatbots, or AI Agents—runs on all connected <br /> numbers. Need a custom rule? Scope it to the specific <br /> number you choose.</p>
                </div>
                <Image src='/images/resources/feature4.png' alt='feature4' width={592} height={384} />
            </div>

            <div className='flex flex-wrap items-center justify-between gap-8 md:mt-20 mt-8'>
                <Image src='/images/resources/feature5.png' alt='feature5' width={592} height={395} />
                <div>
                    <h2 className='text-[#111827] md:text-[30px] text-xl font-bold leading-[100%]'>Mobile-First Flexibility</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-6 capitalize'>On desktop or in our iOS and Android apps, Wati lets you <br /> switch numbers, reply to chats, and trigger automations <br /> wherever you are-ensuring no message ever slips through.</p>
                </div>
            </div>
        </section>
    )
}

export default Features
