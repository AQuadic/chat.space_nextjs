import Festivals from '@/components/resources/whatsapp_template/Festivals'
import WhatsappHero from '@/components/resources/whatsapp_template/WhatsappHero'
import WhyUseWhatsapp from '@/components/resources/whatsapp_template/WhyUseWhatsapp'
import React from 'react'

const page = () => {
    return (
        <div>
            <WhatsappHero />
            <Festivals />
            <WhyUseWhatsapp />
        </div>
    )
}

export default page
