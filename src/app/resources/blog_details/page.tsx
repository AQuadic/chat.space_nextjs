import BlogDetailsHero from '@/components/resources/blog_details/BlogDetailsHero'
import BroadcastCount from '@/components/resources/blog_details/BroadcastCount'
import WhatsappBlocked from '@/components/resources/blog_details/WhatsappBlocked'
import WhyWhatsappBlocks from '@/components/resources/blog_details/WhyWhatsappBlocks'
import React from 'react'

const page = () => {
    return (
        <div>
            <BlogDetailsHero />
            <BroadcastCount />
            <WhatsappBlocked />
            <WhyWhatsappBlocks />
        </div>
    )
}

export default page
