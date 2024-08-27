import React from "react";
import "./Banner.scss";
import {useLocation} from 'react-router-dom';

function Banner() {
 const imgLocation = useLocation();
 const imgBanner = imgLocation.pathname === '/' ? '/Imagesource1.png' : '/Imagesource2.png';
  return (
    <div className="img__banner" style={{backgroundImage: `url(${imgBanner})`}}>
      <div className="overlay"></div>
        {imgLocation.pathname !== '/about' && <h2>Chez vous, partout et ailleurs</h2>}
    </div>
  );
};

export default Banner;