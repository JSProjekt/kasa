import React from 'react'
import './Appartement.scss'
import { Link, NavLink } from 'react-router-dom'

function Appartement({appartement}) {
  console.log(appartement)
  return (
    <NavLinkLink to="/flat">
    <div className='appartement'>
        
        <img src={appartement.cover} alt={appartement.title}/>
      <div className='appartement_sub'>{appartement.title}</div>
      
    </div>
    </NavLinkLink>
    
  )
}

export default Appartement
