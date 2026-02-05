import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Photography</h3>
            <p>Professional photography focused on authentic moments and visual storytelling.</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <nav className="footer-nav">
              <Link to="/">Home</Link>
              <Link to="/portfolio">Portfolio</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </nav>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <div className="footer-links">
              <a href="https://www.instagram.com/czanhnp_sw/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://zalo.me/0979399749" target="_blank" rel="noopener noreferrer">Zalo</a>
              <a href="mailto:danhnpc2000@gmail.com?subject=Liên hệ từ website
&body=Chào bạn, mình muốn hỏi về...">Email</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Photography Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
