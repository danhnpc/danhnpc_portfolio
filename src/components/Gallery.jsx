import { useState } from 'react'
import './Gallery.css'

// List of images from your images folder
const images = [
  'IMG_20260106_115501.jpg',
  'IMG_5064.JPG',
  'IMG_5190.JPG',
  'IMG_5552.JPG',
  'IMG_5554.JPG',
  'IMG_5559.JPG',
  'IMG_5561.JPG',
  'IMG_5598.JPG',
  'IMG_5638.JPG',
  'IMG_5641.JPG',
  'IMG_5647.JPG',
  'IMG_5649.JPG',
  'IMG_5831(1).jpg',
  'IMG_5849(1).jpg',
  'IMG_5854.JPG',
  'IMG_5860.JPG',
  'IMG_5865.JPG',
  'IMG_5871.JPG',
  'IMG_5875.JPG',
  'IMG_5876.JPG',
  'IMG_5878.JPG',
  'IMG_5880.JPG',
  'IMG_5882.JPG',
  'IMG_5885.JPG',
  'IMG_5892.JPG',
  'IMG_5905.JPG',
  'IMG_5911.JPG',
  'IMG_5914.JPG',
  'IMG_5934(1).jpg',
  'IMG_5935(1).jpg',
  'IMG_5937(1).jpg',
  'IMG_5938(1).jpg',
  'IMG_5939(1).jpg',
  'IMG_5940(1).jpg',
  'IMG_5944(1).jpg',
  'IMG_5945(1).jpg',
  'IMG_5946(1).jpg',
  'IMG_5948(1).jpg',
  'IMG_5949(1).jpg',
  'IMG_5968.JPG',
  'IMG_5979.JPG',
  'IMG_5980.JPG',
  'IMG_5986.JPG',
  'IMG_5988.JPG',
  'IMG_6029(1).jpg',
  'IMG_6031.JPG',
  'IMG_6032.JPG',
  'IMG_6035.JPG',
  'IMG_6036.JPG',
  'IMG_6038.JPG',
  'IMG_6039.JPG',
  'IMG_6043.JPG',
  'IMG_6066.JPG',
  'IMG_6067.JPG',
  'IMG_6084.JPG',
  'IMG_6086.JPG',
  'IMG_6098(1).jpg',
  'IMG_6101(1).jpg',
  'IMG_6114(1).jpg',
  'IMG_6122(1).jpg',
  'IMG_6123(1).jpg',
  'IMG_6124(1).jpg',
]

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">Latest Work</h2>

        <div className="gallery-grid">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={`/images/${image}`}
                alt={`Portfolio ${index + 1}`}
                loading="lazy"
              />
              <div className="overlay"></div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content">
            <img src={`/images/${selectedImage}`} alt="Full size" />
            <button className="close-btn">&times;</button>
          </div>
        </div>
      )}
    </section>
  )
}
