import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  const location = useLocation();
  const noFooter = location.pathname === '/';

  return (
    <>
      <Header/>
        <Outlet/>
      {!noFooter && <Footer />}
    </>
  )
}

export default Layout
