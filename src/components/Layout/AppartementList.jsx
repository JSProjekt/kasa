import React, { useEffect, useState } from 'react'
import './AppartementList.scss'
import Appartement from './Appartement.jsx'


function AppartementList() {
  const [appartements, setAppartements] = useState([]);

  useEffect(appartementFetch, []);
    
  function appartementFetch() {
    fetch("../data/appartement.json")
      .then(response => response.json())
      .then(response => setAppartements(response))
      .catch(console.error);
      
  }

    return (
    <div className="display">
      {appartements.map(appartement => (
        <Appartement title={appartement.title} appartement={appartement.cover} />
      ))}
      
    </div>
  )
}

export default AppartementList
