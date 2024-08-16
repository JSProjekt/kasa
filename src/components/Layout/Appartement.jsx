import React from 'react'
import './Appartement.scss'
import { Link } from 'react-router-dom'

function Appartement(props) {
  console.log(props)
  return (
    <Link to={"/appartement/"+ props.id}>
      <div className='appartement'>

        <img src={props.cover} alt={props.title} />
        <div className='appartement_sub'>{props.title}</div>

      </div>
    </Link>

  )
}

export default Appartement
