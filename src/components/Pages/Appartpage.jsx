import React from 'react'
import './Appartpage.scss'
import { useParams } from 'react-router-dom'
import AppartPageDescription from '../Layout/AppartPageDescription.jsx'

function Appartpage() {
    const { id } = useParams()
    return (
        <div className='appart_page'>
            <div>
                <img src='https://via.placeholder.com/800/400' alt='appartement' />
            </div>
            <div className='appart_page_head'>
                <div className='appart_page_title'>
                    <h1>Crazy loft on Canal Saint Martin</h1>
                    <h2>Paris, Ile de France</h2>
                    <div className='appart_tags'>
                        <span>Cozy</span>
                        <span>Canak</span>
                        <span>Paris 10</span>
                    </div>
                </div>
                <div className='owner'>
                    <div className='owner_details'>
                        <h3><span>Alexandre</span> <span>Dumas</span></h3>
                        <div className='owner_profil'></div>
                    </div>
                    <div className='owner_stars'>
                        <span className='mode_on'>★</span>
                        <span className='mode_on'>★</span>
                        <span className='mode_on'>★</span>
                        <span className='mode_off'>★</span>
                        <span className='mode_off'>★</span>
                    </div>
                </div>
            </div>
            <AppartPageDescription />
            <AppartPageDescription />
        </div>
    )
}

export default Appartpage
