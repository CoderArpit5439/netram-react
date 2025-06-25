import React from 'react'
import Home from '../page/Home'
import { Route, Routes } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Contact from '../page/Contact'

const Routers = () => {
  return (
    <div>
        <Header  />
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/contact' element={<Contact  />} />
        </Routes>
        <Footer  />
        {/* <Home  /> */}
    </div>
  )
}

export default Routers