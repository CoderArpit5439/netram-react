import React from 'react'
import NotFound from '../page/NotFound'
import Report from '../page/Report'
import DashboardReport from '../page/DashboardReport'
import ListEyewear from '../page/eyewear/ListEyewear'
import SingleEyewear from '../page/eyewear/SingleEyewear'
import OpticalLanding from '../page/optical/OpticalLanding'
import OpticalDashboard from '../page/optical/OpticalDashboard'
import { Route, Routes } from 'react-router-dom'
import Header from '../layout/Header'
import HospitalLanding from '../page/hospital/HospitalLanding'
import HospitalDashboard from '../page/hospital/HospitalDashboard'
import OpticalList from '../page/optical/OpticalList'
import SingleOptical from '../page/optical/SingleOptical'
import HospitalList from '../page/hospital/HospitalList'
import SingleHospital from '../page/hospital/SingleHospital'
import AdLogin from '../page/admin/AdLogin'
import AdDashboard from '../page/admin/AdDashboard'
import Footer from '../layout/Footer'
import Home from '../page/Home'

const PrivateRoute = () => {
  return (
     <div>
        <Header />
        <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/report' element={<Report  />} />
            <Route path='/dashboard/patient' element={<DashboardReport />} />
            
            <Route path='/eyewear/list' element={<ListEyewear />} />
            <Route path='/eyewear/:slug' element={<SingleEyewear/>} />

            <Route path='/optical' element={<OpticalLanding />} />
            <Route path='/optical/dashboard' element={<OpticalDashboard/>} />
            <Route path='/optical/list' element={<OpticalList/>} />
            <Route path='/optical/:slug' element={<SingleOptical />} />
            
            <Route path='/hospital' element={<HospitalLanding />} />
            <Route path='/hospital/dashboard' element={<HospitalDashboard />} />
            <Route path='/hospital/list' element={<HospitalList />} />
            <Route path='/hospital/:slug' element={<SingleHospital />} />

            
            <Route path='/dashboard/admin' element={<AdDashboard />} />
   <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
        {/* <Home  /> */}
    </div>
  )
}

export default PrivateRoute