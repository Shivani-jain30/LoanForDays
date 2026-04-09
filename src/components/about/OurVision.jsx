import React from "react";

const OurVision = () => {
  return (
    <section>
      <div className="container">
        <div className="max-w-7xl mx-auto px-6 mt-30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-9 ">
            <div className="gradient-border px-5">
              <h1 className="text-xl md:text-4xl font-bold mt-7">Our Vision</h1>
              <p className="mt-4 leading-relaxed mb-4">
                Our vision is to become a trusted digital financial platform
                that makes borrowing simple, fast, and accessible for everyone.
                We aim to empower individuals and businesses by providing
                reliable loan solutions that support their growth and financial
                well-being. By leveraging technology and innovation, we strive
                to make financial services available anytime, anywhere.
              </p>
            </div>

            {/* Our Mission */}

            <div className="gradient-border px-5">
              <h1 className="text-xl md:text-4xl font-bold mt-7">
                Our Mission
              </h1>
              <p className="mt-4 leading-relaxed">
                Our mission is to deliver a seamless and transparent lending
                experience to our users. We are committed to providing quick
                approvals, flexible loan options, and a user-friendly platform
                that meets the real needs of our customers. Through trust,
                innovation, and customer-centric services, we aim to simplify
                the borrowing journey and build long-term relationships with our
                users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
