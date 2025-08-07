import { WhatsappCapabilitiesData } from '@/constants/WhatsappCapabilitiesData'
import Image from 'next/image'
const WhatsappCapabilities = () => {
    return (
        <section className='bg-[#F9FAFB] md:p-20 p-4 mt-[106.5px]'>
            <div className='container grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
                {WhatsappCapabilitiesData.map((item,index) => (
                <div key={index} className='lg:w-[384px] w-full lg:h-[212px] h-full bg-[#E6F3FA] rounded-2xl p-8'
                    style={{boxShadow: '0px 1px 2px 0px #0000000D'}}
                    >
                    <Image src={item.icon} alt='icon' />
                    <h1 className='text-[#111827] text-xl font-bold mt-[14px]'>{item.title}</h1>
                    <p className='text-[#4B5563] text-base font-normal leading-[150%] mt-1.5'>{item.description}</p>
                </div>
                ))}
            </div>
        </section>
    )
}

export default WhatsappCapabilities
