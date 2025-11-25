import React from "react"
import { Routes, Route } from 'react-router-dom'
import BuyCredit from "./Pages/BuyCredit"
import Home from "./Pages/Home"
import Result from "./Pages/Result"
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Login from './Components/Login'
import { useContext } from 'react'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const {showLogin} = useContext(AppContext)


  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-20'></div>
      <div className='relative px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20 max-w-[1920px] mx-auto'>
        <ToastContainer 
          position='bottom-right'
          toastClassName="bg-slate-800 text-white"
          progressClassName="bg-gradient-to-r from-purple-500 to-pink-500"
        />
        <Navbar />
        {showLogin && <Login/>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/result' element={<Result />} />
          <Route path='/buy' element={<BuyCredit />} />
        </Routes>
        <Footer/>
      </div>
    </div>
  )
}

export default App
