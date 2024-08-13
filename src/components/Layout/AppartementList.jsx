import React from 'react'
import './AppartementList.scss'
import Appartement from './Appartement.jsx'
import data from '../../data/logement.json'

function AppartementList() {
  return (
    <div className='display'>
    {data.map((appartement, index) => (
      <Appartement data={appartement}/>
    ))}
    </div>
  )
}

export default AppartementList
