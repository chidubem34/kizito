import './services.css'
import { HiOutlineCode } from 'react-icons/hi'
import { FiServer } from 'react-icons/fi'
import { SiWordpress } from 'react-icons/si'
import { BiCheck } from 'react-icons/bi'

const servicesData = [
  {
    title: 'WordPress',
    icon: <SiWordpress />,
    list: [
      'Custom theme design & development',
      'Plugin customisation & integration',
      'SEO optimisation & performance tuning',
      'E-commerce solutions with WooCommerce',
      'Responsive & mobile-friendly design',
      'Website maintenance & support',
    ],
  },
  {
    title: 'Frontend Development',
    icon: <HiOutlineCode />,
    list: [
      'Responsive UIs with React & Next.js',
      'Pixel-perfect implementation of designs',
      'Cross-browser compatibility',
      'Performance optimisation',
      'Interactive animations & transitions',
      'Component library development',
      'Accessibility (a11y) best practices',
    ],
  },
  {
    title: 'Backend Development',
    icon: <FiServer />,
    list: [
      'REST API design & development',
      'Node.js & Express server setup',
      'MongoDB database design',
      'User authentication & authorisation',
      'Third-party API integration',
      'Server deployment & management',
    ],
  },
]

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {servicesData.map(({ title, icon, list }, index) => (
          <article className={`service reveal reveal-delay-${index}`} key={title}>
            <div className="service__head">
              <div className="service__icon-wrap">
                <span className="service__icon">{icon}</span>
              </div>
              <h3>{title}</h3>
            </div>
            
            <ul className="service__list">
              {list.map((item, i) => (
                <li key={i}>
                  <BiCheck className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            
            <div className="service__footer" />
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services