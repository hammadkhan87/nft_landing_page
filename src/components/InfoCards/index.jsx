import React from 'react'
import "./infocards.css"

const InfoCards = (props) => {
    const {logo , title ,description}=props;

  return (
    <div className='info-cards absolute-center'>
      <img  className='logo' src={logo} alt="logo" />
       <div className='card-title'>{title}</div>
       <div className='card-description'>{description}</div>
    
    </div>

  )
}

export default InfoCards