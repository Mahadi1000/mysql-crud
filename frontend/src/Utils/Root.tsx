import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className='h-[100vh]'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root