import DiscoverMore from '@/components/general/DiscoverMore'
import Festivals from '@/components/resources/whatsapp_template/Festivals'
import UsingTemplatesInWati from '@/components/resources/whatsapp_template/UsingTemplatesInWati'
import WhatsappHero from '@/components/resources/whatsapp_template/WhatsappHero'
import WhyUseWhatsapp from '@/components/resources/whatsapp_template/WhyUseWhatsapp'
import React from 'react'

const page = () => {
    return (
        <div>
            <WhatsappHero />
            <Festivals />
            <WhyUseWhatsapp />
            <UsingTemplatesInWati />
            <DiscoverMore />
        </div>
    )
}

export default page
