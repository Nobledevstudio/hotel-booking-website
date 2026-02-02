import Image from 'next/image'
import React from 'react'
import { assets } from '../assets/assets'

const StarRating = ({rating}) => {
  return (
      <>
    {Array(5).fill('').map((_, index) => (
       <Image key={index} src={rating > index ? assets.starIconFilled : assets.starIconOutlined  }
       alt='star-icon' className='w-4.5 h-4.5'/>
    ))}
      </>
  )
}

export default StarRating