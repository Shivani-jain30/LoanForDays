"use client";
import { useState } from "react";
import { LocationEdit, Mail, Phone } from "lucide-react";

const ContactForm = () => {
  //data store karta h
  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
    message: "",
  });
  // success msg ke liye
  const [submitted, setSubmitted] = useState(false);

  //data update
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  //submited
  const handleSubmitted = (e) => {
    e.preventDefault();
    console.log("form data:", form);

    setSubmitted(true);

    //reset form
    setForm({
      name: "",
      tel: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-30 ">
      {submitted && <p>Your message has been submitted</p>}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="border p-7 rounded-2xl shadow-xl  ml-10 ">
          <form onSubmit={handleSubmitted} className="space-y-4">
            <h1 className="font-bold">Drop a Message</h1>
            <p className="mt-3 text-sm">Your Name</p>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What should we call you?"
              className="w-full p-2 border rounded-lg text-sm"
              required
            />

            <p className="text-sm">Mobile Number</p>
            <input
              type="number"
              name="tel"
              value={form.tel}
              onChange={handleChange}
              placeholder="10-digit number"
              className="w-full p-2 border rounded-lg text-sm"
              required
            />

            <p className="text-sm">Email Address</p>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full p-2 border rounded-lg text-sm"
              required
            />
            <p className="text-sm">How can we help?</p>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us what's on your mind"
              rows={5}
              className="w-full p-2 border rounded-lg text-sm"
              required
            />
            <button
              type="submit"
              className="bg-green-600 w-full rounded-xl h-10 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

        {/*Address */}
        <div>
          <div className="border p-7 rounded-2xl shadow-xl h-[200] ml-10 ">
            <h2 className="font-bold">Find us Here</h2>
            {/*Address */}
            <div className="flex items-start gap-2 mb-2 ">
              <LocationEdit className="text-4xl  p-1 text-green-600 mt-2" />
              <p className="text-gray-500 text-sm mt-2">
                4th Floor, Build High Construction Tower 2, Rama Road, Moti
                Nagar, Delhi 110015
              </p>
            </div>
            {/* Email */}
            <div className="flex items-center gap-2 mb-2 ">
              <Mail className="text-3xl  p-1 text-green-600 " />
              <p className="text-gray-500 text-sm">support@loanfordays.com</p>
            </div>
            {/* Phone / Timing */}
            <div className="flex items-center gap-2 ">
              <Phone className="text-3xl  p-1 text-green-600" />
              <p className="text-gray-500 text-sm">Mon–Sat, 10 AM – 6 PM</p>
            </div>
          </div>

          {/* location */}

          <div className="border p-7 rounded-2xl shadow-xl h-[400]  ml-10 mt-10 ">
            <h2 className="font-bold mb-7">Our Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14004.167854050327!2d77.13350435247929!3d28.65846216040575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0301312fa2bf%3A0xcae12973d57000c4!2sMoti%20Nagar%2C%20DLE%20Industrial%20Area%2C%20Kirti%20Nagar%2C%20Delhi%2C%20110015!5e0!3m2!1sen!2sin!4v1775544193268!5m2!1sen!2sin"
              className="w-110 h-70 rounded-2xl mb-4 "
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
