import './Reviews.css'

const reviews = [
  { nome: 'DMAH', estrelas: 5, texto: 'Instalações amplas e equipamentos modernos tudo muito limpo e iluminado. Vários serviçõs médico dental disponiveis e fácil agendamento por telefone ou email e normalmente não existe filas de espera sendo atendido de imediato. Fácil estacionamento. Recomendo' },
  { nome: 'José Barrelas', estrelas: 5, texto: 'Onde sou cliente há muitos anos, mesmo desde as antigas instalações e, sempre fui atendido da melhor forma em modernas instalações e, condições de trabalho e de protecções adequadas a cada situação, mesmo antes do vírus' },
  { nome: 'Marisa Miranda', estrelas: 5, texto: 'Desde a administrativa, a assistente dentária e ao médico foram impecáveis e exceletentes profissionais. Confesso que estava a morrer de medo e tiveram toda a paciência do mundo. Estão de parabéns. Recomendo.' },
]

export default function Reviews() {
  return (
    <section className="reviews">
      <div className="container">
        <div className="reviews-grid">
          <div className="reviews-clinica">
            <div className="rev-logo-icon">✦</div>
            <p className="rev-clinica-nome">Clínica Dentária de São Francisco</p>
            <div className="rev-estrelas">★★★★★</div>
            <p className="rev-count">116 avaliações no Google</p>
            <button className="btn-gold" style={{ marginTop: '16px' }}>Escreva a sua avaliação</button>
          </div>
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-header">
                <div className="review-avatar">{r.nome[0]}</div>
                <div>
                  <p className="review-nome">{r.nome}</p>
                  <span className="review-estrelas">{'★'.repeat(r.estrelas)}</span>
                </div>
                <span className="review-google">G</span>
              </div>
              <p className="review-texto">{r.texto}</p>
              <a href="#" className="review-link">Consulte mais informações</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}