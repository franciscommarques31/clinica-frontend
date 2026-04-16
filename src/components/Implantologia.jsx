import './Implantologia.css'
import { useState } from 'react'

const vantagens = [
  { icone: '😊', titulo: 'Conforto', texto: 'Elimina o desconforto e a irritação associadas habitualmente às próteses removíveis.' },
  { icone: '🦷', titulo: 'Osseointegração', texto: 'A osseointegração diária das cenas aplicadas nos implantes é feita como em dentes naturais.' },
  { icone: '✅', titulo: 'Integridade', texto: 'Permitem manter a integridade dos dentes vizinhos pois não necessitam de "pontes".' },
  { icone: '✨', titulo: 'Aparência', texto: 'Permitem e encorajam da estética facial, comprometida na ausência de dentes.' },
  { icone: '🦴', titulo: 'Tecido Ósseo', texto: 'Podem diminuir substancialmente a perda fisiológica do tecido ósseo decorrente das extrações dentárias.' },
  { icone: '⚙️', titulo: 'Funcionalidade', texto: 'Permitem maior capacidade de mastigação, podendo voltar a comer naturalmente.' },
  { icone: '🌿', titulo: 'Dentes Naturais', texto: 'Os implantes permitem uma maior estabilidade das estruturas prostéticas e são a solução mais próxima do natural.' },
  { icone: '🌟', titulo: 'Qualidade de Vida', texto: 'Melhoram substancialmente a autoconfiança e qualidade de vida, socialização e autoestima.' },
]

