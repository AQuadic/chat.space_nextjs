import TrustedBrands from '@/components/home/TrustedBrands'
import MultipleWhatsappHero from '@/components/resources/multiple_whatsapp/MultipleWhatsappHero'
import TheProblem from '@/components/resources/multiple_whatsapp/TheProblem'
import React from 'react'

const page = () => {
  return (
    <div>
        <MultipleWhatsappHero />
        <TrustedBrands
          title='Trusted by leading brands across the globe'
          description=''
        />
        <TheProblem />
    </div>
  )
}

export default page
