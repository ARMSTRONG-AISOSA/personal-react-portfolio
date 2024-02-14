import React from 'react';
import './contact.css';
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";

// emailjs
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {

  // Emailjs
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ku92yhq', 'template_gcr6neu', form.current, {
        publicKey: 'mOckuIybXSH4y9QdL',
      })

    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        {/* Left */}
        <div className="contact__options">
          {/* Email */}
          <article className="contact__option">
            <MdOutlineMailOutline className="contact__option-icon" />
            <h4>Email</h4>
            <h5>Ammycan6@gmail.com</h5>
            <a href="mailto:ammycan6@gmail.com" target='_blank' rel="noreferrer">Send a message</a>
          </article>

          {/* Messenger */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Omoregie Armstrong</h5>
            <a href="#" >Send a Message</a>
          </article>

          {/* Whatsapp */}
          <article className="contact__option">
            <FaWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2349095466063</h5>
            <a href="https://wa.me/+2349095466063" target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

        {/* Right */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" id="name" placeholder='Enter your full name' required />
          <input type="email" name="email" id="email" placeholder='Enter your email' required />
          <textarea name="message" id="message" rows="7" placeholder='Write your message to me' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
