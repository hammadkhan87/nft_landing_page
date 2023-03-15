import React from 'react'
import "./cards.css"

const TrendingnftsCard = (props) => {
  const {nft} = props;
  return (
    <div className='trending-card absolute-center'>
     <div className='tc-inner-wrapper'>
      <div className='tc-content'>
        <img src={nft.banner} alt={nft.user_name} className='tc-banner' />
        <div className='tc-userinfo'>
          <div className='tc-ui-left'>
            <img src={nft.user_logo} alt={nft.user_name} className="tc-user-logo"  />
            <div>
              <div className='tc-ui-username'>
                {nft.user_name}

              </div>
              <div className='tc-ui-userhandle'>
                {nft.userhandle}
                
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>

    </div>
  )
}

export default TrendingnftsCard