import './Reviews.css'

const reviews = [
  { nome: 'Bruno Guedes', estrelas: 5, texto: 'Excelente clínica, recomendo. Muito simpáticos e atenciosos. O Dr. Pedro Mota é um excelente profissional.' },
  { nome: 'Sergio Gonçalves', estrelas: 5, texto: 'Muito profissionalismo e excelente atendimento.' },
  { nome: 'Isabel Fauvrelle', estrelas: 5, texto: 'A clínica dispõe de um serviço de excelência em todos os campos, enaltecendo também a simpatia de toda a equipa.' },
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