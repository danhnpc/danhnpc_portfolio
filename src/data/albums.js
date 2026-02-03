// Album definitions with organized photos
export const albums = [
  {
    id: 'indoor-cafe',
    title: 'Indoor Cafe',
    description: 'Intimate indoor moments, candid portraits, and cozy cafe scenes capturing real emotions and connections',
    slug: 'indoor-cafe',
    featured: true,
    images: [
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
    ]
  },
  {
    id: 'outdoor-natural',
    title: 'Outdoor Natural',
    description: 'Beautiful natural landscapes, outdoor moments, and the beauty of nature captured in authentic light',
    slug: 'outdoor-natural',
    featured: true,
    images: [
            'IMG_5914.JPG',
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
      'IMG_5968.jpg',
      'IMG_5980.JPG',
      'IMG_5986.JPG',
      'IMG_5988.JPG',
      'IMG_6029(1).jpg',
      'IMG_6032.JPG',
      'IMG_6035.JPG',
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
      'IMG_5831(1).jpg'
    ]
  }
]

export const getFeaturedImage = () => 'IMG_5905.JPG'

export const getAlbumBySlug = (slug) => {
  return albums.find(album => album.slug === slug)
}
