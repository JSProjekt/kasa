import React from 'react'
import './Appartpage.scss'
import { useParams } from 'react-router-dom'

function Appartpage() {
    const {id} = useParams()
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
                <h3>Alexandre Dumas</h3>
                <div className='owner_profil'></div>
                <div className='owner_stars'></div>
            </div>
            </div>
            <div className='appart_page_description'>
                <p>Description</p>
                <p>Located in the heart of Paris, this loft is perfect for a romantic getaway. It is a 5 minute walk from the metro and the canal. The neighborhood is very lively and full of restaurants and bars.</p>
            </div>
            <div className='appart_page_description'>
                <p>Located in the heart of Paris, this loft is perfect for a romantic getaway. It is a 5 minute walk from the metro and the canal. The neighborhood is very lively and full of restaurants and bars.</p>
            </div>
        </div>
    )
}

export default Appartpage
