import React from 'react'
import './Appartements.scss'
import { NavLink } from 'react-router-dom'

function Appartements() {
  return (
    
    <div className='appartement'>
        <NavLink to='/flat'>
      <div className='appartement_sub'>Titre de la location</div>
      </NavLink>
    </div>
    
  )
}

export default Appartements
