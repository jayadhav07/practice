import React from 'react'
import "../Style/KYCHeader.css"
import logo from '../assets/adamLogo.png'
const KycHeader = () => {
  return (
    <>
       <header className='kycHeader'>
    <img src={logo} alt='logo'/>
  </header>
  <hr style={{width:"80%", margin:"auto"}}  />
  <h2>KYC Form</h2>
    </>
  )
}

export default KycHeader