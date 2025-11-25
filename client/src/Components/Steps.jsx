import React from "react"
import { stepsData } from "../assets/assets"
import { motion } from "motion/react"

const Steps = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-16 sm:my-20 md:my-24 lg:my-32 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          How it works
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/60">Transform Words Into Stunning Images</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-6xl">
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 
                hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
            <div className="relative">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                <img width={24} src={item.icon} alt="" className="sm:w-8 md:w-8 filter brightness-0 invert" />
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h2>
              <p className="text-white/70 text-sm sm:text-base leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Steps
