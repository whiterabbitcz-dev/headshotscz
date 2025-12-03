'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // Check initial scroll position
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <Link href="/" className="logo">
        HEADSHOTS.CZ
      </Link>
      <nav className="nav">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/book">Book</Link>
      </nav>
      <button className="menu-toggle" aria-label="Menu">
        <span></span>
        <span></span>
      </button>
    </header>
  )
}

