import React, { useEffect, useState } from 'react'
import './AppartementList.scss'
import Appartement from './Appartement.jsx'




function AppartementList() {
  const [appartements, setAppartements] = useState([]);

  useEffect(
    function AppartementFetch() {
      fetch('appartements.json')
        .then(resp => resp.json())
        .then((data) => setAppartements(data));
  
    }, []);

    return (
    <div className="display">
      {appartements.map(data => (
        <Appartement id={data.id} key={data.id} title={data.title} cover={data.cover} />
      ))}

    </div>
    )
  }

  export default AppartementList