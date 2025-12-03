import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: 'HEADSHOTS.CZ — Martin Svoboda',
  description: 'Profesionální portrétní fotografie',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>
        <header className="header">
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

        <main className="main">
          {children}
        </main>

        <footer className="footer">
          <span className="footer-copyright">
            © 2024 Headshots.cz — Martin Svoboda
          </span>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </footer>
      </body>
    </html>
  )
}


