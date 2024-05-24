import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <>
      <Header/>
        <Outlet/>
      {!isLandingPage && <Footer />}
    </>
  )
}

export default Layout
