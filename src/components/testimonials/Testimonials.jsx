import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.png';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';
import AVTR5 from '../../assets/avatar5.jpg';
import AVTR6 from '../../assets/avatar6.jpg';

// Swiper
import {Pagination, Autoplay} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';




const data = [
  {
    id: 1,
    image: AVTR1,
    client: 'Benjamin Victory',
    review: 'Armstrong Omoregie is an excellent individual  that has served my business, positioning my brand to target its right audience by building a user-friendly website for my brand that has attracted more clients. His knowledge and experience in business consulting gives him an edge as a web developer. It is always a pleasure doing business with him.',
    alt: 'Benjamin Victory',
  },
  {
    id: 2,
    image: AVTR2,
    client: 'Sonia Ibiang',
    review: 'Armstrong is outstanding, never giving up until he achieves results and what\'s even better is his ability to work so well with others, lifting everyone to do their best. You can always count on him to deliver top-notch work, with a focus on excellence and adding value. Having Armstrong on your team means you\'re in for some serious growth and success!',
    alt: 'Sonia Ibiang',
  },
  {
    id: 3,
    image: AVTR3,
    client: 'Victor Powei',
    review: 'Armstrong is a very good team player and collaborator. He also approaches his work with a different level of attention to detail, often helping you see the problems you might encounter on projects before you begin, so you can narrow things down properly and build sustainable solutions.',
    alt: 'Victor Powei',
  },
  {
    id: 4,
    image: AVTR4,
    client: 'Edwin Omwanghe',
    review: 'He always aims to deliver perfect results and has continued to stun me with how impressive his front-end products are, always building websites with seamless navigation and user-friendly interfaces. His attention to detail and commitment sets him apart from others in his field.  There is no better man I know to deliver the great websites as he does.',
    alt: 'Edwin Omwanghe',
  },
  {
    id: 5,
    image: AVTR5,
    client: 'Osahon Evbuomwan',
    review: 'Armstrong stands out as one of the most efficient and driven individuals I\'ve had the privilege to collaborate with. His intuitive instincts and remarkable resourcefulness are truly admirable.',
    alt: 'Osahon Evbuomwan',
  },
  {
    id: 6,
    image: AVTR6,
    client: 'Okon Godwin',
    review: 'Who is he? He is dedicated to the job and exceeding expectations, forward-thinking, reliable, and result-oriented. That\'s who Armstrong is as a person and Web Developer.',
    alt: 'Okon Godwin',
  },
]

// NB: use data.map(({ image, client, review, alt}, index )
//  <article key={index}
// When no id id present

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
       
      >
        {
          data.map(({ id, image, client, review, alt }) => {
            return (
              <SwiperSlide key={id} className="testimonial" >
                <div className='client__avatar'>
                  <img src={image} alt={alt} />
                </div>

                <h5 className='client__name'>{client}</h5>
                <small className='client__review'>
                  {review}
                </small>
              </SwiperSlide>
            )
          })
        }

      </Swiper>
    </section >
  )
}

export default Testimonials
