import { useState, useEffect } from 'react'
import './Equipa.css'

const API_URL = import.meta.env.VITE_API_URL

function iniciais(nome) {
  return nome.split(' ').slice(0, 2).map(p => p[0]).join('')
}

function Card({ membro }) {
  const [fotoError, setFotoError] = useState(false)

  return (
    <div className="equipa-card">
      <div className="equipa-card-foto-wrap">
        {!fotoError && membro.photo ? (
          <img
            className="equipa-card-foto"
            src={membro.photo}
            alt={membro.name}
            onError={() => setFotoError(true)}
          />
        ) : (
          <div className="equipa-card-avatar">
            {iniciais(membro.name)}
          </div>
        )}
      </div>

      <div className="equipa-card-info">
        <h3>{membro.name}</h3>
        <p>{membro.specialty}</p>
      </div>
    </div>
  )
}

export default function Equipa() {
  const [staff, setStaff] = useState([])
  const [ativo, setAtivo] = useState('medico')

  useEffect(() => {
    fetch(`${API_URL}/api/staff`)
      .then(res => res.json())
      .then(data => setStaff(data))
      .catch(err => console.error('Erro staff:', err))
  }, [])

  const filtrados = staff.filter(s =>
    ativo === 'medico'
      ? s.role === 'medico'
      : s.role === 'assistente'
  )

  return (
    <section className="equipa" id="equipa">
      <div className="container">

        <div className="equipa-header">
          <span className="equipa-tag">Conheça-nos</span>
          <h2>A Nossa Equipa</h2>
        </div>

        <div className="equipa-filtros">
          <button
            className={ativo === 'medico' ? 'equipa-btn equipa-btn--ativo' : 'equipa-btn'}
            onClick={() => setAtivo('medico')}
          >
            Médicos
          </button>

          <button
            className={ativo === 'assistente' ? 'equipa-btn equipa-btn--ativo' : 'equipa-btn'}
            onClick={() => setAtivo('assistente')}
          >
            Assistentes
          </button>
        </div>

        <div className={`equipa-grid-wrapper equipa-grid-wrapper--${ativo === 'medico' ? '4' : '3'}`}>
          {filtrados.map((m, i) => (
            <Card membro={m} key={i} />
          ))}

          {filtrados.length === 0 && (
            <p style={{ textAlign: 'center' }}>Sem membros</p>
          )}
        </div>

      </div>
    </section>
  )
}