import React from 'react'
import './404.scss'
import Nav from '../Header/Nav.jsx'
import { NavLink } from 'react-router-dom'


function ErrorPage404() {
  return (
    <>
    <Nav />
    <div className='error_404'>
      <h1>404</h1>
      <h2>Oops! La page que vous demandez n'existe pas</h2>
      <NavLink to="/home">Retrouner sur la page d'accueil</NavLink>
    </div>
    </>
  )
}

export default ErrorPage404
