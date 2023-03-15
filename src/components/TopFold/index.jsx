import React from 'react'
import Button from '../../button'
import "./topfold.css"

const TopFold = () => {
  return (
    <div className='topfold absolute-center'>
     <div className='tf-left'>
      <div className='tf-heading '>Discover collect, & sell {" "} <span className='heading-gradient'>Extraordinary</span>NFTs</div>
      <div className='tf-description'>the leading NFT Marketplace on Etherum Home  to the next generation
      of digital creators. Discover the best NFT collections.</div>
      <div className='tf-left-btns'><Button btntype='PRIMARY'  btnText = 'Explore' />
      <Button btntype='SECONDARY' btnText='Create' customclass='tf-left-secondary-btn'/>
      </div>
      <div className='tf-left-infostats'>
        <div className='tf-is-infoitem absolute-center'>
          <div className='tf-infoitem-count'>200k+</div>
          <div className='tf-infoitem-label'>Collections</div>

        </div>
        <div className='tf-is-infoitem absolute-center'>
          <div className='tf-infoitem-count'>10k+</div>
          <div className='tf-infoitem-label'>Artist</div>

        </div>
        <div className='tf-is-infoitem absolute-center'>
          <div className='tf-infoitem-count'>423k+</div>
          <div className='tf-infoitem-label'>Community</div>

        </div>
      </div>
     </div>
     
     <div className='tf-right'>
      <div className='tf-r-bg-blob'></div>
        <div className='tf-right-diamond'>
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-bannar'
             src='https://openseauserdata.com/files/71970845bfa2c3d0fb9104487cf5fe83.gif' />
          </div>
        
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-bannar'
             src='https://openseauserdata.com/files/efa36a73d372d4a1011488da82c5b04a.gif' />
          </div>
        
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-bannar'
             src='https://openseauserdata.com/files/765c30d3706b04f5b19b30344097dac1.gif' />
          </div>
       
          <div className='tf-r-diamond-item absolute-center'>
            <img className='tf-r-diamond-img' alt='diamond-bannar'
             src='https://gifsec.com/wp-content/uploads/2022/12/nft-gif-1.gif' />
          </div>
        </div>
        </div>
    </div>
  )
}

export default TopFold