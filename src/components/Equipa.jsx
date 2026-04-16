import { useState } from 'react'
import './Equipa.css'

const grupos = {
  medicos: [
    { nome: 'Fernanda Faustino', cargo: 'Técnica de Prótese Dentária Gerente',                       foto: '/equipa/fernanda-faustino.jpg' },
    { nome: 'Ana Sofia Pedrosa', cargo: 'Médico Dentista',                                            foto: '/equipa/ana_sofia.jpeg' },
    { nome: 'Nuno Miranda',      cargo: 'Médico Dentista Generalista',                                foto: '/equipa/dentista-nuno-miranda.jpg' },
    { nome: 'Luís Brás',         cargo: 'Médico Dentista — Cirurgia Oral, Implantes e Reabilitação', foto: '/equipa/dentista-luis-braz.jpg' },
  ],
  assistentes: [
    { nome: 'Maria do Rosário', cargo: 'Assistente Dentária',          foto: '/equipa/assistente-dentaria-rosario.jpg' },
    { nome: 'Alexandra Pais',   cargo: 'Assistente Dentária',          foto: '/equipa/assistente-dentaria-alexandra.jpg' },
    { nome: 'Maria João',       cargo: 'Ajudante de Prótese Dentária', foto: '/equipa/assistente-dentaria-joao.jpg' },
  ],
}

function iniciais(nome) {
  return nome.split(' ').slice(0, 2).map(p => p[0]).join('')
}

function Card({ membro }) {
  const [fotoError, setFotoError] = useState(false)

  return (
    <div className="equipa-card">
      <div className="equipa-card-foto-wrap">
        <div className="equipa-card-anel-1"></div>
        <div className="equipa-card-anel-2"></div>
        {!fotoError ? (
          <img
            className="equipa-card-foto"
            src={membro.foto}
            alt={membro.nome}
            onError={() => setFotoError(true)}
          />
        ) : (
          <div className="equipa-card-avatar">{iniciais(membro.nome)}</div>
        )}
      </div>
      <div className="equipa-card-info">
        <h3>{membro.nome}</h3>
        <p>{membro.cargo}</p>
      </div>
    </div>
  )
}

export default function Equipa() {
  const [ativo, setAtivo] = useState('medicos')

  return (
    <section className="equipa" id="equipa">
      <div className="container">
        <div className="equipa-header">
          <span className="equipa-tag">Conheça-nos</span>
          <h2>A Nossa Equipa</h2>
        </div>

        <div className="equipa-filtros">
          <button
            className={`equipa-btn${ativo === 'medicos' ? ' equipa-btn--ativo' : ''}`}
            onClick={() => setAtivo('medicos')}
          >
            Médicos
          </button>
          <button
            className={`equipa-btn${ativo === 'assistentes' ? ' equipa-btn--ativo' : ''}`}
            onClick={() => setAtivo('assistentes')}
          >
            Assistentes
          </button>
        </div>

        <div className={`equipa-grid-wrapper equipa-grid-wrapper--${ativo === 'medicos' ? '4' : '3'}`}>
          {grupos[ativo].map((m, i) => <Card membro={m} key={i} />)}
        </div>
      </div>
    </section>
  )
}