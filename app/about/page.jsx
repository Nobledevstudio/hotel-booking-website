import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import Offers from '../components/Offers'

const page = () => {
  return (
    <div>
          {/* Hero Section */}
        <div className="relative w-full h-[70vh]">
              {/* Hero Image */}
              <Image src={assets.roomHero} alt="Hero Image" fill className="object-cover" />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/50"></div>
        
              {/* Content */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
                      About our Hotel
                    </h1>
                    <p className="max-w-3xl text-sm md:text-base text-gray-200 leading-relaxed mb-6 drop-shadow">
                       Our commitment to excellence is reflected in every aspect of our services and amenities, ensuring a memorable stay for each guest.
                    </p>
              <div className="inline-flex items-center px-6 py-3 bg-[#49B9FF] border-3 border-white  rounded-full">
                 <a href="/" className="text-white font-semibold hover:underline">
                    Home
                 </a>
                 <span className="mx-2 text-white/80">/</span>
                 <span className="text-white font-semibold">About</span>
              </div>
              </div>
        </div>
        {/* What we offer */}
        <Offers/>
    </div>
  )
}

export default page