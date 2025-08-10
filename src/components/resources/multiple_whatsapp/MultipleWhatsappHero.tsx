import Image from 'next/image';
const MultipleWhatsappHero = () => {
    return (
        <section className='container flex flex-wrap justify-between gap-8 xl:gap-0 pt-[50px] pb-8'>
            <div>
                <h1 className='text-[#111827] md:text-5xl text-3xl font-semibold leading-[1.2] capitalize'>
                    Connect Multiple <br /> <span className='text-[#22C55E]'>WhatsApp</span> Numbers to <br /> Your Wati Account
                </h1>
                <p className='text-[#4B5563] md:text-xl text-base leading-[150%] font-normal capitalize md:mt-11 mt-4'>
                    Unify sales, support, and marketing numbers—cut costs, <br /> speed up responses, and scale effortlessly.
                </p>
                <div
                    className='w-[201px] h-[60px] bg-[#10B981] rounded-[8px] flex items-center justify-center mt-8'
                    style={{ boxShadow: '0px 10px 15px 0px #0000001A' }}
                >
                    <p className='text-[#FFFFFF] text-lg font-semibold'>Start Free Trial</p>
                </div>
            </div>
            <div className='relative'>
                <Image src='/images/resources/multipleWhatsapphero.png' alt='hero' width={592} height={384} className='z-10' />
                <Image
                    src='/images/solution/blueFrame.png'
                    alt='blue frame'
                    width={572}
                    height={394}
                    className='md:block hidden absolute top-2.5 left-10 -z-10'
                />
            </div>
        </section>
    );
}

export default MultipleWhatsappHero
