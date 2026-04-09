import React from 'react'
import Hero from '@/components/about/Hero'
import AboutContent from '@/components/about/AboutContent'
import OurVision from '@/components/about/OurVision'
import MakeDifferent from '@/components/about/MakeDifferent'
import CoreValues from '@/components/about/CoreValues'
import OurJourney from '@/components/about/OurJourney'
import WeWork from '@/components/about/WeWork'
import WhyCustomerTrust from '@/components/about/WhyCustomerTrust'




const page = () => {
  return (
    <div>
        <Hero />
        <AboutContent />
        <OurVision />
        <MakeDifferent />
        <CoreValues />
        <OurJourney />
        <WeWork />
        <WhyCustomerTrust />
        
        
        
    </div>
  )
}

export default page