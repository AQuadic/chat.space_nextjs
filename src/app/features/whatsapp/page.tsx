import WhatsappCapabilities from '@/components/features/whatsapp/WhatsappCapabilities'
import WhatsappHeader from '@/components/features/whatsapp/WhatsappHeader'
import DiscoverMore from '@/components/general/DiscoverMore'
import Testimonials from '@/components/general/Testimonials'
import React from 'react'

const page = () => {
    return (
        <div>
            <WhatsappHeader />
            <WhatsappCapabilities />
            <Testimonials />
            <DiscoverMore />
        </div>
    )
}

export default page
