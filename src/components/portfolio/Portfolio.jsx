import './portfolio.css'
import IMG1 from '../../assets/changer.png'
import IMG2 from '../../assets/ecommerce.png'
import IMG3 from '../../assets/kcr.png'
import IMG4 from '../../assets/weather.png'
import IMG5 from '../../assets/travel.png'
import IMG6 from '../../assets/netflix.png'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: 'Color Changer',
      github: 'https://github.com/chidubem34/color-changer',
      demo: 'https://chidubem34.github.io/color-changer'
    },

    {
      id: 2,
      image: IMG2,
      title: 'Ecommerce Website',
      github: 'https://github.com/chidubem34/kodecamp-ecommerce',
      demo: 'https://chidubem34.github.io/kodecamp-ecommerce'
    },


    {
      id: 3,
      image: IMG3,
      title: 'kodecamp recruits',
      github: 'https://github.com/chidubem34/color-changer',
      demo: 'https://chidubem34.github.io/color-changer'
    },


    {
      id: 4,
      image: IMG4,
      title: 'Weather App',
      github: 'https://github.com/chidubem34/weather-app',
      demo: 'https://chidubem34.github.io/weather-app'
    },


    {
      id: 5,
      image: IMG5,
      title: 'Travel Tide',
      github: 'https://github.com/chidubem34/color-changer',
      demo: 'https://chidubem34.github.io/color-changer'
    },
    
    {
      id: 6,
      image: IMG6,
      title: 'Netflix clone',
      github: 'https://github.com/chidubem34/neflix-clone',
      demo: 'https://netflixy-b0e11.web.app/'
    },

  ]


  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article className="portfolio__item" key={id}>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='__blank'>Github</a>
                  <a href={demo} className='btn-primary btn' target='__blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio