import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const date = new Date()
  return (
    <div className="py-4" style={{background: "rgb(60,60,60)"}}>
      <div className='d-flex justify-content-center mb-3 d-none d-sm-flex'>
        <FaFacebook size={30} color='white' className='me-3'/>
        <FaPinterest size={30} color='white' className='me-3'/>
        <FaInstagram size={30} color='white'/>
      </div>
      <p className='text-center text-white'>&copy; {date.getFullYear()} by Jade & Andy. Powered and secured by <span><Link to='/' className='text-white'>Wix</Link></span></p>
    </div>
  )
}

export default Footer
