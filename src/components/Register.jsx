import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import './Register.css'

const API_URL = import.meta.env.VITE_API_URL

export default function Register() {
  const { token } = useParams()
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState('')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleRegister = async () => {
    if (!name || !password || !confirm) {
      setErro('Preencha todos os campos')
      return
    }

    if (password !== confirm) {
      setErro('As passwords não coincidem')
      return
    }

    if (password.length < 6) {
      setErro('A password deve ter pelo menos 6 caracteres')
      return
    }

    setErro('')
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/patients/register/${token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, password })
      })

      const data = await res.json()

      if (!res.ok) {
        setErro(data.message || 'Erro no registo')
        return
      }

      alert('Conta criada com sucesso! Pode fazer login.')
      navigate('/login')

    } catch (error) {
      setErro('Erro ao ligar ao servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="register-page">
      <div className="register-left">
        <div>
          <span className="register-logo-icon">✦</span>
          <span className="register-logo-main">CLÍNICA</span>
          <span className="register-logo-sub">Dentária de São Francisco</span>
        </div>
        <h2 className="register-tagline">
          Bem-vindo à sua<br />área de paciente
        </h2>
        <p className="register-desc">
          Defina a sua password para aceder à sua área reservada.
        </p>
      </div>

      <div className="register-right">
        <div className="register-form">
          <p className="register-form-tag">Ativar conta</p>
          <h2 className="register-form-title">Criar password</h2>

          {erro && (
            <p style={{ color: 'red', marginBottom: '16px', fontSize: '13px' }}>
              {erro}
            </p>
          )}

          <div className="register-field">
            <label>Nome</label>
            <input
              type="text"
              placeholder="O seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="register-field">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="register-field">
            <label>Confirmar password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
          </div>

          <button
            className="register-btn"
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? 'A criar conta...' : 'Ativar conta'}
          </button>

          <div className="register-legal">
            <p>NIF: 505221820 | ERS: E158248 | Licenciamento: 27/42/2021</p>
          </div>
        </div>
      </div>
    </main>
  )
}