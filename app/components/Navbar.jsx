"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/nextjs";
const Navbar = () => {


     const pathname = usePathname();
     const hideNavbarPaths = ["/owner", "/login"]
     const show = !hideNavbarPaths.some(path => pathname.startsWith(path))

    if(!show) return null
     


    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/allrooms' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const {openSignIn} = useClerk()
    const { user } = useUser()
    const router = useRouter()

    const handleClick = ()=>{
        router.push('/mybookings')
    }


    const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

    useEffect(() => {
      
       if (pathname !== "/") {
        setIsScrolled(true);
        return; // no scroll listener needed
       }

        // Home page: set initial state based on current scroll
        setIsScrolled(window.scrollY > 10);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [pathname]);

    return (
      
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link href='/'>
                    <Image src={assets.logo} alt="logo" width={200} className={`${isScrolled && 'invert opacity-90'}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}

                     <button  onClick={()=>router.push('/owner')} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashboard
                    </button>
                     
                    
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                    <Image src={assets.searchIcon} alt="search" className={`${isScrolled && 'invert'} h-7 transition-all duration-500`}/>
                    
                    {user ? 
                     (<UserButton>
                        <UserButton.MenuItems>
                             <UserButton.Action label="My Bookings" labelIcon ={<BookIcon/>} 
                             onClick={handleClick} />
                        </UserButton.MenuItems> 
                     </UserButton>)
                     :
                    (<button onClick={openSignIn} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 cursor-pointer ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>)
                     } 
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                     <Image onClick={()=>setIsMenuOpen(!isMenuOpen)}  src={assets.menuIcon} alt="menubutton" className={`${isScrolled && 'invert'} h-4`}/> 
                </div>

                {/* Mobile Menu */}
                 
             
                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                      {user &&
                     <UserButton>
                        <UserButton.MenuItems>
                             <UserButton.Action label="My Bookings" labelIcon ={<BookIcon/>} 
                             onClick={handleClick} />
                        </UserButton.MenuItems> 
                     </UserButton>
                    }
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                        <Image src={assets.closeIcon} alt="close" className="h-6.5"/>
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                   {user &&  <button onClick={()=>router.push('/owner')} className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                        Dashboard
                    </button>} 

                   {!user && <button onClick={openSignIn} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500 cursor-pointer">
                        Login
                    </button>}
                    
                </div>
            </nav>
       
    );
}

export default Navbar;