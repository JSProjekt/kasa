import React from 'react'
import Banner from '../Layout/Banner.jsx'
import Apparts from '../Layout/Apparts.jsx'
import Layout from '../Layout/Layout.jsx'
import './Home.scss'


function App() {
  return (
    <div>
      <Layout>
        <Banner />
        <Apparts />
      </Layout>
    </div>
  )
}

export default App
