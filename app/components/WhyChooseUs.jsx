import React from 'react'
import { whyChooseUsData } from '../assets/assets'
import Title from './Title'
import Image from 'next/image'

const WhyChooseUs = () => {
  return (
    <section className="px-4 py-16">
      <Title
        align="center"
        font="Playfair Display"
        title="Why Choose Us"
        subTitle="Discover the benefits of booking with Urban Stay. We are committed to providing exceptional service and unforgettable experiences for our guests."
      />

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {whyChooseUsData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white/10 backdrop-blur-md rounded-xl p-6 transition hover:scale-105 w-full max-w-xs"
          >
            <div className="bg-[#E6F4FB] p-4 rounded-lg flex items-center justify-center">
              <Image src={item.icon} alt={item.title} width={70} height={70} />
            </div>
            <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs
