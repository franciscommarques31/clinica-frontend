import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const isLoginPage = location.pathname === '/login'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLoginPage ? 'solid' : ''}`}>
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <span className="logo-icon">✦</span>
          <div className="logo-text">
            <span className="logo-main">CLÍNICA</span>
            <span className="logo-sub">Dentária de São Francisco</span>
          </div>
        </Link>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#sobre">A Clínica</a></li>

          <li className="menu-item">
            <a href="#servicos">Medicina Dentária ▾</a>
            <ul className="dropdown">
              <li><Link to="/implantologia">Implantologia</Link></li>
              <li><Link to="/restauracao">Restauração</Link></li>
              <li><Link to="/branqueamento">Branqueamento</Link></li>
              <li><Link to="/periodontologia">Periodontologia</Link></li>
              <li><Link to="/ortodontia">Ortodontia</Link></li>
              <li><Link to="/preenchimento-labial">Preenchimento Labial</Link></li>
              <li><Link to="/medicina-dentaria">Medicina Dentária Generalista</Link></li>
            </ul>
          </li>

          <li><a href="#casos">Tratamento Estético</a></li>
          <li><a href="/#equipa">Equipa</a></li>
          <li><a href="#contactos">Contactos</a></li>
        </ul>

        <div className="navbar-right">
          <button className="search-btn">🔍</button>
          <button className="btn-gold-fill">Agendar consulta</button>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </button>

      </div>
    </nav>
  )
}