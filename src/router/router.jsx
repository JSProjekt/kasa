
import Home from '../components/Pages/Home.jsx'
import { createBrowserRouter } from 'react-router-dom'
import '../components/Header/Nav.jsx'
import Appartpage from '../components/Pages/Appartpage.jsx'
import About from '../components/Pages/About.jsx'
import ErrorPage404 from '../components/Pages/404.jsx'
import Layout from '../components/Layout/Layout.jsx'
import React, { useState } from 'react'



  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage404 />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/appartement/:id',
          element: <Appartpage />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ]
    }
  ]);

    export default router