const faqs = [
  { 
    pergunta: 'Qual é o processo de colocação de implantes dentários?', 
    resposta: [
      'Começa-se por fazer um exame completo (fotografias, radiografias e tomografia axial computorizada - TAC) para determinar exactamente a quantidade de osso existente e o implante a ser colocado',
      'Depois é feita a cirurgia para colocação do implante dentário, que passa pela incisão na gengiva, perfuração do osso, acomodação e proteção do implante e sutura da gengiva',
      'Após a cirurgia, é necessário esperar de três a seis meses que o osso integre o implante (poderá utilizar uma prótese provisória nesse período)',
      'Depois do repouso, é colocado uma pequena peça no implante, que auxiliará na cicatrização da gengiva e então recolhidas impressões para dar início à elaboração e produão da coroa definitiva a ser colocada posteriormente no implante',
    ]
  },
  { 
    pergunta: 'Que tipos de implantes existem?', 
    resposta: [
      'a) Fixas - ideais para repor de forma definitiva os dentes perdidos, nomeadamente: implante unitário com coroa; múltiplos implantes com ponte; múltiplos implantes com ponte total',
      'b) Hibridas - soluções económicas para desdentados totais.',
      'c) Removíveis - overdenture - sistema de encaixe sobre implantes'
    ]
  },
  { 
    pergunta: 'Que tipos de próteses existem?', 
    resposta: [
      '1) Coroas e pontes fixas - quando apenas a coroadentária está em mau estado e é possível aproveitar a raiz.',
      '2) Prótese Combinada - ideal para quem tendo ainda alguns dentes ou raízes saudáveis não pode recorrer aos implantes.',
      '3) Prótese Parcial Removível (Esquelética) - armação metálica cuidadosamente estudada que vai servir de suporte aos dentes artificiais, utilizando os dentes naturais como apoio.',
      'Prótese Acrílica - normalmente utilizadas como provisórias durante um processo de tratamento, em desdentados totais ou em pacientes com prognóstico reservado.'
    ]
  },
  { 
    pergunta: 'Existe dor na colocação do implante dentário?', 
    resposta: [
      'A instalação dos implantes dentários é realizada sob anestesia e portanto não dói. A "sensação do que está sendo realizado mantém-se mas dor não é expectável.',
    ]
  },
  { 
    pergunta: 'Quem pode fazer um implante dentário?', 
    resposta: [
      'Todas as pessoas que precisem de substituir uma ou mais raízes dentárias podem receber implantes dentários. Implantes dentários não são indicados para pessoas que, pela idade, aindão terminaram o seu desenvolvimento ósseo.',
    ]
  },
  { 
    pergunta: 'Os implantes têm prazo de validade?', 
    resposta: [
      'Os implantes dentários não têm um prazo de validade. No entanto, o sucesso a longo prazo dos casos está diretamente relacionado com os cuidados de higiene oral. É fundamental que sejam feitas visitas periódicas para controlo e manuntenção.',
    ]
  },
  { 
    pergunta: 'É necessário manuntenção?', 
    resposta: [
      'Todos os tratamentos dentários devem seguir um programa de manuntenção periódica.',
    ]
  },
  { 
    pergunta: 'Que garantias são oferecidas?', 
    resposta: [
      '1) Implantes, Cerâmicas, Parafusos, Resinas ceremizadas, Facetas estéticas, Metais: 3 anos de garantia. 2) Esqueléticas: 2 anos de garantia 3) Restaurações em compósito fotopolimezirável: 1 ano de garantia. A Clinica de São Francisco substituirá sem custos o trabalho que apresentar defeitos nos prazos especificados. Não estarão abrangidos defeito que derivem de cáries, fraturas de raizes, infeções ou qualquer alteração fisio-patológica. ',
    ]
  },
  { 
    pergunta: 'Há facilidades no pagamento?', 
    resposta: [
      '1) Aceitamos cartões de crédito Visa e Mastercard. 2) Até 12 vezes sem juros (sujeito a aprovação de crédito (campanha válida até 30 de Setembro de 2022) 3) Até 48 vezes com juros(TAEG 4.7%) (sujeito a aprovação de crédito)',
    ]
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div 
      className={`implant-faq-item${aberto ? ' aberto' : ''}`} 
      onClick={() => setAberto(!aberto)}
    >
      <div className="implant-faq-pergunta">
        <span>{pergunta}</span>
        <span className="implant-faq-icone">{aberto ? '−' : '+'}</span>
      </div>

      {aberto && (
        <div className="implant-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="implant-faq-paragrafo">
              {linha}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Implantologia() {
  return (
    <main className="implant-page">

      {/* HERO */}
      <section className="implant-hero">
        <div className="implant-hero-inner">
          <div className="implant-hero-texto">
            <span className="implant-tag">Clínica de Implantologia em Beja</span>
            <h1>Implantes <em>Dentários</em></h1>
            <p>Os implantes dentários substituem de forma fixa dentes perdidos, restabelecendo a função, a aparência e o conforto da mastigação, livre de próteses móveis.</p>
            <p>Um implante dentário permite substituir um dente natural, podendo ser colocado no maxilar superior ou inferior permitindo suportar forças, comer, mastigar ou "trincar", tal como acontece com os dentes naturais.</p>
          </div>
          <div className="implant-hero-card">
            <span className="implant-hero-card-tag">Volte a ter</span>
            <h2>Dentes Fixos</h2>
            <p>A sorrir, com a colocação de Implantes e Dentes Fixos no próprio dia — definido em menos de 24 horas.</p>
            <button className="btn-implant-cta">Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="implant-vantagens">
        <div className="implant-vantagens-inner">
          <div className="implant-section-header">
            <span className="implant-tag-white">Vantagens de Fazer</span>
            <h2>Implantes <em>Dentários</em></h2>
            <div className="implant-divisor"></div>
          </div>
          <div className="implant-vantagens-grid">
            {vantagens.map((v, i) => (
              <div className="implant-vantagem-card" key={i}>
                <span className="implant-vantagem-icone">{v.icone}</span>
                <div>
                  <h3>{v.titulo}</h3>
                  <p>{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DENTES EM FALTA */}
      <section className="implant-dentes">
        <div className="implant-dentes-inner">
          <div className="implant-dentes-imagem">
            <div className="implant-foto-wrapper">
              <div className="implant-anel-1"></div>
              <div className="implant-anel-2"></div>
              <div className="implant-foto-circulo">
                <img src="/implantologia.png" alt="Implantologia" />
              </div>
            </div>
          </div>
          <div className="implant-dentes-texto">
            <span className="implant-tag">Um, Vários ou todos os</span>
            <h2>Dentes <em>em Falta</em></h2>
            <p>A situação de ter um, vários ou todos os dentes em falta é geradora de stress psicológico que afeta a qualidade de vida e a autoestima. Não existe apenas um dente em falta: a substituição faz-se através da colocação de um implante unitário.</p>
            <p>Se tem dois ou mais dentes em falta, a solução deve ser uma ponte sobre implantes. No caso de ter todos os dentes em falta, optar por uma prótese fixa sobre implantes será, de facto, a melhor solução.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="implant-faq">
        <div className="implant-faq-inner">
          <div className="implant-section-header">
            <span className="implant-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="implant-divisor"></div>
          </div>
          <div className="implant-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="implant-faq-cta">
            <button className="btn-implant-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}