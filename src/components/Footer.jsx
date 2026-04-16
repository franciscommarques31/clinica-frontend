import './Footer.css'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-icon">✦</span>
              <div className="footer-logo-text">
                <span className="footer-logo-main">CLÍNICA</span>
                <span className="footer-logo-sub">Dentária de São Francisco</span>
              </div>
            </div>
            <div className="footer-legal">
              <p>NIF: 505221820 | ERS: E158248</p>
              <p>Licenciamento: 27/42/2021</p>
            </div>
            <div className="footer-social">
              <a href="https://www.facebook.com/dentistabeja">f</a>
              <a href="https://www.instagram.com/dentistabeja/">ig</a>
              <a href="#">▶</a>
            </div>
          </div>

          <div className="footer-contatos">
            <p>📞 +351 284 327 260</p>
            <p>📞 +351 910 142 738</p>
            <p>📍 Rua General Morais Sarmento 18 | 7800-064 Beja</p>
            <p>✉️ clinicadentariasfrancisco@gmail.com</p>
          </div>

          <div className="footer-links">
            <a href="#">Intermediário de Crédito</a>
            <a href="#">Política de Privacidade</a>
            <a href="#">Política de Cookies</a>
            <a href="#">Resolução de Litígios</a>
            <a href="https://www.livroreclamacoes.pt/Inicio/">Livro de Reclamações</a>
          </div>

          <div className="footer-horario">
            <p className="horario-titulo">Segunda a Sábado</p>
            <p>Das 09:00 às 13:00 / 14:30 - 19:00</p>
            <p className="horario-titulo">Domingos</p>
            <p>Encerrado</p>
            <button className="btn-gold-fill" style={{ marginTop: '20px' }}>
              Agendar consulta
            </button>
          </div>

          <div className="footer-mapa">
            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Clínica Médico Dentária de S.Francisco. Todos os direitos reservados.</p>

          {/* 🔥 AQUI */}
          <Link to="/login" className="footer-login">👤 Login</Link>

        </div>

      </div>
    </footer>
  )
}