import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import ResultPage from './pages/Result';
import BuyCredit from './pages/BuyCredit';

import { Result } from 'postcss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import { AppContext } from './context/AppContext';



const App = () => {

  const {showLogin}=useContext(AppContext)

  return (

<div className='text-1xl text-purple-900  px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-t from-blue-300 via-pink-300 to-purple-300'>
      <Navbar/>
      {showLogin && <Login/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/result' element={<ResultPage />} />
        <Route path='/buy' element={<BuyCredit />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
