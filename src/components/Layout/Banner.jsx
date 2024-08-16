import React, { useState } from "react";
import "./Banner.scss";
import {useLocation} from 'react-router-dom';

function Banner({imgBanner, title}) {
  // const imgLocation = useLocation();
  // const imgBanner = imgLocation.pathname === '/' ? '/Imagesource1.png' : '/Imagesource2.png';
  return (
    <div className="img__banner" style={{backgroundImage: `url(${imgBanner})`}}>
        <h2>{title}</h2>
    </div>
  );
};

export default Banner;