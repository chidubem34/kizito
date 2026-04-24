import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">

        <div className="header__text">
          <div className="header__badge-wrap">
            <span className="header__badge">
              <span className="header__badge-dot" />
              Available for hire
            </span>
          </div>

          <h1 className="header__title">
            Hi, I&apos;m <span className="text-gradient">Kizito</span>
            <br />
            <span className="header__title-sub">Chidubem</span>
          </h1>

          <div className="header__role-wrap">
            <span className="header__role">Front-end Developer</span>
            <span className="header__role-divider">•</span>
            <span className="header__role">UI Designer</span>
          </div>

          <p className="header__bio">
            I craft beautiful, performant web experiences with clean code,
            modern design, and a passion for pixel-perfect detail.
          </p>

          <CTA />
          <HeaderSocials />
        </div>

        <div className="me">
          <div className="me__glow" aria-hidden="true" />
          <div className="me__ring me__ring--outer" />
          <div className="me__ring me__ring--inner" />
          <div className="me__photo">
            <img src={ME} alt="Kizito Chidubem" />
          </div>
          {/* Floating tech badges */}
          <span className="me__float-badge me__float-badge--1">⚛️ React</span>
          <span className="me__float-badge me__float-badge--2">🎨 CSS</span>
          <span className="me__float-badge me__float-badge--3">⚡ Vite</span>
        </div>

        <a href="#about" className="scroll__down">
          <span>Scroll</span>
          <div className="scroll__line">
            <div className="scroll__dot" />
          </div>
        </a>

      </div>
    </header>
  )
}

export default Header