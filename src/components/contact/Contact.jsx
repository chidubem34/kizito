import './contact.css'
import { MdOutlineEmail, MdOutlineLocationOn } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'

const contactOptions = [
  {
    icon: <MdOutlineEmail />,
    title: 'Email',
    info: 'agbowachidubem@gmail.com',
    link: 'mailto:kizito65623281@gmail.com',
  },
  {
    icon: <RiMessengerLine />,
    title: 'Messenger',
    info: 'Kizito Chidubem',
    link: 'https://m.me/yourusername', // Adjust appropriately
  },
  {
    icon: <BsWhatsapp />,
    title: 'WhatsApp',
    info: '+234 706 5623 281',
    link: 'https://wa.me/+2347065623281',
  },
]

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Assuming EmailJS or similar is used, currently just a placeholder
    alert('Message sent successfully! (Placeholder)');
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__info">
          <div className="contact__info-header reveal-left">
            <h3>Let&apos;s talk about your project</h3>
            <p>I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          
          <div className="contact__options">
            {contactOptions.map(({ icon, title, info, link }, index) => (
              <article className={`contact__option reveal-left reveal-delay-${index}`} key={title}>
                <div className="contact__option-icon">{icon}</div>
                <div>
                  <h4>{title}</h4>
                  <p>{info}</p>
                  <a href={link} target="_blank" rel="noreferrer">Send a message</a>
                </div>
              </article>
            ))}
          </div>
        </div>
        
        <form ref={form} onSubmit={sendEmail} className="reveal-right">
          <div className="form__group">
            <input type="text" name="name" placeholder="Full Name" required />
            <label>Name</label>
          </div>
          <div className="form__group">
            <input type="email" name="email" placeholder="Email Address" required />
            <label>Email</label>
          </div>
          <div className="form__group">
            <textarea name="message" rows="7" placeholder="Your Message" required />
            <label>Message</label>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact