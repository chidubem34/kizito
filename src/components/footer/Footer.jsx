import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>kizito</a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#testimonials">Tesimonials</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>

        <a href="https://instagram.com">
          <FiInstagram />
        </a>

        <a href="https://x.com">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Kizito. All rights reserved. 
        </small>
      </div>
    </footer>
  )
}

export default Footer