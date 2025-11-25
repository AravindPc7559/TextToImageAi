import React from "react"
import { assets } from "../assets/assets"
import { motion } from "motion/react"

const Description = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center my-16 sm:my-20 md:my-24 lg:my-32 p-4 sm:p-6 md:px-8 lg:px-12 xl:px-20">
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Create AI Images
        </h1>
        <p className="text-white/60 text-base sm:text-lg md:text-xl">Turn your imagination into stunning visuals</p>
      </div>

      <div className="flex flex-col gap-6 sm:gap-8 md:gap-12 lg:gap-16 lg:flex-row items-center max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group w-full lg:w-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
          <img 
            src={assets.sample_img_1} 
            alt="" 
            className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-2xl border-2 border-white/20 shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300" 
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              AI-Powered Text to Image Generator
            </h2>
            <p className="text-white/80 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
              Easily bring your ideas to life with our advanced AI image generator. Whether you need stunning visuals or
              unique imagery, our tool transforms your text into eye-catching images with just a few clicks. Imagine it,
              describe it, and watch it come to life instantly.
            </p>
            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
              Simply type in a text prompt, and our cutting-edge AI will generate high-quality images in seconds. From
              product visuals to character designs and portraits, even concepts that don't yet exist can be visualized
              effortlessly. Powered by advanced AI technology, the creative possibilities are limitless!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Description
