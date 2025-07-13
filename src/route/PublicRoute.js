import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../page/Home'
import Contact from '../page/Contact'
import Login from '../page/Login'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import NotFound from '../page/NotFound'
import AdLogin from '../page/admin/AdLogin'

const PublicRoute = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/login/admin' element={<AdLogin />} />
            <Route path='/' element={<Home  />} />
            <Route path='/contact' element={<Contact  />} />
            <Route path='/login/:slug' element={<Login  />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default PublicRoute