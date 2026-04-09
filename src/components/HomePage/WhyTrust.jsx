import React from 'react'
import TitleSection from './TitleSection'
import CardsSection from '../AllCards';
const WhyTrust = () => {
  return (
    <section className="py-20">
      <div className="container">
        <TitleSection
          title={"Why Thousands Trust LoanForDays"}
          subtitle={
            "We built this platform because we believe getting a small loan shouldn't feel like running a marathon."
          }
        />
        <CardsSection/>
      </div>
    </section>
  );
}

export default WhyTrust