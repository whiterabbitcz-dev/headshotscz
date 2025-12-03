import type { Metadata } from 'next'
import Header from './components/Header'
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
        <Header />

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
