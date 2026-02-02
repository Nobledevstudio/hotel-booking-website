'use client'

import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import StarRating from '../components/StarRating'

const CheckBox = ({label, selected = false, onChange = () => {}})=>{
      return(
         <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)
           } />
              <span className='font-light select-none'>{label}</span>
         </label>
      )
}
const RadioButton = ({label, selected = false, onChange = () => {}})=>{
      return(
         <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} onChange={(e)=>( label)
           } />
              <span className='font-light select-none'>{label}</span>
         </label>
      )
}

const page = () => {

   const router = useRouter()
   const [openFilters,setOpenFilters] = useState(false)

   const roomTypes = [
        "Single Room",
        "Double Room",
        'Standard Room',
        'Deluxe Room'
   ]

   const priceRange = [
        "0 to 500",
        "500 to 1000",
        '1000 to 2000',
        '2000 to 3000'
   ]
   
   const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        'Newest First'
   ]


  return (
   <div>
      <div className="relative w-full h-[70vh]">
      {/* Hero Image */}
      <Image
         src={assets.roomHero} alt="Hero Image" fill className="object-cover"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-0">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-lg">
               Choose Your Room
            </h1>
            <p className="max-w-3xl text-sm md:text-base text-gray-200 leading-relaxed mb-6 drop-shadow">
               Select your ideal sanctuary. Explore our range of meticulously designed rooms, each crafted to offer a unique experience. From cozy retreats to lavish suites, find the perfect space tailored to your preferences and elevate your stay with us.
            </p>
      <div className="inline-flex items-center px-6 py-3 bg-[#49B9FF] border-3 border-white  rounded-full">
         <a href="/" className="text-white font-semibold hover:underline">
            Home
         </a>
         <span className="mx-2 text-white/80">/</span>
         <span className="text-white font-semibold">Rooms</span>
      </div>
      </div>
   </div>

      <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-24 md:pt-32 md:px-16 lg:px-24 xl:px-32'>
         <div>
         <div className='flex flex-col items-start text-left px-8 md:px-0'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Hotel Rooms</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2
            max-w-174'>Take Advantage of our limited-time offer and special packages
              Advantage of our limited-time offer and special packages
              
            </p>
         </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-225 px-8 md:px-0">
            {roomsDummyData.map((room, index) => (
               <div
                  key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
               >
                  {/* Image */}
                  <div
                  className="relative cursor-pointer"
                  onClick={() => {
                     router.push(`/allrooms/${room._id}`)
                     scrollTo(0, 0)
                  }}
                  >
                  <Image
                     src={room.images[0]}
                     alt="hotel-img"
                     title="View Room Details"
                     className="h-60 w-full object-cover"
                     width={600}
                     height={400}
                  />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col gap-3">
                  <p className="text-sm text-gray-500">{room.hotel.city}</p>

                  <h3
                     onClick={() => {
                        router.push(`/allrooms/${room._id}`)
                        scrollTo(0, 0)
                     }}
                     className="text-xl font-playfair font-semibold cursor-pointer text-gray-800"
                  >
                     {room.roomType}
                  </h3>

                  <div className="flex items-center text-sm">
                     <StarRating />
                     <span className="ml-2 text-gray-500">200+ reviews</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                     <Image src={assets.locationIcon} alt="LocationIcon" />
                     <span className="line-clamp-1">{room.hotel.address}</span>
                  </div>

                  {/* Amenities */}
                  <div className="flex flex-wrap gap-3 mt-3">
                     {room.amenities.slice(0, 4).map((item, index) => (
                        <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70"
                        >
                        <Image
                           src={facilityIcons[item]}
                           alt={item}
                           className="w-5 h-5"
                        />
                        <p className="text-xs">{item}</p>
                        </div>
                     ))}
                  </div>

                  {/* Price */}
                  <div className="mt-4 flex items-center justify-between">
                     <p className="text-lg font-semibold text-gray-700">
                        ₦{room.pricePerNight}
                        <span className="text-sm font-normal text-gray-500">
                        {' '}
                        / night
                        </span>
                     </p>

                     <button
                        onClick={() => {
                        router.push(`/allrooms/${room._id}`)
                        scrollTo(0, 0)
                        }}
                        className="px-4 py-2 text-sm rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
                     >
                        View details
                     </button>
                  </div>
                  </div>
               </div>
            ))}
     </div>

     </div>
     {/* Filters */}
      <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg-mt-16 ml-6 mr-6'>
         <div className={`flex items-center justify-between px-5 py-2.5 lg:border-b border-gray-300 ${openFilters && 'border-b '}`}>
            <p className='text-base font-medium text-gray-800'>FILTERS</p>
             <div className='text-xs cursor-pointer'>
                <span onClick={()=>setOpenFilters(!openFilters)} className="lg:hidden">
                        {openFilters ? 'HIDE' : 'SHOW'}
                </span>
              
                <span className='hidden lg:block'>CLEAR</span>
             </div>
        </div>

       <div className={`${openFilters ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden
       transition-all duration-700`}>
            <div className='px-5 pt-5'>
                 <p className='font-medium text-gray-800 pb-2'>Popular Filters</p>
                 {roomTypes.map((room,index)=>(
                    <CheckBox key={index} label={room}/>
                 ))}
            </div>
            <div className='px-5 pt-5'>
                 <p className='font-medium text-gray-800 pb-2'> Price Range</p>
                 {priceRange.map((range,index)=>(
                    <CheckBox key={index} label={`${range}`}/>
                 ))}
            </div>
            <div className='px-5 pt-5 pb-7'>
                 <p className='font-medium text-gray-800 pb-2'>Sort By:</p>
                 {sortOptions.map((option,index)=>(
                    <RadioButton key={index} label={option}/>
                 ))}
            </div>
       </div>
      </div>
    </div>
</div>
  
  )
}

export default page