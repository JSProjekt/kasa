import React from 'react'
import './AppartPageHead.scss'

function AppartHead({ appart }) {

    const { name } = appart.host;
    const [firstName, lastName] = name.split(' ');
    const array5 = [1, 2, 3, 4, 5];


    return (
        <div className='appart_page_head'>
            <div className='appart_page_title'>
                <h1>{appart.title}</h1>
                <h2>{appart.location}</h2>
                <div className='appart_tags'>
                    {appart.tags.map((tag) => (<span key={tag}>{tag}</span>))}
                </div>
            </div>
            <div className='owner'>
                <div className='owner_details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className='owner_profil'>
                        <img src={appart.host.picture} alt='' />
                    </div>
                </div>
                <div className='owner_stars'>
                    {array5.map((num) => (
                        <span key={num} className={appart.rating >= num ? "mode_on" : ""}>★</span>
                    ))}
                    </div>
            </div>
        </div>
    );
}

export default AppartHead
