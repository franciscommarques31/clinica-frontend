import './Ortodontia.css'
import { useState } from 'react'

const aparelhos = [
  {
    icone: '🎯',
    titulo: 'Objetivos do tratamento',
    texto: 'Melhora a saúde em geral e a saúde oral. Melhora a aparência de uma pessoa através de um sorriso bonito. O rosto fica harmonizado e em harmonia com os dentes e com as maxilares. Melhora a função fonética e a articulação das palavras. Corrige a função mastigatória.',
  },
  {
    icone: '🔧',
    titulo: 'Aparelho fixo',
    texto: 'O tipo mais comum de aparelho. Esta ortodontia apenas pode ser retirada pelo dentista. Normalmente é constituída por brackets que são pequenas peças metálicas por cima dos dentes e um fio superior e arco que produz a deslocação e correção dos dentes. Os aparelhos fixos são geralmente aplicados em adolescentes e adultos e ajustados a cada mês para se obter os resultados desejados.',
  },
  {
    icone: '😊',
    titulo: 'Como se faz o Tratamento?',
    texto: 'Através dos diversos tipos de aparelhos dentários e de uma força suave nos dentes e maxilares esses movem-se para a posição correta. O sucesso da correção depende muito da colaboração do paciente e da sua estabilidade nas consultas regulares de controlo com a dentista ortodontista.',
  },
  {
    icone: '✨',
    titulo: 'Aparelho móvel ou removível',
    texto: 'Este tipo de aparelho pode ser retirado da boca (nas refeições e na escovagem dentária). É mais barato, tem custos de manutenção mais baixos, é mais simples a consertar, mas que não permite suportar forças mais elevadas na movimentação dos dentes, e como tal, é apenas indicado em crianças onde não se apresenta uma ação muito "agressiva", implicando menor desconforto.',
  },
  {
    icone: '💎',
    titulo: 'Aparelho Invisível (Invisalign®)',
    texto: 'A correção é realizada mediante molduras (alginers) transparentes que encaixam nos dentes (sendo retiradas a cada período) mediante um planeamento previamente planeado por uma tecnologia avançada de Imagem de computador em 3D. A estética é o um dos benefícios a referir neste tipo de aparelho que, sendo transparente e não existindo qualquer tipo de arame, passa despercebida.',
  },
]

