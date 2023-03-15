import React from 'react'
import "./brand.css"
import logo from '../../assets/bnb.png'
import logo2 from '../../assets/Ford-Logo.png'
import logo3 from '../../assets/nnn.png'

const Brand = () => {
  return (
    <div className='brand-integration absolute-center'>
    
      <div className='logo logo1'><img className='bi-logos' src={logo} alt="brand" /> <span className='text absolute-center'>Matricx</span></div>
      <div className='logo logo2'><img className='bi-logos' src={logo2} alt="brand" /><span className='text absolute-center'>Nerux</span></div>
      <div className='logo logo3'><img className='bi-logos' src={logo3} alt="brand" /><span className='text absolute-center'>indoure</span></div>



    </div>
  )
}

export default Brand