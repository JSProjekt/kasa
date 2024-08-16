import React, { useState } from "react";
import "./Banner.scss";
import {useLocation} from 'react-router-dom';

function Banner() {
  const imgLocation = useLocation();
  const imgBanner = imgLocation === '/home' ? '/imagesource1.png' : '/imagesource2.png';
  return (
    <div className="img__banner">
      <img src={imgBanner}/>
        <h2>Chez vous, partout et ailleurs</h2>
    </div>
  );
};

export default Banner;