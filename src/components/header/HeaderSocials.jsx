import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/chidubem34" target="_blank" rel="noreferrer" aria-label="GitHub">
        <BsGithub />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BsLinkedin />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
        <BsInstagram />
      </a>
    </div>
  )
}

export default HeaderSocials