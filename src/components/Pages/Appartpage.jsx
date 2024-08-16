import React, { useMemo } from 'react'
import './Appartpage.scss'
import { useParams } from 'react-router-dom'
import DescriptionComponent from '../Layout/DescriptionComponent.jsx'
import BannerComponent from '../Layout/BannerComponent.jsx'
import AppartHead from '../Layout/AppartPageHead.jsx'
import appartements from '../../data/appartements.json'

function Appartpage() {
    const { id } = useParams();
    const appart = useMemo(
        () => appartements.find((appart) => appart.id === id),
        [id]
    )

    if (appart == null) return <div>Loading...</div>;

    return (
        <div className='appart_page'>
            <BannerComponent array={appart.pictures} />
            <AppartHead appart={appart} />
            <div className='description_group'>
                <DescriptionComponent title="Description" content={appart.description} />
                <DescriptionComponent title="Equipements" content={appart.equipments.map(
                    (equipement, index) => (<li key={index}>{equipement}</li>)
                )} />

            </div>
        </div>
    )
}

export default Appartpage
