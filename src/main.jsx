import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/Pages/Home.jsx'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import './components/Header/Nav.jsx'
import './index.css'
import Nav from './components/Header/Nav.jsx'
import Appartpage from './components/Pages/Appartpage.jsx'
import About from './components/Pages/About.jsx'
import ErrorPage404 from './components/Pages/404.jsx'

function MainFrame() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainFrame />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/flat',
        element: <Appartpage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '404',
        element: <ErrorPage404 />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
