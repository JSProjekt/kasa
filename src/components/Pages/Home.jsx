import React from 'react'
import Banner from '../Layout/Banner.jsx'
import './Home.scss'
import AppartementList from '../Layout/AppartementList.jsx'


function Home() {
  return (
    <div>
    
        <Banner imgBanner={'Imagesource1.png'} title='Chez vous, partout et ailleurs'/>
        <AppartementList />
    
    </div>
  )
}

export default Home
