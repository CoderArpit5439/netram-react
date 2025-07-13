import React, { useEffect } from 'react'
import Home from '../page/Home'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
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
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { Toast } from 'bootstrap'
import { toast } from 'react-toastify'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

const Routers = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const token = Cookies.get("enetramToken");

  const endPoint = localStorage.getItem("endPoint");

  useEffect(() => {
    localStorage.setItem("endPoint", location?.pathname)

  }, [location?.pathname])

  // pop up date 18 july thane 20 july andheri close button

  useEffect(() => {
    if (token) {
      if (endPoint === '/') {
        navigate('/dashboard')
      }
      else if (endPoint) {
        navigate(`${endPoint}`)
      }
      else {
        navigate('/dashboard')
      }
    }
    else {
      navigate("/")
    }
  }, [token])

  // -----------------------------TEMPORARY CODE AFTER SOME TIME REMOVE FROM THIS PLACE ---------- START ----------->

  const { message } = useSelector((state) => {
    return {
      message: state?.rootReducer?.AuthSlice?.data,
    }
  });

  useEffect(() => {
    if (message?.status === true) {
      toast.success(message.message)
    }
  }, [message])

  // -----------------------------TEMPORARY CODE AFTER SOME TIME REMOVE FROM THIS PLACE ---------- END ----------->

  return (
    <div>
      {token ? <PrivateRoute/> : <PublicRoute/>}
    </div>
  )
  // return (
  //   <div>
  //       <Header  />
  //       <Routes>
  //           <Route path='/' element={<Home  />} />
  //           <Route path='/contact' element={<Contact  />} />
  //           <Route path='/login/:slug' element={<Login  />} />
  //           <Route path='/report' element={<Report  />} />
  //           <Route path='/dashboard-report' element={<DashboardReport />} />
            
  //           <Route path='/eyewear/list' element={<ListEyewear />} />
  //           <Route path='/eyewear/:slug' element={<SingleEyewear />} />

  //           <Route path='/optical' element={<OpticalLanding />} />
  //           <Route path='/optical/dashboard' element={<OpticalDashboard />} />
  //           <Route path='/optical/list' element={<OpticalList />} />
  //           <Route path='/optical/:slug' element={<SingleOptical />} />
            
  //           <Route path='/hospital' element={<HospitalLanding />} />
  //           <Route path='/hospital/list' element={<HospitalList />} />
  //           <Route path='/hospital/dashboard' element={<HospitalDashboard />} />
  //           <Route path='/hospital/:slug' element={<SingleHospital />} />

  //           <Route path='/login/admin' element={<AdLogin />} />
  //           <Route path='/dashboard/admin' element={<AdDashboard />} />

  //       </Routes>
  //       <Footer  />
  //       {/* <Home  /> */}
  //   </div>
  // )
}

export default Routers