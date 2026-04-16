import './Restauracao.css'
import { useState } from 'react'

const razoes = [
  {
    icone: '🦠',
    titulo: 'Recuperar Dentes com Cáries',
    texto: 'As cáries surgem quando as substâncias produzidas pelas bactérias provocam deterioração. O problema pode ser tratado e prevenido sem dificuldades. Consulte-nos!',
  },
  {
    icone: '🦷',
    titulo: 'Restaurar Dentes Fraturados',
    texto: 'Com resinas e materiais modernos, é possível reconstruir dentes fraturados ou lascados. O resultado irá depender do tamanho da fissura a ser reconstruída.',
  },
  {
    icone: '✨',
    titulo: 'Remover Manchas',
    texto: 'As manchas podem ser internas ou externas e manifestam-se em função de diversos fatores, tais como o consumo de alguns alimentos ou por patologia dentária.',
  },
  {
    icone: '🌟',
    titulo: 'Branquear Dentes',
    texto: 'Tratamento dentário estético que permite de forma rápida, sem danificar os dentes e sem necessidade de cirurgia, obter um sorriso mais branco.',
  },
]

const faqs = [
  {
    pergunta: 'Parti um dente há 15 anos. É possível restaurar agora?',
    resposta: [
      'A idade da fratura não é importante para a restauração, mas sim a forma da fratura e a sua extensão. Assim, uma resposta definitiva será dada numa consulta com o médico especialista.',
    ],
  },
  {
    pergunta: 'Em que casos não é possível reconstruir um dente partido?',
    resposta: [
      'Quando não há estrutura dentária remanescente suficiente para que as resinas compostas possam aderir e oferecer segurança à mordida e/ou mastigação.',
    ],
  },
  {
    pergunta: 'Que materiais existem para fazer uma restauração?',
    resposta: [
      'Resinas compostas que conseguem adaptar-se e combinar com a cor natural dos restantes dentes e são utilizadas quando se deseja uma aparência mais natural (não aconselhado para restaurações muito extensas).',
      'Restaurações de porcelana (facetas dentárias), feitas por medida e cimentadas no dente natural, previamente tratado e limado',
    ],
  },
  {
    pergunta: 'Quando devo fazer uma restauração dentária?',
    resposta: [
      'Sempre que exista algum trauma ou fissura que comprometa a função e forma do dente.',
    ],
  },
  {
    pergunta: 'Como saber se a restauração é necessária?',
    resposta: [
      'Quando sentimos dor ou desconforto. Quando temos cáries ou pequenas fissuras. É sempre necessário fazer-nos uma visita para que seja feita uma avaliação e lhe seja aconselhada a melhor solução para o seu problema.',
    ],
  },
  {
    pergunta: 'Que cuidados devo ter depois de uma restauração?',
    resposta: [
      'Os cuidados dependem de paciente para paciente, bem como do tipo de material aplicado e o dente tratado. Na maioria dos casos não é necessário muita preocupação quanto a isto mas deve ouvir os conselhos do seu médico dentista.',
      'A Clínica de São Francisco conta com uma equipa de profissionais experientes, preparados para lhe oferecer as melhores soluções do mercado com preço-qualidade, rigor e experiência técnica.',
    
    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`rest-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="rest-faq-pergunta">
        <span>{pergunta}</span>
        <span className="rest-faq-icone">{aberto ? '−' : '+'}</span>
      </div>

      {aberto && (
        <div className="rest-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="rest-faq-paragrafo">
              {linha}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Restauracao() {
  return (
    <main className="rest-page">

      {/* HERO */}
      <section className="rest-hero">
        <div className="rest-hero-inner">
          <div className="rest-hero-texto">
            <span className="rest-tag">Restaurar Dentes</span>
            <h1>Dentisteria</h1>
            <p>A restauração é o processo pelo qual um dente afetado por cáries ou partido (por acidente, por exemplo) volta a ter a sua forma e função normal.</p>
            <p>Uma restauração consiste na remoção da parte do dente que está deteriorada e preenchimento da cavidade com um material de restauração. Este procedimento também ajuda a prevenir uma deterioração futura, fechando fissuras e evitando a acumulação de bactérias que se podem infiltrar no local.</p>
          </div>
          <div className="rest-hero-card">
            <span className="rest-hero-card-tag">Dentes Fraturados ou</span>
            <h2>Dentes Cariados</h2>
            <p>A restauração dentária pode salvar o seu sorriso e a função do dente danificado. Entenda mais sobre o procedimento e como deve agir.</p>
            <button className="btn-rest-cta">Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* RAZÕES */}
      <section className="rest-razoes">
        <div className="rest-razoes-inner">
          <div className="rest-section-header">
            <span className="rest-tag-white">Dentisteria</span>
            <h2>Porque é <em>Importante?</em></h2>
            <div className="rest-divisor"></div>
          </div>
          <div className="rest-razoes-grid">
            {razoes.map((r, i) => (
              <div className="rest-razao-card" key={i}>
                <span className="rest-razao-icone">{r.icone}</span>
                <div>
                  <h3>{r.titulo}</h3>
                  <p>{r.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERGUNTE AO DENTISTA */}
      <section className="rest-dentista">
        <div className="rest-dentista-inner">
          <div className="rest-dentista-imagem">
            <div className="rest-foto-wrapper">
              <div className="rest-anel-1"></div>
              <div className="rest-anel-2"></div>
              <div className="rest-foto-circulo">
                <img src="/restauracao.png" alt="Restauração Dentária" />
              </div>
            </div>
          </div>
          <div className="rest-dentista-texto">
            <span className="rest-tag">Pergunte ao seu</span>
            <h2>Dentista</h2>
            <p>É comum ouvir os dentistas a recomendar o procedimento, por exemplo, quando se têm acidentes com um dente. Mas já parou para se perguntar como o procedimento funciona na prática?</p>
            <p>A dentisteria é a especialidade que se ocupa da restauração dentária. Quer saber que tipos de restauração existem e que tipos de materiais são usados? Nós explicamos tudo!</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="rest-faq">
        <div className="rest-faq-inner">
          <div className="rest-section-header">
            <span className="rest-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="rest-divisor"></div>
          </div>
          <div className="rest-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="rest-faq-cta">
            <button className="btn-rest-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}
