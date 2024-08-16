import React from 'react'
import './AppartementList.scss'
import Appartement from './Appartement.jsx'
import appartements from '../../data/appartements.json'



function AppartementList() {

  return (
    <div className="display">
      {appartements.map(data => (
        <Appartement id={data.id} title={data.title} cover={data.cover} />
      ))}

    </div>
  )
}

export default AppartementList