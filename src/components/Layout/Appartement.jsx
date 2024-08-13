import React from 'react'
import './Appartement.scss'
import { NavLink } from 'react-router-dom'

function Appartement({data}) {
  return (
    
    <div className='appartement'>
        <NavLink to={`/appartement/${data.id}`}>
      <div className='appartement_sub'>{data.title}</div>
      </NavLink>
    </div>
    
  )
}

export default Appartement
