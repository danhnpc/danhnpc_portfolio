import { useParams, Link } from 'react-router-dom'
import { getAlbumBySlug } from '../data/albums'
import { useState } from 'react'
import './AlbumPage.css'

export default function AlbumPage() {
  const { slug } = useParams()
  const album = getAlbumBySlug(slug)
  const [selectedImage, setSelectedImage] = useState(null)

  if (!album) {
    return (
      <div className="album-page not-found">
        <div className="container">
          <h1>Album not found</h1>
          <Link to="/portfolio">Back to Portfolio</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="album-page">
      <section className="album-header">
        <div className="container">
          <Link to="/portfolio" className="back-link">← Back to Portfolio</Link>
          <div className="album-title-section">
            <h1 className="heading-1">{album.title}</h1>
            <p className="album-description">{album.description}</p>
          </div>
        </div>
      </section>

      <section className="album-gallery">
        <div className="container container-lg">
          <div className="photo-grid">
            {album.images.map((image, index) => (
              <div
                key={index}
                className="photo-item"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={`/images/${image}`}
                  alt={`${album.title} - Photo ${index + 1}`}
                  loading="lazy"
                />
                <div className="photo-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <button className="close-btn" onClick={() => setSelectedImage(null)}>
              ✕
            </button>
            <img src={`/images/${selectedImage}`} alt="Full size" />
          </div>
        </div>
      )}
    </div>
  )
}
