import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  const links = [
    { href: '#', icon: <AiOutlineHome />, label: 'Home' },
    { href: '#about', icon: <AiOutlineUser />, label: 'About' },
    { href: '#experience', icon: <BiBook />, label: 'Skills' },
    { href: '#services', icon: <RiServiceLine />, label: 'Services' },
    { href: '#contact', icon: <BiMessageSquareDetail />, label: 'Contact' },
  ]

  return (
    <nav id="floating-nav">
      {links.map(({ href, icon, label }) => (
        <a
          key={href}
          href={href}
          onClick={() => setActiveNav(href)}
          className={activeNav === href ? 'active' : ''}
          title={label}
        >
          {icon}
          <span className="nav__label">{label}</span>
        </a>
      ))}
    </nav>
  )
}

export default Nav