import React from 'react'
import './Appartement.scss'
import { NavLink } from 'react-router-dom'

function Appartement(data) {
  console.log(data)
  return (
    <NavLink to="/appartement" state= {{ appartID: data.id}}>
    <div className='appartement'>
        
        <img src={data.cover} alt={data.title}/>
      <div className='appartement_sub'>{data.title}</div>
      
    </div>
    </NavLink>
    
  )
}

export default Appartement
