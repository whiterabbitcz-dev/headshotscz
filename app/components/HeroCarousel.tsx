'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

interface HeroCarouselProps {
  images: { src: string; alt: string }[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, duration: 50 },
    [Autoplay({ delay: 7000, stopOnInteraction: false })]
  )
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCurrentIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on('select', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Format number with leading zero
  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0')
  }

  return (
    <section className="hero-carousel">
      <div className="hero-carousel-viewport" ref={emblaRef}>
        <div className="hero-carousel-container">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`hero-carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="hero-carousel-image"
              />
              <div className="hero-carousel-overlay" />
            </div>
          ))}
        </div>
      </div>

      {/* Center text overlay */}
      <div className="hero-content-overlay">
        <h1 className="hero-title">Martin Svoboda</h1>
        <p className="hero-subtitle">Portrait Photographer</p>
      </div>

      {/* Scroll indicator - repositioned */}
      <div className="hero-scroll-indicator">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>

      {/* Slide navigation - Finn Daragh style */}
      <div className="hero-nav">
        <div className="hero-nav-counter">
          <span className="hero-nav-current">{formatNumber(currentIndex + 1)}</span>
          <span className="hero-nav-divider">――</span>
          <span className="hero-nav-total">{formatNumber(images.length)}</span>
        </div>
        <div className="hero-nav-arrows">
          <button 
            className="hero-nav-arrow" 
            onClick={scrollPrev}
            aria-label="Previous slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="15,18 9,12 15,6" />
            </svg>
          </button>
          <button 
            className="hero-nav-arrow" 
            onClick={scrollNext}
            aria-label="Next slide"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <polyline points="9,18 15,12 9,6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
