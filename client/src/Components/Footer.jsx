import React from "react"
import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 py-6 sm:py-8 mt-12 sm:mt-16 md:mt-20 border-t border-white/10 px-4">
      <div className="flex items-center gap-2">
        <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
          <span className='text-white font-bold text-base sm:text-xl'>AI</span>
        </div>
        <span className='text-white text-lg sm:text-xl font-bold'>TextToImage</span>
      </div>

      <p className="flex-1 text-center sm:text-left border-l-0 sm:border-l border-white/20 sm:pl-6 text-xs sm:text-sm text-white/50 order-3 sm:order-2">
        Copyright © 2024 aravind | All rights reserved.
      </p>

      <div className="flex gap-3 sm:gap-4 order-2 sm:order-3">
        <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
          <img src={assets.facebook_icon} alt="Facebook" className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert opacity-70" />
        </a>
        <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
          <img src={assets.twitter_icon} alt="Twitter" className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert opacity-70" />
        </a>
        <a href="#" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300">
          <img src={assets.instagram_icon} alt="Instagram" className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-0 invert opacity-70" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
