import React from 'react'
import assets from '../assets/assets'

const Footer = ({theme}) => {
  return (
    <footer className="bg-slate-50 dark:bg-gray-900 
                       pt-10 mt-20 sm:mt-40 
                       px-4 sm:px-10 lg:px-24 xl:px-40">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-5 items-start text-gray-700 dark:text-white">
          <img
            src={theme === 'dark' ? assets.logo_dark : assets.logo}
            className="w-20 sm:w-24"
            alt="Nexus Logo"
          />

          <p className="max-w-md text-sm">
            From strategy to execution, we help businesses thrive in the digital world.
          </p>

          <ul className="flex gap-8 text-sm">
            <li><a href="#hero" className="hover:text-primary">Home</a></li>
            <li><a href="#services" className="hover:text-primary">Services</a></li>
            <li><a href="#work" className="hover:text-primary">Our Work</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact Us</a></li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col gap-4 items-start md:items-end text-left md:text-right text-gray-700 dark:text-white">
          
          <h4 className="font-semibold">Get in touch</h4>

          <p className="text-sm">hello@nexusdigital.com</p>
          <p className="text-sm">+91 98765 43210</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-2">
            <img src={assets.facebook_icon} className="w-5 cursor-pointer" />
            <img src={assets.instagram_icon} className="w-5 cursor-pointer" />
            <img src={assets.twitter_icon} className="w-5 cursor-pointer" />
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pb-5 pt-4 text-sm text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Nexus Digital. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer