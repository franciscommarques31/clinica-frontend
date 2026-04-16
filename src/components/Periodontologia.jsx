import './Periodontologia.css'
import { useState } from 'react'

const doencas = [
  {
    icone: '🔬',
    titulo: 'O que é a Doença Periodontal?',
    texto: 'É uma infeção bacteriana crónica que afeta o osso, a gengiva e o ligamento periodontal e que pode dividir-se em dois grandes grupos: Gengivite - Inflamação da gengiva e Periodontite - destruição irreversível do osso e dos ligamentos que suportam os dentes.',
    destaque: true,
  },
  {
    icone: '🦷',
    titulo: 'Gengivite',
    texto: 'Inflamação da gengiva. Trata-se duma situação reversível, frequentemente causada por uma má higiene oral, cujos sintomas são sangramento gengival, inchaço e dor.',
    destaque: false,
  },
  {
    icone: '⚠️',
    titulo: 'Periodontite',
    texto: 'Destruição irreversível do osso e dos ligamentos que suportam os dentes. Não provoca dor e, não sendo tratada atempadamente, pode levar à perda total dos dentes.',
    destaque: false,
  },
]

const faqs = [
  {
    pergunta: 'A periodontite é uma doença grave?',
    resposta: [
      'Sim, se não for tratada a tempo poderá causar retração das gengivas e perda de dentes. A periodontite poderá também ter influencia no desenvolvimento de doenças cardíacas, respiratórias e diabetes, além da alteração do percurso normal de gestação, entre outras doenças sistémicas.',
    ],
  },
  {
    pergunta: 'Como é feito o diagnóstico da periodontite?',
    resposta: [
      'O diagnóstico da doença é feito através da sondagem das gengivas e análise dos exames radiográficos, que verificam a presença de pus e sangramento gengival em áreas profundas do periodonto.',
    ],
  },
  {
    pergunta: 'Quais as causas da periodontite?',
    resposta: [
      'A principal causa é a acumulação de placa bacteriana nos dentes e gengivas. Fatores de risco incluem má higiene oral, tabagismo, diabetes, predisposição genética, stress, e alguns medicamentos que causam alterações gengivais.',
    ],
  },
  {
    pergunta: 'Qual o tratamento para a periodontite?',
    resposta: [
      'O tratamento da periodontite inicia-se com a realização de destartarização e de alisamentos radiculares no sentido de remover a placa bacteriana e o tártaro acumulados acima da linha da gengiva mas também em profundidade, com recurso a instrumentos ultrassónicos e manuais. Simultaneamente a este tratamento é imprescindível a aquisição de hábitos de higiene diária como escovagem eficaz e limpeza interproximal (fio/fita/escovilhão) de modo a controlar a doença periodontal. Após esta primeira fase é feito um controlo para avaliar se a doença está controlada e podemos passar para a fase de manutenção periódica ou, se necessita de uma intervenção cirúrgica para auxiliar o tratamento em profundidade dos tecidos gengivais e ósseos.',
    ],
  },
  {
    pergunta: 'A doença periodontal tem cura?',
    resposta: [
      'A doença periodontal, apesar de não ter cura, pode ser controlada e apenas reaparece se o doente não conseguir manter uma higiene oral correta e cuidadosa.',
    ],
  },
  {
    pergunta: 'O que é a placa bacteriana?',
    resposta: [
      'A placa bacteriana consiste numa película que adere á superfície dos dentes e junto à linha da gengiva, sendo constituída por bactérias, produtos produzidos pelas bactérias e saliva.',
    ],
  },
  {
    pergunta: 'O que é a gengivite?',
    resposta: [
      'A gengivite é a inflamação da gengiva devido à acumulação de placa bacteriana e tártaro, ou devido a outros factores como gravidez, doenças sistémicas e medicamentos.',
    ],
  },
  {
    pergunta: 'A gengivite tem cura?',
    resposta: [
      'Sim. O tratamento da gengivite baseia-se na remoção pelo seu médico dentista/higienista do tártaro e da placa bacteriana que se encontram acumulados de modo a eliminar o factor desencadeaste da inflamação.',
    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`perio-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="perio-faq-pergunta">
        <span>{pergunta}</span>
        <span className="perio-faq-icone">{aberto ? '−' : '+'}</span>
      </div>

      {aberto && (
        <div className="perio-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="perio-faq-paragrafo">
              {linha}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Periodontologia() {
  return (
    <main className="perio-page">

      {/* HERO */}
      <section className="perio-hero">
        <div className="perio-hero-inner">
          <div className="perio-hero-texto">
            <span className="perio-tag">Diagnósticos e Tratamento de Doenças que afetam</span>
            <h1>Tecidos de Suporte <em>dos Dentes</em></h1>
            <p>Doenças periodontais, como a gengivite e a periodontite, são doenças inflamatórias que afetam os tecidos de suporte dos dentes, gengiva e osso alveolar. A Periodontologia é a área da Medicina Dentária que se dedica ao seu diagnóstico e tratamento.</p>
            <p>É de facto, uma das doenças crónicas inflamatórias mais comuns no Homem, causada essencialmente por bactérias presentes na placa bacteriana e uma das principais causas para a perda dentária em adultos.</p>
          </div>
          <div className="perio-hero-card">
            <span className="perio-hero-card-tag">Doenças</span>
            <h2>Periodontais</h2>
            <p>Estão entre as mais frequentes da raça humana. A gengivite afeta quase a totalidade da população, tanto infantil como adulta. A periodontite afecta quase um em cada dois adultos com mais de 35 anos.</p>
            <button className="btn-perio-cta">📞 Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* DOENÇA PERIODONTAL */}
      <section className="perio-doenca">
        <div className="perio-doenca-inner">
          <div className="perio-section-header">
            <span className="perio-tag-white">Gengivite e Periodontite</span>
            <h2>Doença <em>Periodontal</em></h2>
            <div className="perio-divisor"></div>
          </div>
          <div className="perio-doenca-grid">
            {doencas.map((d, i) => (
              <div className={`perio-doenca-card${d.destaque ? ' destaque' : ''}`} key={i}>
                <span className="perio-doenca-icone">{d.icone}</span>
                <div>
                  <h3>{d.titulo}</h3>
                  <p>{d.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMO EVITAR */}
      <section className="perio-evitar">
        <div className="perio-evitar-inner">
          <div className="perio-evitar-imagem">
            <div className="perio-foto-wrapper">
              <div className="perio-anel-1"></div>
              <div className="perio-anel-2"></div>
              <div className="perio-foto-circulo">
                <img src="/periodontologia.png" alt="Periodontologia" />
              </div>
            </div>
          </div>
          <div className="perio-evitar-texto">
            <span className="perio-tag">Periodontite ou Gengivite</span>
            <h2>Como <em>Evitar</em></h2>
            <p>Faça corretamente a sua higiene oral em casa e visite regularmente de 6 em 6 meses o seu Médico Dentista para limpeza dentária profissional, uma dieta saudável e não fumar inclusive também as formas de prevenção da periodontose.</p>
            <p>Por outro lado, prevenir a gengivite e prevenir a periodontite. A inflamação gengival (gengivite) não se desenvolverá se não existir placa bacteriana nos dentes. A sem gengiva, não ocorre periodontose.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="perio-faq">
        <div className="perio-faq-inner">
          <div className="perio-section-header">
            <span className="perio-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="perio-divisor"></div>
          </div>
          <div className="perio-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="perio-faq-cta">
            <button className="btn-perio-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}
