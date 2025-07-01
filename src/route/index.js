import React from 'react'
import Home from '../page/Home'
import { Route, Routes } from 'react-router-dom'
import Header from '../layout/Header'
import Footer from '../layout/Footer'
import Contact from '../page/Contact'
import Login from '../page/Login'
import Report from '../page/Report'
import DashboardReport from '../page/DashboardReport'
import SingleEyewear from '../page/eyewear/SingleEyewear'
import ListEyewear from '../page/eyewear/ListEyewear'
import OpticalLanding from '../page/optical/OpticalLanding'
import HospitalLanding from '../page/hospital/HospitalLanding'
import OpticalDashboard from '../page/optical/OpticalDashboard'
import HospitalDashboard from '../page/hospital/HospitalDashboard'

const Routers = () => {
  return (
    <div>
        <Header  />
        <Routes>
            <Route path='/' element={<Home  />} />
            <Route path='/contact' element={<Contact  />} />
            <Route path='/login/:slug' element={<Login  />} />
            <Route path='/report' element={<Report  />} />
            <Route path='/dashboard-report' element={<DashboardReport />} />
            <Route path='/eyewear/:slug' element={<SingleEyewear />} />
            <Route path='/list-eyewear' element={<ListEyewear />} />

            <Route path='/optical' element={<OpticalLanding />} />
            <Route path='/optical/dashboard' element={<OpticalDashboard />} />
            
            <Route path='/hospital' element={<HospitalLanding />} />
            <Route path='/hospital/dashboard' element={<HospitalDashboard />} />
        </Routes>
        <Footer  />
        {/* <Home  /> */}
    </div>
  )
}

export default Routers