import SolutionCheck from '@/components/icons/solution/SolutionCheck'
import Image from 'next/image'
import React from 'react'
import multipleContacts from '../../../../public/images/features/multipleContacts.png'
import multipleContacts2 from '../../../../public/images/features/multipleContacts2.png'
import multipleContacts3 from '../../../../public/images/features/multipleContacst3.png'

const BroadcastFeatures = () => {
    return (
        <section className='container'>
            <div className='flex lg:flex-row flex-col items-center justify-between'>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins leading-[100%] capitalize'>Broadcast to multiple contacts</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>Create and run campaigns direct to each contact <br /> through WhatsApp.</p>
                    <ul className='mt-7'>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize'>
                            <SolutionCheck />
                            Email marketing management functionality for WhatsApp.
                        </li>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize'>
                            <SolutionCheck />
                            Automated message management for efficient campaigning.
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={multipleContacts} alt='image' width={603.2} height={394} />
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-between lg:mt-0 mt-4'>
                <div>
                    <Image src={multipleContacts2} alt='image' width={603.2} height={394} />
                </div>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins leading-[100%] capitalize'>Broadcast to multiple contacts</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>Create and run campaigns direct to each contact <br /> through WhatsApp.</p>
                    <ul className='mt-7'>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize'>
                            <SolutionCheck />
                            Email marketing management functionality for WhatsApp.
                        </li>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize'>
                            <SolutionCheck />
                            Automated message management for efficient campaigning.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='flex lg:flex-row flex-col items-center justify-between lg:mt-0 mt-4'>
                <div>
                    <h2 className='text-[#111827] md:text-4xl text-2xl font-semibold !font-Poppins leading-[1.2] capitalize'>Build your business in fast <br /> growth economies</h2>
                    <p className='text-[#4B5563] md:text-xl text-base font-normal leading-[150%] mt-5 capitalize'>Support for hundreds of languages and dialects lets you <br /> connect with more customers.</p>
                    <ul className='mt-7'>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 capitalize'>
                            <SolutionCheck />
                            Connect with more customers and prospects all around the world.
                        </li>
                        <li className='text-[#374151] md:text-base text-sm font-normal leading-[150%] flex items-center gap-3 mt-3 capitalize'>
                            <SolutionCheck />
                            Sell more and provide better support in fast developing markets.
                        </li>
                    </ul>
                </div>
                <div>
                    <Image src={multipleContacts3} alt='image' width={603.2} height={394} />
                </div>
            </div>
        </section>
    )
}

export default BroadcastFeatures
