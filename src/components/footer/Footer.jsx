import './footer.css'
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container footer__container">
        <div className="footer__brand">
          <a href="#" className="footer__logo">
            kizito<span className="text-gradient">.</span>
          </a>
          <p className="footer__tagline">
            Building digital experiences that matter.
          </p>
          <div className="footer__socials">
            <a href="https://github.com/chidubem34" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer"><FaXTwitter /></a>
          </div>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul className="permalinks">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Skills</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__contact">
          <h4>Contact Info</h4>
          <ul className="footer__contact-list">
            <li>Lagos, Nigeria</li>
            <li>agbowachidubem@gmail.com</li>
            <li>+234 706 5623 281</li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <small>&copy; {currentYear} Kizito Chidubem. All rights reserved.</small>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer