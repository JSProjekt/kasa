import React, { useEffect, useState } from 'react'
import './AppartementList.scss'
import Appartement from './Appartement.jsx'




function AppartementList() {
  const [appartements, setAppartements] = useState([]);

  useEffect(appartementFetch, []);

  function appartementFetch() {

    fetch('../../data/appartements.json')
      .then((res) => res.json())
      .then((res) => setAppartements(res))
      .catch(console.error);

  }

    return (
    <div className="display">
      {appartements.map(data => (
        <Appartement key={data.id} title={data.title} appartement={data.cover} />
      ))}

    </div>
    )
  }

  export default AppartementList