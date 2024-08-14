import React from 'react'
import './Appartpage.scss'
import { useParams } from 'react-router-dom'
import DescriptionComponent from '../Layout/DescriptionComponent.jsx'
import BannerComponent from '../Layout/BannerComponent.jsx'
import AppartHead from '../Layout/AppartPageHead.jsx'

function Appartpage() {
    const { id } = useParams()
    return (
        <div className='appart_page'>
           <BannerComponent />
           <AppartHead />
            <div className='description_group'>
            <DescriptionComponent />
            <DescriptionComponent />
            </div>
        </div>
    )
}

export default Appartpage
