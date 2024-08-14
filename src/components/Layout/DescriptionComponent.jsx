import  "./DescriptionComponent.scss"
import React from "react"

function DescriptionComponent () {
    return (
        <div className='description_component'>
        <p className='description_title'>
            <span>Description</span>
            <i className="fa-solid fa-chevron-up"></i>
            </p>

        <p className='description_content'>
        Located in the heart of Paris, this loft is perfect for a romantic getaway. It is a 5 minute walk from the metro and the canal. The neighborhood is very lively and full of restaurants and bars.
        </p>
    </div>
    )
}

export default DescriptionComponent