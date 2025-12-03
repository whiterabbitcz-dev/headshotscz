export default function About() {
  return (
    <div className="about-container">
      <div className="about-grid">
        <div className="about-image">
          <img 
            src="/images/urxJ9pU2HeOM0VQeo0ZAufSWZs.jpg" 
            alt="Martin Svoboda"
          />
        </div>
        <div className="about-content">
          <h1>Martin Svoboda</h1>
          <p>
            Jsem portrétní fotograf z Prahy specializující se na profesionální 
            headshoty a business portréty. Mým cílem je zachytit autentickou 
            osobnost každého klienta.
          </p>
          <p>
            Věřím, že kvalitní portrét je víc než jen fotografie — je to vizitka, 
            která mluví za vás. Proto přistupuji ke každému focení s maximální 
            péčí a individuálním přístupem.
          </p>
          <p>
            Spolupracuji s jednotlivci, malými týmy i velkými korporacemi.
          </p>
          <a href="mailto:info@headshots.cz" className="contact-link">
            info@headshots.cz
          </a>
        </div>
      </div>
    </div>
  )
}


