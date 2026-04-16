import './ConsultaAvaliacao.css'

export default function ConsultaAvaliacao() {
  return (
    <section className="consulta" id="consulta">
      <div className="container">
        <div className="consulta-grid">
          <div className="consulta-texto">
            <span className="consulta-tag">Tratamentos Médico-Dentários Especializados</span>
            <h2>Marque a Sua Consulta</h2>
            <p>Marque a sua consulta na Clínica São Francisco, referência no Baixo Alentejo na área da implantologia e estética.</p>
            <p>2 décadas de experiência em Especialidades Dentárias. Sorrisos que mudam vidas!</p>
            <div className="consulta-btns">
              <button className="btn-gold-fill">Marcar consulta</button>
              <button className="btn-gold">Ligar</button>
            </div>
          </div>

          <div className="consulta-imagem">
            <div className="consulta-card">
              <div className="consulta-anel-1"></div>
              <div className="consulta-anel-2"></div>
              <svg className="consulta-arco-svg" viewBox="0 0 340 340" fill="none">
                <circle cx="170" cy="170" r="165" stroke="rgba(1,146,188,0.2)" strokeWidth="1" strokeDasharray="12 8"/>
              </svg>
              <div className="consulta-foto-circulo">
                <img src="/marcar_consulta.jpg" alt="Médico" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}