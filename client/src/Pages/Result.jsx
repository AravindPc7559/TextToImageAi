import React from "react"
import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
import { AppContext } from '../context/AppContext'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const {generateImage} = useContext(AppContext)

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    setLoading(true)

    if(input){
      const image = await generateImage(input)
      if(image){
        setIsImageLoaded(true)
        setImage(image)
      }
    }
    setLoading(false)
  }


  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='flex flex-col min-h-[85vh] justify-center items-center py-8 sm:py-12 px-4'
    >
      <div className="w-full max-w-4xl">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Generate Your Image
          </h1>
          <p className="text-white/60 text-sm sm:text-base md:text-lg">Describe your vision and watch it come to life</p>
        </div>

        <div className="relative mb-6 sm:mb-8 flex justify-center">
          <div className="relative group w-full">
            {loading && (
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 animate-pulse"></div>
            )}
            <div className="relative bg-white/5 backdrop-blur-md border-2 border-white/20 rounded-2xl p-3 sm:p-4 md:p-6 shadow-2xl">
              <img 
                src={image} 
                alt="Generated" 
                className={`w-full h-auto rounded-xl ${loading ? 'opacity-50' : 'opacity-100'} transition-opacity duration-300`} 
              />
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 sm:gap-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-white font-medium text-sm sm:text-base">Generating your image...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {!isImageLoaded && (
          <motion.form
            onSubmit={onSubmitHandler}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='flex flex-col sm:flex-row w-full max-w-2xl mx-auto gap-3'
          >
            <div className="flex-1 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl px-4 sm:px-6 py-3 sm:py-4 focus-within:border-purple-500/50 transition-colors">
              <input
                onChange={e => setInput(e.target.value)} 
                value={input}
                type="text" 
                placeholder='Describe what you want to generate...'
                className='w-full bg-transparent outline-none text-white placeholder-white/40 text-sm sm:text-base' 
              />
            </div>
            <button 
              type='submit'
              disabled={loading}
              className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-xl font-semibold text-sm sm:text-base
              hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap'
            >
              {loading ? 'Generating...' : 'Generate'}
            </button>
          </motion.form>
        )}

        {isImageLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className='flex flex-col sm:flex-row gap-3 sm:gap-4 flex-wrap justify-center w-full'
          >
            <button 
              onClick={() => { setIsImageLoaded(false); setInput(''); }}
              className='bg-white/5 backdrop-blur-md border border-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl
              hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 font-medium text-sm sm:text-base'
            >
              Generate Another
            </button>
            <a 
              href={image} 
              download 
              className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl
              hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 font-medium inline-flex items-center justify-center gap-2 text-sm sm:text-base'
            >
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Result
