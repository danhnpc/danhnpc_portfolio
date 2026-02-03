import { Link } from 'react-router-dom'
import './AboutPage.css'

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-layout">
            <div className="about-image">
              <img src="/images/DSC07018.JPG" alt="Profile" />
            </div>

            <div className="about-info">
              <h1 className="heading-1">Hello</h1>

              <div className="about-statement">
                <p>Between lines of code, I find my balance through photography — capturing light, people, and quiet moments.</p>
              </div>

              <div className="about-bio">
                <p>
                  I'm a photographer and developer who believes the best images come from authentic moments and genuine connections. My work is driven by curiosity, a love for visual storytelling, and a commitment to capturing what matters.
                </p>
                <p>
                  Whether it's the interplay of light through a window, the candid emotions of real people, or the serene beauty of nature, I'm drawn to moments that tell stories without words.
                </p>
              </div>

              <div className="about-contact">
                <h3>Get In Touch</h3>
                <div className="contact-links">
                  <a href="mailto:your.email@example.com">Email</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <a href="https://zalo.me" target="_blank" rel="noopener noreferrer">Zalo</a>
                </div>
              </div>

              <div className="about-cta">
                <Link to="/portfolio" className="cta-link">View Portfolio →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
