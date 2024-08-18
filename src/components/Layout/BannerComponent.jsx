import React from 'react'
import './BannerComponent.scss'
import { useState } from 'react'

function BannerComponent({array}) {
const [picDisplay, setPicDisplay] = useState(0);

const displayClass = (i) => {
  if (i === picDisplay) 
    return 'display_picture';
  
};

const nextPic = () => {
  setPicDisplay((picDisplay + 1) % array.length);
  
};
const prevPic = () => {
  setPicDisplay((picDisplay - 1 + array.length) % array.length);
};

  return (
    <div className='banner_component'>
      <div className='banner_component_img'>
    {array.map((image, index) => (<img key={image} src={image} alt="" className= {displayClass(index)}/> ))}
    </div>
    <button className='preview_btn' onClick={prevPic} > <i className="fa-solid fa-chevron-right"></i></button>
    <button className='next_btn' onClick={nextPic} > <i className="fa-solid fa-chevron-left"></i></button>
</div>
  )
}

export default BannerComponent
