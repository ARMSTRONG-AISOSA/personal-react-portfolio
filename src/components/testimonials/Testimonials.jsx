import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

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
    client: 'Jane Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis veniam, soluta mollitia eaque voluptatibus vel voluptas. Numquam, modi sint dolorum ipsam nemo magni quaerat dolores ipsum aperiam ducimus quisquam',
    alt: 'Avater One',
  },
  {
    id: 2,
    image: AVTR2,
    client: 'James Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis veniam, soluta mollitia eaque voluptatibus vel voluptas. Numquam, modi sint dolorum ipsam nemo magni quaerat dolores ipsum aperiam ducimus quisquam',
    alt: 'Avater Two',
  },
  {
    id: 3,
    image: AVTR3,
    client: 'Jake Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis veniam, soluta mollitia eaque voluptatibus vel voluptas. Numquam, modi sint dolorum ipsam nemo magni quaerat dolores ipsum aperiam ducimus quisquam',
    alt: 'Avater Three',
  },
  {
    id: 4,
    image: AVTR4,
    client: 'Joy Doe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum blanditiis veniam, soluta mollitia eaque voluptatibus vel voluptas. Numquam, modi sint dolorum ipsam nemo magni quaerat dolores ipsum aperiam ducimus quisquam',
    alt: 'Avater Four',
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
