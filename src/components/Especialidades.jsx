import './Especialidades.css'

const especialidades = [
  { titulo: 'Implantologia',        img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop' },
  { titulo: 'Branqueamento',        img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&auto=format&fit=crop' },
  { titulo: 'Outras Especialidades',img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop' },
  { titulo: 'Higiene Oral',         img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop' },
  { titulo: 'Ortodontia',           img: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&auto=format&fit=crop' },
  { titulo: 'Reabilitação Oral',    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop' },
]

export default function Especialidades() {
  return (
    <section className="especialidades" id="especialidades">
      <div className="esp-header">
        <span className="esp-tag">O que fazemos</span>
        <h2>As Nossas Especialidades</h2>
      </div>
      <div className="esp-grid">
        {especialidades.map((item, i) => (
          <div className="esp-card" key={i}>
            <div className="esp-card-inner">
              <div className="esp-anel-1"></div>
              <div className="esp-anel-2"></div>
              <div className="esp-foto-circulo">
                <img src={item.img} alt={item.titulo} />
              </div>
            </div>
            <h3>{item.titulo}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}