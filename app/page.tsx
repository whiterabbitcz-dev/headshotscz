'use client'

import { useState } from 'react'
import { assetPath } from '@/lib/assetPath'
import HeroCarousel from './components/HeroCarousel'
import MasonryGrid from './components/MasonryGrid'
import Lightbox from './components/Lightbox'

const sample = assetPath('/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg')

// Hero carousel images (featured work)
const heroImages = [
  { src: sample, alt: 'Featured Portrait 1' },
  { src: sample, alt: 'Featured Portrait 2' },
  { src: sample, alt: 'Featured Portrait 3' },
  { src: sample, alt: 'Featured Portrait 4' },
]

// Gallery images (full portfolio)
const galleryImages = [
  { src: sample, alt: 'Portrait 1' },
  { src: sample, alt: 'Portrait 2' },
  { src: sample, alt: 'Portrait 3' },
  { src: sample, alt: 'Portrait 4' },
  { src: sample, alt: 'Portrait 5' },
  { src: sample, alt: 'Portrait 6' },
  { src: sample, alt: 'Portrait 7' },
  { src: sample, alt: 'Portrait 8' },
  { src: sample, alt: 'Portrait 9' },
  { src: sample, alt: 'Portrait 10' },
  { src: sample, alt: 'Portrait 11' },
  { src: sample, alt: 'Portrait 12' },
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
