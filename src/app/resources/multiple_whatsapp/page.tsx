import TrustedBrands from '@/components/home/TrustedBrands'
import MultipleWhatsappHero from '@/components/resources/multiple_whatsapp/MultipleWhatsappHero'
import React from 'react'

const page = () => {
  return (
    <div>
        <MultipleWhatsappHero />
        <TrustedBrands
          title='Trusted by leading brands across the globe'
          description=''
        />
    </div>
  )
}

export default page
