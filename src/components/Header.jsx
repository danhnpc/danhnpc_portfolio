import { Link, useLocation } from 'react-router-dom'
import './Header.css'

export default function Header() {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Photography</h1>
          </Link>
          <nav className="nav">
            <Link
              to="/"
              className={`nav-item ${isActive('/') ? 'active' : ''}`}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`nav-item ${isActive('/portfolio') ? 'active' : ''}`}
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className={`nav-item ${isActive('/about') ? 'active' : ''}`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`nav-item ${isActive('/contact') ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
