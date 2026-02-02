'use client'

import { assets } from '@/app/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {
  const pathname = usePathname()

  const sideLinks = [
    { name: 'Dashboard', path: '/owner', icon: assets.dashboardIcon },
    { name: 'Add Room', path: '/owner/addroom', icon: assets.addIcon },
    { name: 'List Room', path: '/owner/listroom', icon: assets.listIcon },
  ]

  return (
    <div className="md:w-64 w-16 border-r h-full border-gray-300 pt-4 flex flex-col">
      {sideLinks.map((item, index) => {
            const isActive =
              item.path === '/owner'
          ? pathname === '/owner'
          : pathname.startsWith(item.path)


        return (
          <Link
            key={index}
            href={item.path}
            className={`flex items-center gap-3 py-3 px-4 md:px-8 transition
              ${
                isActive
                  ? 'border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600 text-blue-600'
                  : 'hover:bg-gray-100/90 text-gray-700'
              }`}
          >
            {/* Icon wrapper keeps alignment perfect */}
            <span className="flex items-center justify-center w-6 h-6">
              <Image
                src={item.icon}
                alt={item.name}
                width={20}
                height={20}
              />
            </span>

            <span className="hidden md:inline text-sm font-medium">
              {item.name}
            </span>
          </Link>
        )
      })}
    </div>
  )
}

export default Sidebar
