'use client'

import React from 'react'
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title'
import { useRouter } from 'next/navigation'

const FeaturedDestinations = ({}) => {

         const router = useRouter()
    
  return (
    <section className="flex flex-col items-center py-12 px-6 md:px-16 lg:px-24 xl:px-32 ">
      {/* Section Header */}
      <div className="text-center mb-10">
        <Title title={'Featured Destination'} subTitle={'Discover our hand-picked luxury hotels and resorts. Your perfect stay awaits'}/>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div> 

      <button onClick={()=> {router.push('/rooms'), scrollTo(0,0)}} className='my-16 px-4 py-2 text-sm font-medium border border-gray-300
      rounded bg-white hover:bg-gray-50 transition-all cursor-pointer'>
         View All Destination
      </button>
    </section>
  )
}

export default FeaturedDestinations
