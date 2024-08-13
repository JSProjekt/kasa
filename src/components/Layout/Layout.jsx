import React from 'react'
import './Layout.scss'
import Nav from '../Header/Nav.jsx'
import Footer from '../Footer/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout({children}) {
  return (
    <>
    <Nav />
    <div className='layout'>
    <Outlet />
    </div>
   
    <Footer />
    </>
  );
}

export default Layout
