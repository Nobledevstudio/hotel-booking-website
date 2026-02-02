"use client";


import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { assets } from '../assets/assets'

const HotelCard = ({room,index}) => {
  return (
  <Link className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]' 
  href={`/rooms/${room._id}`} key={room._id} onClick={() => window.scrollTo(0,0)}> 
  <Image className='' src={room.images[0]} alt={room.name || "Hotel Image"}
   width={300} // required for next/image
   height={200} // required for next/image
/>

    {index % 2 === 0 && <p className='px-3 py-1 absolute top-3 text-xs bg-white
    text-gray-800 font-medium rounded-full'>Top Book</p>}
    <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
            <p className='font-playfair text-xl font-medium text-gray-800'>{room.roomType}</p>
            <div className='flex items-center gap-1'>
                <Image src={assets.starIconFilled} alt='startIcon'/> 4.5
            </div> 
        </div>
           <div> 
              <p>{room.description}</p>
           </div>
        <div className='flex items-center justify-between mt-4'>
            <p><span className='text-xl text-green-400'>₦{room.pricePerNight}</span>/night</p>
            <button className='px-4 py-2 text-sm font-medium border border-gray-300
            rounded hover:bg-gray-50 transition-all cursor-pointer'>Book Now</button>
        </div>
    </div>
</Link>

  )
}

export default HotelCard