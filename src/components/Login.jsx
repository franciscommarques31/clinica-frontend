import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleLogin = async () => {
    if (!email || !password) {
      setErro('Preencha todos os campos')
      return
    }

    setErro('')
    setLoading(true)

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (!res.ok) {
        setErro(data.message || 'Erro no login')
        return
      }

      // ✅ guardar token
      localStorage.setItem('token', data.token)

      // ✅ redirecionar
      navigate('/admin')

    } catch (error) {
      setErro('Erro ao ligar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin()
  }

  return (
    <main className="login-page">
      <div className="login-left">
        <div className="login-branding">
          <span className="login-logo-icon">✦</span>
          <span className="login-logo-main">CLÍNICA</span>
          <span className="login-logo-sub">Dentária de São Francisco</span>
        </div>
        <h2 className="login-tagline">A sua saúde oral<br />em boas mãos</h2>
        <p className="login-desc">
          Aceda à sua área reservada para gerir marcações e consultar o seu histórico.
        </p>
      </div>

      <div className="login-right">
        <div className="login-form">
          <p className="login-form-tag">Área reservada</p>
          <h2 className="login-form-title">Entrar na conta</h2>

          {/* ✅ ERRO VISUAL */}
          {erro && (
            <p style={{ color: 'red', marginBottom: '16px', fontSize: '13px' }}>
              {erro}
            </p>
          )}

          <div className="login-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="o-seu-email@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="email"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="current-password"
            />
          </div>

          <div className="login-forgot">
            <a href="/recuperar-password">Esqueceu a password?</a>
          </div>

          <button className="login-btn" onClick={handleLogin} disabled={loading}>
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