import "./DescriptionComponent.scss"
import React, { useState } from "react"

function DescriptionComponent(props) {
    const [ContentDisplay, setContentDisplay] = React.useState(false)
    const displayContent = () => { setContentDisplay(!ContentDisplay) }

    const [isRotated, setIsRotated] = useState(false);

    const handleIconClick = () => {
        setIsRotated(!isRotated);
    }

    return (
        <div className='description_component'>
            <p className='description_title'>
                <span>{props.title}</span>
                <i className={`fa-solid fa-chevron-up ${isRotated ? 'rotated' : ''}`} onClick={() => { handleIconClick(); displayContent(); }}></i>
        </p>

        {
        ContentDisplay && <p className='description_content'>
            {props.content}
        </p>
    }
    </div >
    )
}

export default DescriptionComponent

// soit props.content soit props.equipements et on affiche une list