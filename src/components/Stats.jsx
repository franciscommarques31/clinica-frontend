import './Stats.css'

const stats = [
  { valor: '+6308', label: 'Sorrisos Devolvidos' },
  { valor: '+570', label: 'Implantes Por Ano' },
  { valor: '+7690', label: 'Pacientes Felizes' },
  { valor: '+20', label: 'Anos de Experiência' },
]

export default function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-valor">{item.valor}</span>
              <span className="stat-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}