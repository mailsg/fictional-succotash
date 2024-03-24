import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item'>
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
        </div>
        <div className='item'>
            <h1>Links</h1>
            <span>FAQs</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
        </div>
        <div className='item'>
            <h1>About</h1>
              <span>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </span>
        </div>
        <div className='item'>
            <h1>Contact</h1>
              <span>
                Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
              </span>
        </div>
      </div>
      <div className='bottom'>
        <div className='left'>
          <span className='logo'>SUCCOTASH STORE
          </span>
          <span className='copyright'>&copy; 2024. All Rights Reserved.</span>
        </div>
        <div className='right'>
          <img src='/img/payment.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Footer;