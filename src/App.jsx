import React from 'react'
import "./App.css"
import Brand from './components/Brandintegration'
import Footer from './components/Footer'
import Header from './components/Header'
import InfoSection from './components/Infosec'
import TopFold from './components/TopFold'
import TrendingNfts from "./components/TrendingNfts"

const App = () => {
  return (
    <div className='max-width'>
     <Header/>
     <TopFold/>
     <Brand/>
     <TrendingNfts/>
     <InfoSection/>
     <Footer/ >
     

    </div>
  )
}

export default App