const faqs = [
  {
    pergunta: 'O que é um aparelho ortodoôndico ou dentário?',
    resposta: [
      'Um aparelho ortodôntico ou aparelho dentário é utilizado para corrigir ou alinhar a posição dos dentes, não somente por motivos estéticos, mas também por motivos de ordem funcional ou de má oclusão.',
    ],
  },
  {
    pergunta: 'Sou candidato a um tratamento?',
    resposta: [
      'Só o médico dentista poderá fazer esta avaliação. Para diagnosticar o tipo de tratamento ortodôntico utilizam-se instrumentos de diagnóstico, como o exame clínico, moldes de gesso dos dentes, fotografias e radiografias como a ortopantomografia ou radiografia da face e telerradiografia ou radiografia do perfil.',
    ],
  },
  {
    pergunta: 'Quando colocar aparelho nos dentes?',
    resposta: [
      'A decisão de colocar aparelho nos dentes deve ser tomada após uma avaliação ortodôntica pelo Médico Dentista, e nunca ser considerado apenas para corrigir dentes tortos ou dentes separados (diastemas), por exemplo. Efetivamente, muitas vezes, ou até na maioria das vezes, o paciente recorre ao Médico Dentista Ortodontista com o objetivo único de melhorar a sua estética ou aparência dento-facial, aumentando assim a sua autoestima e o à vontade em sorrir.',
    ],
  },
    {
    pergunta: 'Qual a idade certa, quando colocar?',
    resposta: [
      'Não existe propriamente uma idade ideal. Em geral os aparelhos colocam-se a partir dos 6 e 7 anos, no entanto, é possível tratamento de correção em pacientes com 50 ou 70 anos.',
    ],
  },
    {
    pergunta: 'Tratamento em Adultos também é possível?',
    resposta: [
      'Tratamento ortodôntico pode ser aplicado em qualquer idade. Na verdade, mais de 30% dos pacientes tratados actualmente são pacientes adultos.',
    ],
  },
    {
    pergunta: 'Quando se deve fazer a primeira consulta de ortodontia?',
    resposta: [
      'A grande maioria dos problemas ortodônticos são mais fáceis de corrigir se foram detetados numa fase preliminar. Atualmente recomenda-se que a primeira consulta de ortodontia seja feita por volta dos 7 anos de idade ou antes se for detetado algum problema pelos familiares, pelo seu dentista ou pediatra.',
    ],
  },
    {
    pergunta: 'Colocar o aparelho nos dentes causa dor?',
    resposta: [
      'Não. Geralmente o paciente sente algum desconforto nos primeiros dias. Esse desconforto desaparece com o tempo. É normal sentir uma pequena mobilidade nos dentes durante o tratamento.',
    ],
  },
    {
    pergunta: 'Quanto tempo terei que usar aparelho?',
    resposta: [
      'Em relação à duração do tratamento, este pode ser variável dependendo do caso, variando habitualmente entre 1 a 3 anos (de 12 a 36 meses).',
    ],
  },
    {
    pergunta: 'Com que frequência devo visitar o meu dentista?',
    resposta: [
      'Para além das consultas de manutenção próprias da ortodontia (normalmente, 1 vez por mês), é aconselhável visitar o seu dentista com uma frequência mínima de 6 meses para fazer as devidas higienizações orais e o check-up.',
    ],
  },
    {
    pergunta: 'Que tipos de aparelhos dentários existem?',
    resposta: [
      'Existe os Aparelhos Dentários Fixos: Aparelho convencional metálico ou estético, Aparelho autoligado, Aparelho lingual, E os Aparelhos Dentários Removíveis: Invisalign.',
    ],
  },
    {
    pergunta: 'Com tantos tipos de aparelhos, qual o melhor?',
    resposta: [
      'Não existe um aparelho dentário que possa ser recomendado a todas as pessoas. O tratamento mais indicado para si dependerá, naturalmente, da sua situação específica.',
    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`orto-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="orto-faq-pergunta">
        <span>{pergunta}</span>
        <span className="orto-faq-icone">{aberto ? '−' : '+'}</span>
      </div>
      {aberto && (
        <div className="orto-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="orto-faq-paragrafo">{linha}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Ortodontia() {
  return (
    <main className="orto-page">

      {/* HERO */}
      <section className="orto-hero">
        <div className="orto-hero-inner">
          <div className="orto-hero-texto">
            <span className="orto-tag">Dentes Tortos</span>
            <h1>Aparelhos <em>Dentários</em></h1>
            <p>A ortodontia é a área de intervenção que trata os problemas de alinhamento dos dentes e desarmonia dento-facial (má oclusão), recorrendo à colocação de aparelhos dentários.</p>
            <p>Dentes tortos ou dentes que não se encaixam corretamente são difíceis de serem mantidos limpos, podendo ser perdidos precocemente, devido à deterioração e à doença periodontal.</p>
          </div>
          <div className="orto-hero-card">
            <span className="orto-hero-card-tag">Tratamento</span>
            <h2>Ortodôntico</h2>
            <p>O tratamento ortodôntico torna o rosto mais saudável, proporciona uma aparência mais atraente e dentes com possibilidade de durar a vida toda.</p>
            <button className="btn-orto-cta">📞 Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* APARELHOS */}
      <section className="orto-aparelhos">
        <div className="orto-aparelhos-inner">
          <div className="orto-section-header">
            <span className="orto-tag-white">Sobre Ortodontia</span>
            <h2>Aparelhos <em>Dentários</em></h2>
            <div className="orto-divisor"></div>
          </div>
          <div className="orto-aparelhos-grid">
            {aparelhos.map((a, i) => (
              <div className="orto-aparelho-card" key={i}>
                <span className="orto-aparelho-icone">{a.icone}</span>
                <div>
                  <h3>{a.titulo}</h3>
                  <p>{a.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORREÇÃO DO SORRISO */}
      <section className="orto-correcao">
        <div className="orto-correcao-inner">
          <div className="orto-correcao-imagem">
            <div className="orto-foto-wrapper">
              <div className="orto-anel-1"></div>
              <div className="orto-anel-2"></div>
              <div className="orto-foto-circulo">
                <img src="/ortodontia.png" alt="Ortodontia" />
              </div>
            </div>
          </div>
          <div className="orto-correcao-texto">
            <span className="orto-tag">Alinhadores para</span>
            <h2>Correção do <em>Sorriso</em></h2>
            <p>A correção do sorriso pode ser feita em qualquer altura e de várias formas. Há porque existem vários tipos de aparelhos dentários, que se adequam a cada paciente consoante as suas necessidades, gostos e objetivos a decisão de colocar aparelho dentário deve ser tomada após uma avaliação ortodôntica pelo Médico Dentista.</p>
            <p>Melhore a sua estética ou aparência dentofacial e aumente a sua autoestima e a vontade de sorrir.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="orto-faq">
        <div className="orto-faq-inner">
          <div className="orto-section-header">
            <span className="orto-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="orto-divisor"></div>
          </div>
          <div className="orto-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="orto-faq-cta">
            <button className="btn-orto-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}
