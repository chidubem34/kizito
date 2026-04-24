import './about.css'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/picture.jpeg'

const About = () => {
  const stats = [
    { icon: <FaAward />, title: 'Experience', value: '3+ Years' },
    { icon: <FiUsers />, title: 'Clients', value: '7 Served' },
    { icon: <VscFolderLibrary />, title: 'Projects', value: '20+ Done' },
  ]

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me reveal-left">
          <div className="about__me-image">
            <img src={ME} alt="Kizito Chidubem" />
            <div className="about__me-overlay" />
          </div>
        </div>

        <div className="about__content reveal-right">
          <div className="about__cards">
            {stats.map(({ icon, title, value }, i) => (
              <article className={`about__card reveal reveal-delay-${i + 1}`} key={title}>
                <div className="about__card-icon">{icon}</div>
                <h5>{title}</h5>
                <small>{value}</small>
              </article>
            ))}
          </div>

          <p>
            I&apos;m a passionate Front-end Developer based in Nigeria, specialising
            in building polished, high-performance web applications. I love
            turning complex problems into simple, beautiful, and intuitive
            designs using React, modern CSS, and clean code practices.
          </p>

          <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About