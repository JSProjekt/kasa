import React from 'react'
import './Appartement.scss'
import { NavLink } from 'react-router-dom'

function Appartement(props) {
  return (
    <NavLink to={`/flat`}>
    <div className='appartement'>
        
        <img src={props.cover} alt={props.title}/>
      <div className='appartement_sub'>{props.title}</div>
      
    </div>
    </NavLink>
    
  )
}

export default Appartement
