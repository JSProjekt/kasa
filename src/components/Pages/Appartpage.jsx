import React, { useEffect, useState } from 'react'
import './Appartpage.scss'
import { useLocation } from 'react-router-dom'
import DescriptionComponent from '../Layout/DescriptionComponent.jsx'
import BannerComponent from '../Layout/BannerComponent.jsx'
import AppartHead from '../Layout/AppartPageHead.jsx'

function Appartpage() {
    const [appart, setAppart] = useState(null);
    const appartLocation = useLocation();

    useEffect(
        function AppartementInfosFetch() {
            fetch('appartements.json')
                .then((resp) => resp.json())
                .then((apparts) => {
                    const appart = apparts.find((appart) => appart.id === appartLocation.state.appartID);
                    setAppart(appart);
                    })
                    .catch(console.error);
        }
    , []);
        if (appart == null) return <div>Loading...</div>;

    return (
        <div className='appart_page'>
           <BannerComponent array={appart.pictures} />
           <AppartHead appart={appart}/>
            <div className='description_group'>
            <DescriptionComponent title="Description" content={appart.description}/>
            <DescriptionComponent title="Equipements"content={appart.equipments.map((equipement,index) => ( <li key={index}>{equipement}</li> ))}/>
            
            </div>
        </div>
    )
}

export default Appartpage
