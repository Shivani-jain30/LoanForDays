import React from 'react'
import TitleSection from './HomePage/TitleSection';

const LoanCalc = () => {
  return (
    <section className='py-20'>
      <div className="container">
        <TitleSection
          title={"See Exactly What You'll Pay LoanForDays"}
          subtitle={
            "No surprises. Adjust the sliders and see your complete repayment breakdown in real time."
          }
        />
      </div>
    </section>
  );
}

export default LoanCalc