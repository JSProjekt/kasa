import  "./DescriptionComponent.scss"
import React, {useState} from "react"

function DescriptionComponent (props) {
    const [ContentDisplay, setContentDisplay] = React.useState(false)
    const displayContent = () => { setContentDisplay(!ContentDisplay) }

    return (
        <div className='description_component'>
        <p className='description_title'>
            <span>{props.title}</span>
            <i className="fa-solid fa-chevron-up" onClick={displayContent}></i>
            </p>

        {ContentDisplay && <p className='description_content'>
        {props.content}
        </p>}
    </div>
    )
}

export default DescriptionComponent