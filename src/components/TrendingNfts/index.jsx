import React from 'react'
import "./trendingnfts.css"
import Slider from "react-slick/lib/slider"
import { trending_nfts } from '../../data/TrendingNfts'
import TrendingnftsCard from '../TrendingnftCard'
import Button from '../../button'
const settings ={
  slidesToShow:3,
  slidesToScroll :1,
  autoPlay:true,
  speed:500,
  arrows: false,
};
const TrandingNfts = () => {
 
  return (
    <div className='trending-nfts'>
      <div className='t-nfts-title absolute-center'>
        <span className='heading-gradient' >TRENDING NFTs</span>
        </div>
        <div className='tn-bg-blob'></div>
        <Slider {...settings}>
        {trending_nfts.map((_nft)=>{
            return(
              <TrendingnftsCard nft={_nft}/>
            )
        })
        } 
        </Slider>
        <div className='tn-btn'>
          <Button btnText="See More" type="Secondary" customClass="seemore-btn"/>
        </div>
       
        
      
    </div>
  )
}

export default TrandingNfts