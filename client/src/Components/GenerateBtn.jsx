import React from "react"
import { useContext } from "react"
import { assets } from "../assets/assets"
import { motion } from "motion/react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const GenerateBtn = () => {

    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate()

    const onClickHandler = () => {
        if (user) {
            navigate('/result')
        } else {
            setShowLogin(true)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pb-16 sm:pb-20 md:pb-24 text-center px-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4
      font-bold py-6 sm:py-8 md:py-12 lg:py-16">
                <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    See the magic.
                </span>
                <br />
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Try now
                </span>
            </h1>

            <motion.button 
                onClick={onClickHandler}
                className="group relative inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 md:px-14 py-3 sm:py-4 rounded-full
                bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold text-sm sm:text-base md:text-lg
                hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <span className="relative z-10 flex items-center gap-2">
                    Generate Images
                    <img src={assets.star_group} alt="" className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
        </motion.div>
    )
}

export default GenerateBtn
