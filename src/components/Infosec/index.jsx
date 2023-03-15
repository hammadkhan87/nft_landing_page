import React from 'react'
import "./infosection.css"
import { Info_Items } from '../../data/InfoItems'
import InfoCards from '../InfoCards'


const InfoSection = () => {
  return (
    <div className='info-section absolute-center'>
      <div className='is-heading'>
        <span className='heading-gradient info-heading'>Create and sell your NFTs</span>
      </div>
      <div className='info-card-section absolute-center'>
        {Info_Items.map((item)=>{
          return(<InfoCards title={item.section_title } logo={item.logo} description={item.description}/>)
        })}
        
      </div>
    </div>
  )
}

export default InfoSection