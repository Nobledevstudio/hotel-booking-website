import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'
import Footer from '../components/Footer'

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
                        Get in Touch
                    </h1>
                    <p className="max-w-3xl text-sm md:text-base text-gray-200 leading-relaxed mb-6 drop-shadow">
                        Connect with us effortlessly. Whether you have inquiries, need assistance, or wish to explore our offerings, reaching out is simple.
                        We're here to assist you every step of the way. Get in touch today and let's start a conversation.
                    </p>
                <div className="inline-flex items-center px-6 py-3 bg-[#49B9FF] border-3 border-white  rounded-full">
                    <a href="/" className="text-white font-semibold hover:underline">
                    Home
                    </a>
                    <span className="mx-2 text-white/80">/</span>
                    <span className="text-white font-semibold">Contact</span>
                </div>
                </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-16 px-8 md:px-16 lg:px-24 xl:px-32 pb-20">
    
            <div className="flex flex-col items-center text-center bg-white
                            border border-gray-200 rounded-2xl px-6 py-10
                            shadow-sm hover:shadow-md transition">
                <Image src={assets.welcomeIcon} alt="Welcome" className="w-12 h-12 mb-4" />
                <h1 className="text-lg font-semibold mb-2">Welcome</h1>
                <p className="text-sm text-gray-500">
                37 Abaranje Ikotun Road, Ikotun Lagos State
                </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl px-6 py-10 shadow-sm hover:shadow-md transition">
                <Image src={assets.phoneIcon} alt="Welcome" className="w-12 h-12 mb-4" />
                <h1 className="text-lg font-semibold mb-2">Call</h1>
                <p className="text-sm text-gray-500">
                2349077456234
                </p>
            </div>

            <div className="flex flex-col items-center text-center bg-white
                            border border-gray-200 rounded-2xl px-6 py-10
                            shadow-sm hover:shadow-md transition">
                <Image src={assets.emailIcon} alt="Welcome" className="w-12 h-12 mb-4" />
                <h1 className="text-lg font-semibold mb-2">Email</h1>
                <p className="text-sm text-gray-500">
                info@urbanstay.com
                </p>
            </div>

        </div>

        {/*--------Message us----------- */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-gray-50 rounded-3xl p-10 md:p-16 mt-20 mb-20">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                Aso Rock Hotel is <span className="text-[#49B9FF]">Waiting for You!</span>
                </h1>

                <p className="text-gray-600 mb-8">
                Experience comfort and luxury in the heart of Lagos.
                Enjoy world-class hospitality, premium rooms, and unforgettable stays.
                </p>

                <button className="w-fit bg-[#49B9FF] text-white px-8 py-3
                                rounded-full font-medium hover:bg-[#3aa8eb]
                                transition">
                More about us
                </button>
            </div>

                {/* RIGHT FORM */}
                <form className="bg-white rounded-2xl p-8 shadow-sm space-y-5">

                    <div>
                      <label className="block text-sm font-medium mb-1">Your Name</label>
                      <input type="text"className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49B9FF]"/>
                    </div>

                    <div>
                       <label className="block text-sm font-medium mb-1">Your Email</label>
                       <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49B9FF]"/>
                    </div>

                    <div>
                    <label className="block text-sm font-medium mb-1">Phone</label>
                       <input type="text"className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49B9FF]"/>   
                    </div>

                    <div>
                         <label className="block text-sm font-medium mb-1">Subject</label>
                         <input type="text"className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49B9FF]"/>
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea rows="4" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49B9FF]"/>
                    </div>

                    <button  type="submit"  className="w-full bg-[#49B9FF] text-white py-3 rounded-lg font-semibold hover:bg-[#3aa8eb] transition">
                       Send Message
                    </button>
                </form>
     </div>
     <Footer/>
    </div>
  )
}

export default page