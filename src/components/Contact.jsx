import React, { useState } from 'react'
import './Contact.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Interested in our crops or want to partner with us? We'd love to hear from you.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="welcome-card">
              <h3>Let's Grow Together</h3>
              <p>
                Whether you're interested in bulk purchases, partnership opportunities, 
                or simply want to learn more about sustainable farming in Borno State, 
                we're here to help.
              </p>
              <p>
                Fill out the form and our team will get back to you within 24-48 hours.
              </p>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div>
                <h3>Visit Our Farm</h3>
                <p>Anouka Farms<br />
                   Bolakil Farm Area<br />
                   Damboa Local Government<br />
                   Borno State, Nigeria</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
