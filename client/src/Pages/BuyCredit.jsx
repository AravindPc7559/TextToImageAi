import React from "react"
import { useContext } from "react"
import { assets, plans } from "../assets/assets"
import { AppContext } from "../context/AppContext"
import { motion } from "motion/react"

const BuyCredit = () => {

  const { user } = useContext(AppContext)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-[85vh] text-center pt-8 sm:pt-12 md:pt-16 mb-8 sm:mb-10 px-4 sm:px-6">
      <div className="mb-8 sm:mb-10 md:mb-12">
        <motion.button 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-white/80 text-xs sm:text-sm font-medium"
        >
          Our Plans
        </motion.button>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Choose Your Plan
        </h1>
        <p className="text-white/60 text-sm sm:text-base md:text-lg">Select the perfect plan for your creative needs</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            className={`group relative bg-white/5 backdrop-blur-md border rounded-2xl py-6 sm:py-8 px-5 sm:px-6 md:px-8 text-left
            hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer shadow-xl
            ${index === 1 ? 'border-purple-500/50 bg-gradient-to-br from-purple-500/10 to-pink-500/10' : 'border-white/10'}`}
          >
            {index === 1 && (
              <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-[10px] sm:text-xs font-semibold px-3 sm:px-4 py-0.5 sm:py-1 rounded-full">
                Popular
              </div>
            )}
            <div className="mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                <img width={20} src={assets.logo_icon} alt="" className="sm:w-6 filter brightness-0 invert" />
              </div>
              <p className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{item.id}</p>
              <p className="text-white/60 text-xs sm:text-sm">{item.desc}</p>
            </div>
            <div className="mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-white/10">
              <p className="text-white">
                <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  ${item.price}
                </span>
                <span className="text-white/60 text-base sm:text-lg ml-2">/ {item.credits} credits</span>
              </p>
            </div>
            <button 
              className={`w-full text-white mt-3 sm:mt-4 text-xs sm:text-sm font-semibold rounded-xl py-2.5 sm:py-3 transition-all duration-300
              ${index === 1 
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50' 
                : 'bg-white/10 hover:bg-white/20 border border-white/20'}`}
            >
              {user ? 'Purchase' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default BuyCredit
