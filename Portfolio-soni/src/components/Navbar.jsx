import { assets } from '../assets/assets'
import { useEffect, useState } from 'react'

const Navbar = ({ isDarkMode , setIsDarkMode}) => {

    const [mobileMenuToggler , setMobileMenuToggler] = useState(false)

    const [isScroll , setIsScroll] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll' , () => {
        if(scrollY > 50){
            setIsScroll(true)
        } else {
            setIsScroll(false)
        }
      })
    }, [])
    

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
            <img src={assets.header_bg_color} alt='' className='w-full'/>
        </div>

        <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-[#11001f] dark:shadow-white/2" : ""}`}>
            <a href="#top">
                <img src={isDarkMode ? assets.logo_dark : assets.logo} className='w-28 cursor-pointer mr-14' alt='img'/>
            </a>

            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark: bg-transparent"}`}>
                <li><a className="font-Ovo" href="#top">Home</a></li>
                <li><a className="font-Ovo"  href="#about">About me</a></li>
                <li><a className="font-Ovo"  href="#services">My Skills</a></li>
                <li><a className="font-Ovo"  href="#work">My Work</a></li>
                <li><a className="font-Ovo"  href="#contact">Contact me</a></li>
            </ul>



            <div className='flex items-center gap-4'>

                <button 
                onClick={() => setIsDarkMode(prev => !prev)}
                >
                    <img src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6'/>
                </button>

                <a href="#contact" className='font-Ovo hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/50'>Contact 

                <img src={isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} className='w-3' alt='img'/>
                </a>

                <button 
                onClick={() => setMobileMenuToggler(!mobileMenuToggler)}
                className='block md:hidden ml-3 cursor-pointer'>
                    <img src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6'/>
                </button>
            </div>


            {/* mobile menu */}

            <ul
            className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-all duration-500 ${mobileMenuToggler ? "-right-0" : "-right-64"} dark:bg-[#2a004a] dark:text-white`} >

                <div 
                onClick={() => setMobileMenuToggler(!mobileMenuToggler)}
                className='absolute right-6 top-6 hover:rotate-90 transition-all duration-200'>
                    <img src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer'/>
                </div>

                <li><a onClick={() => setMobileMenuToggler(!mobileMenuToggler)} className={isDarkMode ?"font-Ovo hover:bg-[#4f008bc6] p-3 rounded-md": "font-Ovo hover:bg-rose-100 p-3 rounded-md"} href="#top">Home</a></li>
                <li><a onClick={() => setMobileMenuToggler(!mobileMenuToggler)} className={isDarkMode ?"font-Ovo hover:bg-[#4f008bc6] p-3 rounded-md": "font-Ovo hover:bg-rose-100 p-3 rounded-md"}  href="#about">About me</a></li>
                <li><a onClick={() => setMobileMenuToggler(!mobileMenuToggler)} className={isDarkMode ?"font-Ovo hover:bg-[#4f008bc6] p-3 rounded-md": "font-Ovo hover:bg-rose-100 p-3 rounded-md"}  href="#services">My Skills</a></li>
                <li><a onClick={() => setMobileMenuToggler(!mobileMenuToggler)} className={isDarkMode ?"font-Ovo hover:bg-[#4f008bc6] p-3 rounded-md": "font-Ovo hover:bg-rose-100 p-3 rounded-md"}  href="#work">My Work</a></li>
                <li><a onClick={() => setMobileMenuToggler(!mobileMenuToggler)} className={isDarkMode ?"font-Ovo hover:bg-[#4f008bc6] p-3 rounded-md": "font-Ovo hover:bg-rose-100 p-3 rounded-md"}  href="#contact">Contact me</a></li>
                
            </ul>
        </nav>
    </>
  )
}

export default Navbar