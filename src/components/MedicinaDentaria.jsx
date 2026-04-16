import './MedicinaDentaria.css'
import { useState } from 'react'

const areas = [
  {
    icone: '🏥',
    titulo: 'Fundamental',
    texto: 'Na manutenção da saúde de cavidade oral de forma preventiva e de controlo do nível geral da saúde oral.',
  },
  {
    icone: '✅',
    titulo: 'Responsável por',
    texto: 'Algumas das ações clínicas comuns que contribuem para a saúde oral e melhoram o aspeto dos dentes.',
  },
  {
    icone: '🦷',
    titulo: 'Área de Atuação',
    texto: 'Limpeza dentária, remoção de cáries, branqueamento, aplicação de selantes de fissuras, entre outros.',
  },
  {
    icone: '📅',
    titulo: 'Consultas',
    texto: 'Consultar regularmente o seu médico dentista ajuda a resolver grandes problemas e encontrar as soluções disponíveis.',
  },
]

const faqs = [
  {
    pergunta: 'Quando devo marcar consulta?',
    resposta: [
      'Pelo menos uma vez por ano e desde a erupção do 1º dente, para prevenir qualquer desenvolvimento de doença nos dentes ou nas gengivas, até porque: Prevenir é sempre mais fácil do que tratar. O ideal é fazer controles semestrais.',
    ],
  },
  {
    pergunta: 'Quais são os objetivos principais da consulta?',
    resposta: [
      'Diagnosticar e planear os tratamentos necessários; ser a conexão com as várias especialidades; esclarecer todas as dúvidas que o doente tenha; encaminhar os doentes para as diferentes áreas específicas da medicina dentária de acordo com as suas necessidades.',
    ],
  },
  {
    pergunta: 'Tem Acordo Com Alguma Seguradora Ou Subsistema De Saúde?',
    resposta: [
      'Não. As seguradoras e subsistemas de saúde possuem taxas especificas de comparticipação e procedimentos quando se trata do reembolso das despesas. Geralmente as faturas são apresentadas pelos utentes às seguradoras ou subsistemas de saúde para serem reembolsadas posteriormente de acorodo com cada caso.',
    ],
  },
  {
    pergunta: 'Tem Protocolo Com Alguma Empresa?',
    resposta: [
      'Sim. Temos protocolos com algumas empresas que permitem aos seus colaboradores associados beneficiarem de condições vantajosas nos serviçõs de medicina dentária.',
    ],
  },
  {
    pergunta: 'Há facilidades no pagamento?',
    resposta: [
      '1) Aceitamos cartões de crédito Visa e Mastercard. 2) Até 12 vezes sem juros (sujeito a aprovação de crédito). 3) Até 48 vezes com juros (TAEG 4.7%) (sujeito a aprovação de crédito).',
    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`geral-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="geral-faq-pergunta">
        <span>{pergunta}</span>
        <span className="geral-faq-icone">{aberto ? '−' : '+'}</span>
      </div>
      {aberto && (
        <div className="geral-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="geral-faq-paragrafo">{linha}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function MedicinaDentaria() {
  return (
    <main className="geral-page">

      <section className="geral-hero">
        <div className="geral-hero-inner">
          <div className="geral-hero-texto">
            <span className="geral-tag">Integração de todas as áreas da</span>
            <h1>Medicina <em>Dentária</em></h1>
            <p>A medicina dentária generalista é responsável pelo atendimento médico e dentário a nível clínico do paciente e exame clínico extra e intra-oral para reunir os elementos necessários ao mais adequado tratamento de problemas biológicos, estruturais, funcionais e estéticos da dentição natural e tecidos adjacentes.</p>
            <p>Quem atua é um médico licenciado em medicina dentária e que se envolve em todas as áreas da medicina dentária de uma forma transversal.</p>
          </div>
          <div className="geral-hero-card">
            <span className="geral-hero-card-tag">O seu diagnóstico</span>
            <h2>Começa Por Aqui</h2>
            <p>A consulta de Medicina Dentária Generalista deve ser feita de forma periódica, funcionando como checkup.</p>
            <button className="btn-geral-cta">Contacte Agora</button>
          </div>
        </div>
      </section>

      <section className="geral-areas">
        <div className="geral-areas-inner">
          <div className="geral-section-header">
            <span className="geral-tag-white">Tratamentos de medicina dentária de âmbito geral</span>
            <h2>Medicina Dentária <em>Generalista</em></h2>
            <div className="geral-divisor"></div>
          </div>
          <div className="geral-areas-grid">
            {areas.map((a, i) => (
              <div className="geral-area-card" key={i}>
                <span className="geral-area-icone">{a.icone}</span>
                <div>
                  <h3>{a.titulo}</h3>
                  <p>{a.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="geral-sorrisos">
        <div className="geral-sorrisos-inner">
          <div className="geral-sorrisos-imagem">
            <div className="geral-foto-wrapper">
              <div className="geral-anel-1"></div>
              <div className="geral-anel-2"></div>
              <div className="geral-foto-circulo">
                <img src="/medicina-dentaria.png" alt="Medicina Dentária Generalista" />
              </div>
            </div>
          </div>
          <div className="geral-sorrisos-texto">
            <span className="geral-tag">Reabilitação Oral e Estética</span>
            <h2>Sorrisos <em>Sinceros</em></h2>
            <p>Há 20 anos a fazê-lo com saúde e confiança, a Clínica de São Francisco de Beja tem como sua maior missão impactar positivamente a vida de todos ao seu redor.</p>
            <p>A si também! Acredita que colocar um bonito e sincero sorriso no seu rosto faz toda a diferença.</p>
            <p>Marque hoje mesmo a sua consulta de avaliação.</p>
          </div>
        </div>
      </section>

      <section className="geral-faq">
        <div className="geral-faq-inner">
          <div className="geral-section-header">
            <span className="geral-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="geral-divisor"></div>
          </div>
          <div className="geral-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="geral-faq-cta">
            <button className="btn-geral-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}