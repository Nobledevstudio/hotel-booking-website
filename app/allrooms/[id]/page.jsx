'use client'

import { assets, facilityIcons, roomCommonData, roomsDummyData, userDummyData } from '@/app/assets/assets'
import StarRating from '@/app/components/StarRating'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    if (!id) return
    const foundRoom = roomsDummyData.find(room => String(room._id) === String(id))
    setRoom(foundRoom)
    foundRoom && setMainImage(foundRoom.images[0])
  }, [id])

  if (!room) return <p className="py-40 text-center">Loading...</p>

  return (
    <div className="pb-24">
      {/* HERO IMAGE */}
      <div className="relative h-[80vh] w-full">
            <Image src={mainImage}  alt="Room" fill className="object-cover"priority />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-10 left-6 md:left-16 text-white max-w-xl">
          <p className="text-sm uppercase tracking-widest text-orange-400">
            {room.roomType}
          </p>
          <h1 className="text-3xl md:text-5xl font-playfair mt-2">
            {room.hotel.name}
          </h1>
          <div className="flex items-center gap-2 mt-3">
            <StarRating />
            <span className="text-sm opacity-80">200+ reviews</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-14 mt-16">
        {/* LEFT */}
        <div>
          {/* PRICE STRIP */}
          <div className="flex items-center justify-between border-b pb-6">
            <div className="flex items-center gap-2 text-gray-500">
              <Image src={assets.locationIcon} alt="location" />
              <span>{room.hotel.address}</span>
            </div>
            <p className="text-2xl font-semibold">
               ₦{room.pricePerNight}
              <span className="text-sm text-gray-500"> / night</span>
            </p>
          </div>

          {/* GALLERY */}
          <div className="grid grid-cols-3 gap-4 mt-10">
            {room.images.map((img, i) => (
              <Image key={i} src={img} alt="room" onClick={() => setMainImage(img)} className="rounded-xl cursor-pointer hover:opacity-80 transition object-cover"
              />
            ))}
          </div>

          {/* DESCRIPTION */}
          <div className="mt-14">
            <h2 className="text-2xl font-playfair mb-4">
              About this room
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam tempore illo quae ipsa beatae, possimus
              exercitationem provident consequatur dolores.
            </p>
          </div>

          {/* AMENITIES */}
          <div className="mt-14">
            <h2 className="text-2xl font-playfair mb-6">
              What this place offers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {room.amenities.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg border bg-white"
                >
                  <Image
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-6 h-6"
                  />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SPECIFICATIONS */}
          <div className="mt-16 space-y-6">
            {roomCommonData.map((spec, index) => (
              <div key={index} className="flex gap-4">
                <Image src={spec.icon} alt="" className="w-6 h-6 mt-1" />
                <div>
                  <p className="font-medium">{spec.title}</p>
                  <p className="text-gray-500 text-sm">
                    {spec.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* HOST */}
          <div className="mt-20 flex items-center gap-6 border-t pt-10">
            <Image
              src={userDummyData.image}
              alt="host"
              width={70}
              height={70}
              className="rounded-full"
              unoptimized
            />
            <div>
              <p className="text-lg font-medium">
                Hosted by {room.hotel.name}
              </p>
              <div className="flex items-center gap-2 mt-1">
                <StarRating />
                <span className="text-sm text-gray-500">200+ reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — BOOKING CARD */}
        <div className="sticky top-28 h-fit bg-white border rounded-2xl p-6 shadow-lg">

          <h3 className="text-xl font-semibold mb-6">
            Reserve this room
          </h3>

          <div className="space-y-4">
            <input
              type="date"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="date"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="number"
              placeholder="Guests"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <button
            className="w-full mt-6 bg-blue-800 text-white py-3 rounded-md
            hover:bg-blue-700 transition cursor-pointer"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page
