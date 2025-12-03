'use client'

import { motion } from 'framer-motion'

interface MasonryGridProps {
  images: { src: string; alt: string }[]
  onImageClick: (index: number) => void
}

export default function MasonryGrid({ images, onImageClick }: MasonryGridProps) {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2 className="gallery-title">Portfolio</h2>
        <span className="gallery-count">{images.length} photographs</span>
      </div>
      
      <div className="masonry">
        {images.map((image, index) => (
          <motion.div 
            key={index} 
            className="masonry-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            onClick={() => onImageClick(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt}
              loading={index < 6 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

