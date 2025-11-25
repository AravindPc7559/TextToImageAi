import React from "react"
import { assets, testimonialsData } from "../assets/assets"
import { motion } from "motion/react"

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center my-16 sm:my-20 md:my-24 lg:my-32 py-8 sm:py-12 px-4 sm:px-6">

            <div className="text-center mb-8 sm:mb-10 md:mb-12">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    Customer Testimonials
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-white/60">What Our Users Are Saying</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 w-full max-w-7xl">
                {testimonialsData.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        viewport={{ once: true }}
                        className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 
                        hover:scale-105 hover:border-purple-500/50 transition-all duration-300 cursor-pointer shadow-xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 rounded-2xl transition-all duration-300"></div>
                        <div className="relative flex flex-col items-center">
                            <div className="relative mb-3 sm:mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur opacity-50"></div>
                                <img src={testimonial.image} alt="" className="relative rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 border-2 border-white/20" />
                            </div>
                            <h2 className="text-lg sm:text-xl font-bold mt-1 sm:mt-2 text-white">{testimonial.name}</h2>
                            <p className="text-white/60 mb-3 sm:mb-4 text-xs sm:text-sm">{testimonial.role}</p>
                            <div className="flex mb-3 sm:mb-4 gap-1">
                                {Array(testimonial.stars).fill().map((item, idx) => (
                                    <img key={idx} src={assets.rating_star} alt="" className="w-4 h-4 sm:w-5 sm:h-5" />
                                ))}
                            </div>
                            <p className="text-center text-xs sm:text-sm text-white/80 leading-relaxed">{testimonial.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials
