import './PreenchimentoLabial.css'
import { useState } from 'react'

const info = [
  {
    icone: '🎯',
    titulo: 'Objetivos do tratamento',
    texto: 'O Preenchimento Labial consiste numa técnica onde se utiliza o Ácido Hialurónico para melhorar o contorno e o volume do lábio e a correção de deformidades, promovendo ainda a hidratação e um perfil facial mais harmonioso. Permite ainda a correção do chamado sorriso gengival.',
  },
  {
    icone: '💉',
    titulo: 'Como se faz o Tratamento?',
    texto: 'O processo dura em cerca de 30 minutos e consiste em três passos: 1) É aplicada anestesia nas áreas a intervencionar de forma a garantir-lhe o máximo conforto; 2) nos pausas e com uma agulha própria, é injetado o Ácido Hialurónico na pele; 3) repete-se o procedimento nas regiões determinadas.',
  },
  {
    icone: '🔬',
    titulo: 'O que é o Ácido Hialurónico?',
    texto: 'O Ácido Hialurónico é uma substância naturalmente presente no organismo humano que permite hidratar, conferir volume, sustentar a pele e elasticidade à pele e mucosa. Cerca de 56% do Ácido Hialurónico total do corpo encontra-se na pele, onde promove o espaço entre as células, mantendo-a lisa, elástica e bem hidratada. Com o passar do tempo, a sua concentração na pele diminui, o que leva à redução do volume e desenvolvimento de rugas. Aprovado pelo Infarmed para a aplicação em procedimentos de medicina estética, a sua trajetória tem sido uma verdadeira arma contra o envelhecimento e, em alguns casos, uma simples e segura alternativa à Cirurgia plástica invasiva.',
    destaque: true,
  },
]

const faqs = [
  {
    pergunta: 'Qual o tempo de recuperação?',
    resposta: [
      'Não necessita de tempo de recuperação.',
    ],
  },
  {
    pergunta: 'O procedimento é doloroso?',
    resposta: [
      'Não. Antes do tratamento é aplicado um anestésico superficial que atenua a sensação de picada.',
    ],
  },
  {
    pergunta: 'Quanto tempo demora o procedimento?',
    resposta: [
      'Tem a duração média de 3omin.',
    ],
  },
  {
    pergunta: 'Quantas sessões são necessárias?',
    resposta: [
      'É necessária apenas uma sessão.',
    ],
  },
  {
    pergunta: 'Posso fazer preenchimento labial na minha idade?',
    resposta: [
      'É um procedimento sem contraindicações, que poderá ser realizado a partir dos 18 anos de idade e após uma avaliação clínica realizada pelos nossos médicos. Não tem idade limite.',
    ],
  },
  {
    pergunta: 'Quando se começam a notar os resultados do tratamento?',
    resposta: [
      'O preenchimento labial com ácido hialurônico leva cerca de 10 dias para apresentar os resultados.',
    ],
  },
  {
    pergunta: 'Quanto tempo duram os efeitos do tratamento?',
    resposta: [
      'O preenchimento dos lábios pode levar em média um ano e meio no organismo. Como o ácido hialurônico é uma substância que realiza o efeito de estimular a produção de colágeno, os resultados podem permanecer em até três anos.',
    ],
  },
    {
    pergunta: 'Que cuidados devo ter no pós-tratamento?',
    resposta: [
      'É recomendado que evite nas 48 horas pós-procedimento qualquer tipo de impacto na região dos lábios, forte exposição aos raios solares e atividades físicas.',
    ],
  },
      {
    pergunta: 'Há contra-indicações?',
    resposta: [
      'É recomendado que evite nas 48 horas pós-procedimento qualquer tipo de impacto na região dos lábios, forte exposição aos raios solares e atividades físicas.',
    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`labial-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="labial-faq-pergunta">
        <span>{pergunta}</span>
        <span className="labial-faq-icone">{aberto ? '−' : '+'}</span>
      </div>
      {aberto && (
        <div className="labial-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="labial-faq-paragrafo">{linha}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function PreenchimentoLabial() {
  return (
    <main className="labial-page">

      {/* HERO */}
      <section className="labial-hero">
        <div className="labial-hero-inner">
          <div className="labial-hero-texto">
            <span className="labial-tag">Ácido Hialurónico</span>
            <h1>Lábios <em>Cuidados</em></h1>
            <p>Quem não sonha em ter uns lábios bem definidos e com volume? A aplicação de ácido hialurónico dos lábios é um tratamento seguro e eficaz onde vai sendo procurado por homens e mulheres, para realizar esta área esteticamente tão importante.</p>
            <p>Apresenta algum erro de boca ou tem lábios finos? Continua a ler esta página...</p>
          </div>
          <div className="labial-hero-card">
            <span className="labial-hero-card-tag">Lábios</span>
            <h2>Bonitos</h2>
            <p>Uns lábios bonitos, cuidados e hidratados são frequentemente sinais de sensualidade.</p>
            <button className="btn-labial-cta">📞 Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* PREENCHIMENTO */}
      <section className="labial-info">
        <div className="labial-info-inner">
          <div className="labial-section-header">
            <span className="labial-tag-white">Sorriso Bonito Com</span>
            <h2>Preenchimento <em>Labial</em></h2>
            <div className="labial-divisor"></div>
          </div>
          <div className="labial-info-grid">
            {info.map((item, i) => (
              <div className={`labial-info-card${item.destaque ? ' destaque' : ''}`} key={i}>
                <span className="labial-info-icone">{item.icone}</span>
                <div>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* E COM VOLUME */}
      <section className="labial-volume">
        <div className="labial-volume-inner">
          <div className="labial-volume-imagem">
            <div className="labial-foto-wrapper">
              <div className="labial-anel-1"></div>
              <div className="labial-anel-2"></div>
              <div className="labial-foto-circulo">
                <img src="/preenchimento-labial.png" alt="Preenchimento Labial" />
              </div>
            </div>
          </div>
          <div className="labial-volume-texto">
            <span className="labial-tag">Lábios bem definidos</span>
            <h2>E Com <em>Volume!</em></h2>
            <p>Lábios bonitos, cuidados e hidratados são frequentemente sinais de sensualidade. Mas há muito mais que deseja fazer e tem medo que fique exagerado ou artificial? Tem dúvidas sobre o procedimento e sobre o efeito final?</p>
            <p>Então saiba que o preenchimento labial é realizado na Clínica de São Francisco por médico, de forma segura, com recurso a materiais biocompatíveis e, se necessário, sem anestesia.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="labial-faq">
        <div className="labial-faq-inner">
          <div className="labial-section-header">
            <span className="labial-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="labial-divisor"></div>
          </div>
          <div className="labial-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="labial-faq-cta">
            <button className="btn-labial-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}
