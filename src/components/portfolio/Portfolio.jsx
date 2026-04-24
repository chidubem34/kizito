import './portfolio.css'
import IMG1 from '../../assets/changer.png'
import IMG2 from '../../assets/ecommerce.png'
import IMG3 from '../../assets/kcr.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/travel.png'
import IMG6 from '../../assets/netflix.png'
import { BsGithub } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

const portfolioData = [
  {
    id: 1, 
    image: IMG1, 
    title: 'Color Changer',
    category: 'Web App',
    github: 'https://github.com/chidubem34/color-changer',
    demo: 'https://chidubem34.github.io/color-changer',
  },
  {
    id: 2, 
    image: IMG2, 
    title: 'Ecommerce Website',
    category: 'E-Commerce',
    github: 'https://github.com/chidubem34/kodecamp-ecommerce',
    demo: 'https://chidubem34.github.io/kodecamp-ecommerce',
  },
  {
    id: 3, 
    image: IMG3, 
    title: 'Kodecamp Recruits',
    category: 'Hiring Platform',
    github: 'https://github.com/chidubem34/color-changer',
    demo: 'https://chidubem34.github.io/color-changer',
  },
  {
    id: 4, 
    image: IMG4, 
    title: 'Weather App',
    category: 'API Integration',
    github: 'https://github.com/chidubem34/weather-app',
    demo: 'https://chidubem34.github.io/weather-app',
  },
  {
    id: 5, 
    image: IMG5, 
    title: 'Travel Tide',
    category: 'Booking App',
    github: 'https://github.com/chidubem34/color-changer',
    demo: 'https://chidubem34.github.io/color-changer',
  },
  {
    id: 6, 
    image: IMG6, 
    title: 'Netflix Clone',
    category: 'Entertainment',
    github: 'https://github.com/chidubem34/neflix-clone',
    demo: 'https://netflixy-b0e11.web.app/',
  },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {portfolioData.map(({ id, image, title, category, github, demo }, index) => (
          <article className="portfolio__item reveal-scale" key={id} style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="portfolio__item-image-wrap">
              <img src={image} alt={title} className="portfolio__item-image" />
              <div className="portfolio__overlay">
                <div className="portfolio__cta-group">
                  <a href={github} className="portfolio__link" target="_blank" rel="noreferrer" aria-label="GitHub Repository">
                    <BsGithub />
                  </a>
                  <a href={demo} className="portfolio__link portfolio__link--primary" target="_blank" rel="noreferrer" aria-label="Live Demo">
                    <HiOutlineExternalLink />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="portfolio__info">
              <span className="portfolio__category">{category}</span>
              <h3 className="portfolio__title">{title}</h3>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Portfolio