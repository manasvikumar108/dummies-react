import './Footer.css';

import React from 'react'

const Footer = () => {
  return (
    <>
        <div id='main'>
            <div id='first'>
                <div className='columns'>
                    <h2 className='footerHeading'>Quick Links</h2>
                    <a href="">About For Dummies</a>
                    <a href="">Contact Us</a>
                    <a href="">Activate a Book Pin</a>
                </div>
                <div className='columns'>
                    <h2 className='footerHeading'>Connect</h2>
                    <a href="">Meta</a>
                    <a href="">Twitter</a>
                    <a href="">Youtube</a>
                </div>
                <div className='columns'>
                    <h2 className='footerHeading'>About Dummies</h2>
                    <p>Dummies has always stood for taking on complex concepts and making them easy to understand. Dummies helps everyone be more knowledgeable and confident in applying what they know. Whether it's to pass that big test, qualify for that big promotion or even master that cooking technique; people who rely on dummies, rely on it to learn the critical skills and relevant information necessary for success.</p>
                </div>
            </div>
            <div>
                
            </div>

        </div>
    </>
  )
}

export default Footer