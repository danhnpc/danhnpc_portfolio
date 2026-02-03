import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const [slide, setSlide] = useState(0)

  const images = ['IMG_5905.JPG', 'IMG_5911.JPG', 'IMG_5914.JPG', 'IMG_5988.JPG', 'IMG_6084.JPG', 'IMG_5980.JPG', 'IMG_6123(1).jpg', 'IMG_5949(1).jpg']

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % images.length), 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="home-page">
      <section className="hero-carousel">
        <div className="carousel-slides">
          {images.map((img, i) => (
            <div key={i} className={'carousel-slide' + (i === slide ? ' active' : '')}>
              <img src={'/images/' + img} alt={'Photo ' + i} />
            </div>
          ))}
        </div>
        <div className="carousel-content">
          <h1 className="heading-1">Capturing Moments</h1>
          <p className="text-subtitle">Between lines of code, I find my balance through photography — capturing light, people, and quiet moments.</p>
        </div>
        <button className="carousel-arrow carousel-prev" onClick={() => setSlide(s => (s - 1 + images.length) % images.length)}>‹</button>
        <button className="carousel-arrow carousel-next" onClick={() => setSlide(s => (s + 1) % images.length)}>›</button>
        <div className="carousel-dots">
          {images.map((_, i) => <button key={i} className={'dot' + (i === slide ? ' active' : '')} onClick={() => setSlide(i)} />)}
        </div>
      </section>

      <section className="featured-preview">
        <div className="container">
          <div className="preview-content">
            <div className="preview-header-section">
              <h2 className="heading-2">Explore Collections</h2>
              <div className="header-divider"></div>
            </div>
            <p className="section-description">Discover two distinct collections that capture different aspects of my photography — from intimate indoor moments to expansive outdoor landscapes.</p>
            <Link to="/portfolio" className="view-all-link">Explore All Work →</Link>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-header">
              <h2 className="heading-2">Get In Touch</h2>
              <div className="cta-divider"></div>
            </div>
            <p className="cta-text">Have a project in mind or want to collaborate? I'd love to hear from you and explore what we can create together.</p>
            <Link to="/contact" className="cta-button">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
