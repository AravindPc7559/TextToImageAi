import React from "react"
import { useContext, useEffect, useState } from "react"
import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext"
import { motion } from "motion/react"
import axios from 'axios'
import { toast } from "react-toastify"

const Login = () => {

    const [state, setState] = useState('Login')
    const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmitHandler = async (e) =>{
        e.preventDefault();

        try {
            
            if(state === 'Login'){
                const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }else{
                const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})

                if(data.success){
                    setToken(data.token)
                    setUser(data.user)
                    localStorage.setItem('token', data.token)
                    setShowLogin(false)
                }else{
                    toast.error(data.message)
                }
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    //Disable the scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [])


    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 
    backdrop-blur-md bg-black/60 flex justify-center items-center p-4">

            <motion.form onSubmit={onSubmitHandler}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative bg-slate-800/95 backdrop-blur-xl border border-white/10 p-6 sm:p-8 md:p-10 rounded-2xl text-white shadow-2xl max-w-md w-full mx-4">
                <button
                    onClick={() => setShowLogin(false)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                    <img src={assets.cross_icon} alt="Close" className="w-4 h-4 filter brightness-0 invert" />
                </button>

                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-white font-bold text-2xl">AI</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                        {state}
                    </h1>
                    <p className="text-white/60 text-sm">
                        {state === 'Login' ? 'Welcome back! Please sign in to continue' : 'Create your account to get started'}
                    </p>
                </div>

                {state !== 'Login' && (
                    <div className="bg-white/5 border border-white/10 px-6 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-purple-500/50 transition-colors">
                        <img src={assets.profile_icon} alt="" width={20} className="opacity-70" />
                        <input 
                            onChange={e => setName(e.target.value)} 
                            value={name} 
                            type="text" 
                            className="flex-1 bg-transparent outline-none text-sm text-white placeholder-white/40" 
                            placeholder="Full Name" 
                            required 
                        />
                    </div>
                )}

                <div className="bg-white/5 border border-white/10 px-6 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-purple-500/50 transition-colors">
                    <img src={assets.email_icon} alt="" width={18} className="opacity-70" />
                    <input 
                        onChange={e => setEmail(e.target.value)} 
                        value={email} 
                        type="email"
                        className="flex-1 bg-transparent outline-none text-sm text-white placeholder-white/40" 
                        placeholder="Email address" 
                        required 
                    />
                </div>

                <div className="bg-white/5 border border-white/10 px-6 py-3 flex items-center gap-3 rounded-xl mb-4 focus-within:border-purple-500/50 transition-colors">
                    <img src={assets.lock_icon} alt="" width={16} className="opacity-70" />
                    <input 
                        onChange={e => setPassword(e.target.value)} 
                        value={password} 
                        type="password"
                        className="flex-1 bg-transparent outline-none text-sm text-white placeholder-white/40" 
                        placeholder="Password" 
                        required 
                    />
                </div>

                {state === 'Login' && (
                    <p className="text-sm text-purple-400 mb-6 cursor-pointer hover:text-purple-300 transition-colors">
                        Forgot password?
                    </p>
                )}

                <button 
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 w-full text-white
                    py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 hover:scale-[1.02] mb-4"
                >
                    {state === 'Login' ? 'Sign In' : 'Create Account'}
                </button>

                {state === 'Login' ? (
                    <p className="text-center text-sm text-white/60">
                        Don't have an account?{' '}
                        <span 
                            className="text-purple-400 cursor-pointer hover:text-purple-300 font-medium transition-colors" 
                            onClick={() => setState('Sign Up')}
                        >
                            Sign up
                        </span>
                    </p>
                ) : (
                    <p className="text-center text-sm text-white/60">
                        Already have an account?{' '}
                        <span 
                            className="text-purple-400 cursor-pointer hover:text-purple-300 font-medium transition-colors" 
                            onClick={() => setState('Login')}
                        >
                            Login
                        </span>
                    </p>
                )}
            </motion.form>
        </div>
    )
}

export default Login
