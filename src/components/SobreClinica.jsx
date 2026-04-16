import './SobreClinica.css'

export default function SobreClinica() {
  return (
    <section className="sobre" id="sobre">
      <div className="deco-circle"></div>
      <div className="deco-circle-2"></div>

      <div className="sobre-inner">

        <div className="painel-esq">
          <div className="ano-tag">Clínica Dentária</div>
          <div className="titulo-bloco">
            <h2>Clínica Médico<br />Dentária de<br /><em>S. Francisco</em></h2>
          </div>
          <div className="linha-divisor"></div>
          <p className="texto-corpo">
            Inovadora e familiar, a Clínica Dentária São Francisco está
            situada numa zona central de Beja. Com 500m², dispõe de todas
            as áreas da medicina dentária e de uma equipa multidisciplinar
            com elevada experiência.
          </p>
          <p className="texto-corpo">
            Dispomos de Bloco Cirúrgico, Sala de Recobro e serviços
            diferenciados como Endodontia com Microscópio — para que cada
            tratamento seja feito com a máxima precisão.
          </p>
          <div className="destaque-stat">
            <div className="stat-item">
              <span className="stat-num">+28</span>
              <span className="stat-label">Anos de experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">500m²</span>
              <span className="stat-label">Área clínica</span>
            </div>
            <div className="stat-item">
              <span className="stat-num">4</span>
              <span className="stat-label">Gabinetes</span>
            </div>
          </div>
        </div>

        <div className="painel-dir">
          <div className="foto-wrapper">
            <div className="anel-exterior"></div>
            <div className="anel-exterior-2"></div>
            <svg className="arco-svg" viewBox="0 0 340 340" fill="none">
              <circle cx="170" cy="170" r="165" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="12 8"/>
            </svg>
            <div className="foto-circulo">
              <img src="/medico.jpg" alt="Médica Dentista Clínica São Francisco" />
            </div>
          </div>

          <div className="badge-float">
            <div className="badge-icon-novo">✦</div>
            <div className="badge-texto">
              <p>Desde 1996 a</p>
              <p><strong>cuidar de si.</strong></p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}