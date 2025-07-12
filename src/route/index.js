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
import AdLogin from '../page/admin/AdLogin'
import AdDashboard from '../page/admin/AdDashboard'
import HospitalList from '../page/hospital/HospitalList'
import OpticalList from '../page/optical/OpticalList'
import SingleOptical from '../page/optical/SingleOptical'
import SingleHospital from '../page/hospital/SingleHospital'

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
            
            <Route path='/eyewear/list' element={<ListEyewear />} />
            <Route path='/eyewear/:slug' element={<SingleEyewear />} />

            <Route path='/optical' element={<OpticalLanding />} />
            <Route path='/optical/dashboard' element={<OpticalDashboard />} />
            <Route path='/optical/list' element={<OpticalList />} />
            <Route path='/optical/:slug' element={<SingleOptical />} />
            
            <Route path='/hospital' element={<HospitalLanding />} />
            <Route path='/hospital/list' element={<HospitalList />} />
            <Route path='/hospital/dashboard' element={<HospitalDashboard />} />
            <Route path='/hospital/:slug' element={<SingleHospital />} />

            <Route path='/login/admin' element={<AdLogin />} />
            <Route path='/dashboard/admin' element={<AdDashboard />} />

        </Routes>
        <Footer  />
        {/* <Home  /> */}
    </div>
  )
}

export default Routers