import React from "react"
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Navbar = () => {

    const {user, setShowLogin, logout, credit} = useContext(AppContext)

    const navigate = useNavigate()

    return (
        <nav className='flex items-center justify-between py-4 sm:py-6 border-b border-white/10 backdrop-blur-sm'>
            <Link to='/'>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-base sm:text-xl'>AI</span>
                    </div>
                    <span className='text-white text-lg sm:text-xl font-bold hidden xs:block'>TextToImage</span>
                </div>
            </Link>

            <div>
                {user ?
                    <div className='flex items-center gap-2 sm:gap-3 md:gap-4'>
                        <button onClick={()=>navigate('/buy')} className='flex items-center gap-1.5 sm:gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-md border border-purple-500/30 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 
                        rounded-full hover:scale-105 transition-all duration-300 hover:border-purple-400/50'>
                            <img className='w-3.5 h-3.5 sm:w-4 sm:h-4' src={assets.credit_star} alt="" />
                            <p className='text-[10px] xs:text-xs sm:text-sm font-medium text-white whitespace-nowrap'>{credit} Credits</p>
                        </button>
                        <p className='text-white/80 hidden sm:block pl-2 font-medium text-sm md:text-base'>Hi, {user.name}</p>
                        <div className='relative group'>
                            <div className='w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 cursor-pointer'>
                                <div className='w-full h-full rounded-full bg-slate-800 flex items-center justify-center'>
                                    <img src={assets.profile_icon} alt="" className='w-6 h-6 sm:w-8 sm:h-8 rounded-full' />
                                </div>
                            </div>
                            <div className='absolute hidden group-hover:block top-12 right-0 z-20 pt-2'>
                                <ul className='list-none m-0 p-2 bg-slate-800/95 backdrop-blur-md rounded-lg border border-white/10 text-sm min-w-[120px] shadow-xl'>
                                    <li onClick={logout} className='py-2 px-4 cursor-pointer text-white hover:bg-white/10 rounded transition-colors'>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex items-center gap-2 sm:gap-3 md:gap-5'>
                        <button onClick={() => navigate('/buy')}
                            className='text-white/80 hover:text-white transition-colors font-medium text-sm sm:text-base'>Pricing</button>
                        <button onClick={()=>setShowLogin(true)} className='bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 sm:px-6 md:px-8 
                        py-2 sm:py-2.5 text-xs sm:text-sm rounded-full font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105'>Login</button>
                    </div>
                }
            </div>
        </nav>
    )
}

export default Navbar
