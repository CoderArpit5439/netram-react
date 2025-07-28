import React, { useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cookies from 'js-cookie'
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

  // -----------------------------TEMPORARY CODE AFTER SOME TIME REMOVE FROM THIS PLACE ---------- START ----------->

  const { data } = useSelector((state) => {
    return {
      data: state?.rootReducer?.AuthSlice?.data,
    }
  });

  useEffect(() => {
    if (data?.status === true) {
      toast.success(data.message)
    }
    else if(data?.status === false){
      toast.error(data.message)
    }
  }, [data])

  // -----------------------------TEMPORARY CODE AFTER SOME TIME REMOVE FROM THIS PLACE ---------- END ----------->

  useEffect(() => {
    if (token) {
      if (endPoint == '/login') {
        navigate(`/${data?.data?.type}/dashboard`)
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

  return (
    <div>
      {token ? <PrivateRoute/> : <PublicRoute/>}
    </div>
  )
}

export default Routers