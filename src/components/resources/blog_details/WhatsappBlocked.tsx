import Lock from '@/components/icons/resources/Lock'
import Permission from '@/components/icons/resources/Permission'
import Warning from '@/components/icons/resources/Warning'
import React from 'react'

const WhatsappBlocked = () => {
    return (
        <section className='bg-[#F9FAFB] py-16'>
            <div className='container'>
                <h1 className='text-[#111827] md:text-[30px] text-xl font-bold'>What to do if WhatsApp is <br /> blocked?</h1>
                <p className='text-[#374151] md:text-base text-sm font-normal leading-[1.6] capitalize mt-9'>When WhatsApp blocks your account, you&apos;ll see specific <br /> warning messages and lose access to key features. <br /> Understanding these signs helps you take immediate action.</p>
                <ul className='mt-8'>
                    <li className='flex items-center gap-3'>
                        <Warning />
                        <p className='text-[#374151] md:text-base text-sm font-normal'>Account temporarily suspended</p>
                    </li>
                    <li className='flex items-center gap-3 mt-4'>
                        <Lock />
                        <p className='text-[#374151] md:text-base text-sm font-normal'>Unable to send messages</p>
                    </li>
                    <li className='flex items-center gap-3 mt-4'>
                        <Permission />
                        <p className='text-[#374151] md:text-base text-sm font-normal'>Permanent account ban</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default WhatsappBlocked
