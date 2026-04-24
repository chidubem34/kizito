import './testimonials.css'
import AVTR1 from '../../assets/fff.png'
import AVTR2 from '../../assets/fff.png'
import AVTR3 from '../../assets/fff.png'
import AVTR4 from '../../assets/fff.png'
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaQuoteLeft } from 'react-icons/fa'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialsData = [
  {
    avatar: AVTR1,
    name: 'Sarah Johnson',
    role: 'Product Manager',
    review: 'Kizito is an exceptional developer who truly understands both the technical and design aspects of web development. His attention to detail is remarkable.'
  },
  {
    avatar: AVTR2,
    name: 'Michael Chen',
    role: 'Startup Founder',
    review: 'The quality of work delivered by Kizito exceeded my expectations. He turned our complex requirements into a beautifully functional application.'
  },
  {
    avatar: AVTR3,
    name: 'Amina Okafor',
    role: 'Creative Director',
    review: 'Working with Kizito was a breeze. He communicates effectively and delivers on time. His mastery of React and modern CSS is evident in every project.'
  },
  {
    avatar: AVTR4,
    name: 'David Wilson',
    role: 'Software Engineer',
    review: 'I highly recommend Kizito for any front-end project. His code is clean, well-tested, and performant. Truly a pleasure to work with.'
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper 
        className="container testimonials__container reveal"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {testimonialsData.map(({ avatar, name, role, review }, index) => (
          <SwiperSlide className="testimonial" key={index}>
            <div className="testimonial__quote-icon">
              <FaQuoteLeft />
            </div>
            
            <p className="client__review">
              &quot;{review}&quot;
            </p>
            
            <div className="client__info">
              <div className="client__avatar-wrap">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
              </div>
              <div className="client__details">
                <h5 className="client__name">{name}</h5>
                <small className="client__role">{role}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials