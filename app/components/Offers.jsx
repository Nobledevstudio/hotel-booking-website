import React from 'react'
import { servicesData } from '../assets/assets'
import Image from 'next/image'

const Offers = () => {
  return (
    <div>
        <div className='flex items-center justify-start flex-col py-20'>
            <h1 className='text-2xl md:text-4xl font-bold font-playfair mb-5'>What We Offer For You</h1>
            <p className='text-md text-gray-500 font-base mb-5'>Discover tailored services designed to exceed expectations. 
            From expert consultations <br /> to personalized solutions, experience top-notch quality and reliability</p>
            <button className='px-9 py-4 rounded-full bg-[#49b9ff] text-white hover:bg-[#4ba1d7]'>Services</button>
        </div>

        {/*------------- services-------------- */}
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 md:px-18 lg:px-28 xl:px-36 pb-20">
            {servicesData.map((item, index) => (
                <div
                key={index}
              className="bg-gray-50 border border-gray-300  px-6 py-8 flex flex-col items-center text-center gap-4 hover:scale-105 transition ease-in-out duration-75">

                        <Image
                            src={item.img}
                            alt={item.service}
                            width={50}
                            height={50}
                        />
                <h1 className="text-base font-semibold">
                    {item.service}
                </h1>
                </div>
            ))}
            </div>
    </div>
  )
}

export default Offers