import { assets } from '@/app/assets/assets'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 border-b
    border-gray-300 py-3 bg-white transition-all duration-300'>
       <Link href={'/'}>
          <Image src={assets.logo} alt='logo' className='w-65 h-12 invert opacity-80'/>
       </Link>
       <UserButton/>

    </div>
  )
}

export default Navbar