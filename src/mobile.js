import React from 'react'
import './mobile.css'
import alert from './alert.png'

export default function Mobile() {
  return (
    <div style={{background:'-webkit-linear-gradient(120deg,#8739f9,#00b7ff)'}} >
    <div className='mobile'>
        <img src={alert} style={{height:'50px'}}/>
        <h3 style={{textAlign:'center'}}>Mobile version under development</h3>
        <p style={{textAlign:'center'}}>Apologies for the inconvenience. Our website is under development. <b>Please use desktop version </b> for optimal browsing. Thank you.</p>
        <p style={{textAlign:'end'}}>- Sushant Kumar</p>
    </div>
    </div>
  )
}
