
import Link from 'next/link'
import React from 'react'
import logo from "../images/logo1.jpg"

import Image from 'next/image'

const Navbar = () => {
    return (
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <Image 
      src={logo} 
      alt="logo" 
      width={50} 
      height={50}/>
      
    
          
          
      <span className="ml-3 text-3xl ">Store </span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-xl font-semibold hover:text-gray-900">Home</Link>
      <Link href="/products" className="mr-5 text-xl font-semibold hover:text-gray-900">Products</Link>
      <Link href="contact" className="mr-5 text-xl font-semibold hover:text-gray-900">Contact</Link>
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
      Button
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  </div>
</header>

    )
}

export default Navbar
