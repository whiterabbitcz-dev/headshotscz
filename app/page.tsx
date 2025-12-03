'use client'

import { useState } from 'react'
import HeroCarousel from './components/HeroCarousel'
import MasonryGrid from './components/MasonryGrid'
import Lightbox from './components/Lightbox'

// Hero carousel images (featured work)
const heroImages = [
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Featured Portrait 1' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Featured Portrait 2' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Featured Portrait 3' },
  { src: '/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg', alt: 'Featured Portrait 4' },
]

// Gallery images (full portfolio)
const galleryImages = [
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
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrev = () => {
    setLightboxIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const goToNext = () => {
    setLightboxIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <>
      <HeroCarousel images={heroImages} />
      
      <MasonryGrid 
        images={galleryImages} 
        onImageClick={openLightbox} 
      />

      <Lightbox
        images={galleryImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  )
}
