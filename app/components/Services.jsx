import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-20 space-y-28">

      {/* ===== SECTION 1 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="w-full">
          <Image
            src={assets.services01}
            alt="services"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div className="space-y-5">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold leading-tight">
            We Offer the Best and <span className="text-[#49B9FF]">Quality Services</span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Aso Rock Hotel is home away from home. Located at 37 Abaranje Ikotun Road,
            Ikotun Lagos State Nigeria, our hotel offers top-notch hospitality.
            Founded in December 1999, we provide well-ventilated rooms, city views,
            and free high-speed Wi-Fi for all guests.
          </p>

          <button className="inline-block px-7 py-3 rounded-full bg-[#49B9FF]
                             text-white font-medium hover:bg-blue-500 transition">
            More About Us
          </button>
        </div>
      </div>

      {/* ===== SECTION 2 ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-5 order-2 md:order-1">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold leading-tight">
            Start Your <span className="text-[#49B9FF]">Amazing Adventure</span>
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
            Embark on an incredible journey and discover unparalleled comfort
            in our exquisitely designed rooms. Each space blends luxury and
            relaxation, offering the perfect sanctuary for a memorable stay.
          </p>

          <button className="inline-block px-7 py-3 rounded-full border-2
                             border-[#49B9FF] text-[#49B9FF]
                             hover:bg-[#49B9FF] hover:text-white transition">
            Choose a Room
          </button>
        </div>

        {/* Image */}
        <div className="w-full order-1 md:order-2">
          <Image
            src={assets.services02}
            alt="services"
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
      </div>

    </section>
  )
}

export default Services
