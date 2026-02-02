import React from 'react'
import { assets, cities } from '../assets/assets'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen mb-30 w-full bg-[url('/heroImage.jpg')] bg-cover bg-center bg-no-repeat text-white px-6 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/15"></div>
      <div className="flex flex-col items-center text-center mt-28 md:mt-16 px-4">
      <span className="inline-flex items-center gap-2 bg-[#49B9FF] text-white px-4 py-1.5 rounded-full text-sm font-medium tracking-wide">
        A World-Class Hotel Experience
      </span>
      <h1 className="mt-6 font-playfair text-black text-4xl md:text-5xl lg:text-[56px] font-bold leading-tight max-w-2xl">
        Find Your Perfect Stay
      </h1>
      <p className="mt-4 max-w-xl text-sm md:text-base text-white leading-relaxed">
        Experience refined comfort, exceptional service, and unforgettable moments
        at the world’s most sought-after hotels and resorts.
      </p>
    <div className="mt-8 flex items-center gap-4">
    <button className="px-6 py-3 rounded-full bg-[#49B9FF] text-white text-sm font-medium hover:bg-[#2da9f5] transition shadow-lg shadow-[#49B9FF]/30 cursor-pointer">
      Explore Hotels
    </button>
    <button className="px-6 py-3 rounded-full border border-white/20 text-white/90 text-sm font-medium hover:bg-white/10 transition">
      Learn More
    </button>
  </div>
</div>



      {/* Floating Search Form */}
      <form className="absolute left-1/2 -translate-x-1/2 bottom-0 md:-bottom-22.5 w-[92%] max-w-6xl bg-white text-gray-700 rounded-2xl shadow-2xl px-6 md:px-10 py-8 flex flex-col gap-6">
        
        {/* Form Header */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-6xl font-extrabold text-[#028fc4]">
            Welcome to the No 1 Hotel 👋
          </h2>
          <p className="text-gray-500 mt-2 text-md md:text-2xl">
            Explore beautiful hotel rooms with Urban Stay
          </p>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          
          {/* Destination */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Image src={assets.calenderIcon} alt="destination" className="h-4 w-4" />
              Destination
            </label>
            <input list="destinations" id="destinationInput" type="text" placeholder="Where are you going?" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black" required />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          {/* Check In */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Image src={assets.calenderIcon} alt="check-in" className="h-4 w-4" />
              Check in
            </label>
            <input type="date" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black" />
          </div>

          {/* Check Out */}
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <Image src={assets.calenderIcon} alt="check-out" className="h-4 w-4" />
              Check out
            </label>
            <input type="date" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black" />
          </div>

          {/* Guests */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Guests
            </label>
            <input type="number" min={1} max={4} placeholder="1" className="mt-2 w-full rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black" />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center gap-2 bg-black text-white rounded-xl py-3 font-medium hover:bg-gray-800 transition w-full">
            <Image src={assets.searchIcon} alt="search" className="h-5 w-5" />
            Search
          </button>

        </div>
      </form>
    </section>
  )
}

export default Hero
