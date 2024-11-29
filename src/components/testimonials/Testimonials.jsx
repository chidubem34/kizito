import './testimonials.css'
import AVTR1 from '../../assets/fff.png'
import AVTR2 from '../../assets/fff.png'
import AVTR3 from '../../assets/fff.png'
import AVTR4 from '../../assets/fff.png'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination'

const Testimonials = () => {
  const data = [
    {
      avatar: AVTR1,
      name: 'Cypress',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum iste, nobis quibusdam unde labore assumenda? Delectus reiciendis nemo aperiam quo hic ea tempora quam cumque molestiae, odit reprehenderit beatae?'
    },

    {
      avatar: AVTR2,
      name: 'Cypress',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum iste, nobis quibusdam unde labore assumenda? Delectus reiciendis nemo aperiam quo hic ea tempora quam cumque molestiae, odit reprehenderit beatae?'
    },

    {
      avatar: AVTR3,
      name: 'Clever Programmer',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum iste, nobis quibusdam unde labore assumenda? Delectus reiciendis nemo aperiam quo hic ea tempora quam cumque molestiae, odit reprehenderit beatae?'
    },

    {
      avatar: AVTR4,
      name: 'Kenzy',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rerum iste, nobis quibusdam unde labore assumenda? Delectus reiciendis nemo aperiam quo hic ea tempora quam cumque molestiae, odit reprehenderit beatae?'
    },
  ]

  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules={[Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, review, name }, index) => {
            return (
              <SwiperSlide className="testimonial" key={index}>
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials