import { Link } from 'react-router-dom'
import { albums } from '../data/albums'
import './PortfolioPage.css'

export default function PortfolioPage() {
  return (
    <div className="portfolio-page">
      <section className="page-header">
        <div className="container">
          <h1 className="heading-1">Portfolio</h1>
          <p className="text-subtitle">Explore my work organized by style and subject</p>
        </div>
      </section>

      <section className="albums-grid">
        <div className="container">
          <div className="albums">
            {albums.map((album) => (
              <Link key={album.id} to={`/album/${album.slug}`} className="album-card">
                <div className="album-preview">
                  <img
                    src={`/images/${album.images[0]}`}
                    alt={album.title}
                    loading="lazy"
                  />
                  <div className="album-overlay"></div>
                </div>
                <div className="album-info">
                  <h3 className="heading-3">{album.title}</h3>
                  <p className="album-meta">{album.images.length} photographs</p>
                  <p className="album-description">{album.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
