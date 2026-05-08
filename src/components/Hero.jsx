import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      
      <video
        className="hero-bg-video"
        src="/video_clinica.mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <h1>Clínica <span>Dentária de São Francisco</span></h1>
        <p>A saúde começa na sua boca.</p>
        <button className="btn-gold-fill">Agendar consulta</button>
      </div>
    </section>
  )
}