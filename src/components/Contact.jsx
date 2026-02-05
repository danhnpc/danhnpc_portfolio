import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              Interested in collaborating or have a project in mind?
              Feel free to reach out. I'd love to hear from you!
            </p>
            <div className="contact-details">
              <div className="detail-item">
                <span className="label">Email</span>
                <a href="mailto:danhnpc2000@gmail.com">danhnpc2000@gmail.com</a>
              </div>
              <div className="detail-item">
                <span className="label">Phone</span>
                <a href="tel:+84979399749">+84 (979) 399-749</a>
              </div>
              <div className="detail-item">
                <span className="label">Location</span>
                <p>Your City, Country</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                Thank you! I'll get back to you soon.
              </div>
            )}

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
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
