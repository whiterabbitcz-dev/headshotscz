import Image from 'next/image'

// Placeholder images - nahraďte skutečnými fotkami
const images = [
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 1' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 2' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 3' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 4' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 5' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 6' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 7' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 8' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 9' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 10' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 11' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Portrait 12' },
]

export default function Home() {
  return (
    <div className="masonry">
      {images.map((image, index) => (
        <div key={index} className="masonry-item">
          <img 
            src={image.src} 
            alt={image.alt}
            loading={index < 6 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  )
}


