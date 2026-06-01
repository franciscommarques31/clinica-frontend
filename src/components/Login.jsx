import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const API = import.meta.env.VITE_API_URL

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  const handleLogin = async () => {
    if (!email || !password) {
      setErro('Preencha todos os campos')
      return
    }

    setErro('')
    setLoading(true)

    try {
      // tenta login como admin
      const resAdmin = await fetch(`${API}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      if (resAdmin.ok) {
        const data = await resAdmin.json()
        localStorage.setItem('token', data.token)
        localStorage.setItem('role', 'admin')
        navigate('/admin')
        return
      }

      // tenta login como paciente
      const resPatient = await fetch(`${API}/api/auth/patient-login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const dataPatient = await resPatient.json()

      if (resPatient.ok) {
        localStorage.setItem('token', dataPatient.token)
        localStorage.setItem('patientId', dataPatient.id)
        localStorage.setItem('patientName', dataPatient.name)
        localStorage.setItem('role', 'patient')
        navigate('/patient')
        return
      }

      setErro(dataPatient.message || 'Email ou password incorretos')

    } catch (error) {
      setErro('Erro ao ligar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page">
      <div className="login-left">
        <div className="login-branding">
          <span className="login-logo-icon">✦</span>
          <span className="login-logo-main">CLÍNICA</span>
          <span className="login-logo-sub">Dentária de São Francisco</span>
        </div>

        <h2 className="login-tagline">
          A sua saúde oral<br />em boas mãos
        </h2>

        <p className="login-desc">
          Aceda à sua área reservada para gerir marcações e consultar o seu histórico.
        </p>
      </div>

      <div className="login-right">
        <div className="login-form">
          <p className="login-form-tag">Área reservada</p>
          <h2 className="login-form-title">Entrar na conta</h2>

          {erro && (
            <p style={{ color: 'red', marginBottom: '16px', fontSize: '13px' }}>
              {erro}
            </p>
          )}

          <div className="login-field">
            <label>Email</label>
            <input
              type="email"
              placeholder="o-seu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={handleKeyDown}
                autoComplete="current-password"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Mostrar password"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12a11.5 11.5 0 0 1 4.22-5.78" />
                    <path d="M9.88 4.24A10.94 10.94 0 0 1 12 4c5 0 9.27 3.89 11 8a11.6 11.6 0 0 1-2.35 3.45" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="login-forgot">
            <a href="/recuperar-password">Esqueceu a password?</a>
          </div>

          <button
            className="login-btn"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'A entrar...' : 'Entrar'}
          </button>

          <div className="login-legal">
            <p>NIF: 505221820 | ERS: E158248 | Licenciamento: 27/42/2021</p>
          </div>
        </div>
      </div>
    </main>
  )
}