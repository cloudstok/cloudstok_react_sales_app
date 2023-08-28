import React from 'react'
import './footer.css'
import CloudStok from '../../assets/images/headerlogo.png'
import image from '../../assets/images/image-1-300x148.jpg'
import {CgFacebook} from 'react-icons/cg'
import {AiOutlineTwitter} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {IoLogoDribbble} from 'react-icons/io'
import {RiLinkedinFill} from 'react-icons/ri'

const Footer = () => {
  return (
   <>
   <div className="footer-section">
      <div className='cloudstok-footer'>
        <div className="cloud-image">
          <img src={CloudStok} alt="" />
        </div>

        <div className="company-container">
          <h3>Our Company</h3>
          <p>who are we</p>
          <p>Services</p>
          <p>Contact Us</p>
          <p>Blogs</p>
        </div>

        <div className="company-container">
          <h3>What We Do</h3>
          <p>App Development & Modernization</p>
          <p>App Testing & Consulting</p>
          <p>DevOps as a Service</p>
          <p>Cloud Manage Service</p>
        </div>

        <div className="aws-image">
          <img src={image} alt="" />
        </div>
    </div>

    <div className="copy-section">
      <div className="copy-footert">
        <div className="copy-para">
          <p>Cookies | Security & Data Protection Practices | Marketing Privacy Notice | Candidate Privacy Notice  | Diversity Inclusion and <br /> Opportunity | Candidate Privacy Notice (Summary) | Vulnerability Disclosure Notice</p>
        </div>
        <div className="copy-icon">
          <p>&copy; 2023 CloudStok. All rights reserved</p>
          <div className="icon-box">
            <p><CgFacebook/></p>
            <p><AiOutlineTwitter/></p>
            <p><FaPinterestP/></p>
            <p><IoLogoDribbble/></p>
            <p><RiLinkedinFill/></p>
          </div>
        </div>
      </div>
    </div>
    </div>

   </>
  )
}

export default Footer
