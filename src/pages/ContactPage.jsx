import { useState } from 'react'
import './ContactPage.css'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }
  }

  return (
    <div className="contact-page">
      <section className="contact-content">
        <div className="container container-sm">
          <h1 className="heading-1">Get In Touch</h1>
          <p className="contact-intro text-subtitle">
            I'd love to hear about your photography needs or collaborate on a project. Feel free to reach out using the form below or contact me directly.
          </p>

          <div className="contact-main">
            <div className="contact-info">
              <h2 className="heading-3">Contact Information</h2>

              <div className="contact-details">
                <div className="detail-item">
                  <span className="detail-label">Email</span>
                  <a href="mailto:your.email@example.com">your.email@example.com</a>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Phone</span>
                  <a href="tel:+84123456789">+84 (123) 456-789</a>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Location</span>
                  <p>Your City, Vietnam</p>
                </div>

                <div className="detail-item">
                  <span className="detail-label">Social</span>
                  <div className="social-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">Zalo</a>
                  </div>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="success-message">
                  <p>✓ Message sent successfully! I'll get back to you soon.</p>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Photography Inquiry"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
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
    </div>
  )
}
