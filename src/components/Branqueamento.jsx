import './Branqueamento.css'
import { useState } from 'react'

const vantagens = [
  {
    icone: '⚡',
    titulo: 'Resultados Mais Rápidos',
    texto: 'Os kits de branqueamento dentário caseiro requerem várias aplicações e os resultados mais ou menos duvidosos, aparecem apenas no fim de dias ou semanas. Na clínica é possível obter resultados significativos logo na primeira sessão de tratamento.',
  },
  {
    icone: '🦷',
    titulo: 'Branqueamento Personalizado',
    texto: 'O Médico Dentista terá em atenção toda a vertente do seu caso, ajustando o tratamento à medida das suas expectativas. Irá também proteger e isolar todas as estruturas da sua boca, evitando quaisquer efeitos negativos do agente branqueador.',
  },
  {
    icone: '🏆',
    titulo: 'Relação Preço / Qualidade',
    texto: 'Os branqueamentos na clínica são mais eficazes ao nível dos resultados e dos riscos. Os agentes de branqueamento usados em gabinetes médicos permitem alcançar com mais clareza e resultados mais duradouros. Os kits caseiros têm pouca eficácia.',
  },
  {
    icone: '✨',
    titulo: 'Remove Manchas',
    texto: 'Os branqueamentos dentários realizados por um Médico Dentista aqui na Clínica permitem remover manchas inestéticas de forma mais eficaz do que os que encontra à venda online ou em hipermercados e para farmácias. O resultado é um sorriso mais homogéneo e brilhante.',
  },
  {
    icone: '🛡️',
    titulo: 'Mais Seguro',
    texto: 'Já pensou sobre os efeitos de fazer um branqueamento dentário tendo problemas de Saúde Oral ativos? O Médico Dentista pode avaliar eficazmente se reúne todas as condições para fazer um branqueamento, evitando, por exemplo, o agravamento de cáries ativas.',
  },
]

const faqs = [
  {
    pergunta: 'O que pode causar escurecimento dos dentes?',
    resposta: [
      'A ingestão regular de alimentos tais como: café, chá, Coca-Cola, vinho tinto ou outros com alto teor de corantes; aumento da idade; tabaco; manchas por antibióticos dados durante a formação dos dentes em criança; ingestão de flúor; outras doenças sistémicas durante a fase de formação dos dentes; desvitalização ou traumas.',
    ],
  },
  {
    pergunta: 'O branqueamento é seguro e eficaz?',
    resposta: [
      'Existem várias técnicas, diversos materiais e produtos disponíveis nas clínicas dentárias. Desde que usados corretamente e com as devidas precauções permitem resultados muito eficazes e surpreendentes.',
      'Por outro lado, nos supermercados, TV shops aparecem inúmeros artigos de venda livre. Geralmente, além de opções pouco seguras, são também pouco eficazes porque as substâncias vendidas no dentista não podem ser adquiridas no supermercado.',
    
    ],
  },
  {
    pergunta: 'Existem contra-indicações?',
    resposta: [
      'Sim, desde que não existam cáries. O gel branqueia apenas o dente natural, se tiver restaurações muito extensas pode não ser aconselhado o branqueamento. As restaurações compostas de compósito também não branqueiam e, por essa razão, pode existir diferenças de tonalidade na cor do dente restaurado. Não se aconselha branqueamentos a grávidas ou mães a amamentar e crianças. Não se conhecem contra indicações ou que o branqueamento possa interferir com a saúde do bebe, no entanto, por precaução, o ideal é que o branqueamento seja feito antes ou depois de engravidar.',
    ],
  },
  {
    pergunta: 'Pode danificar o esmalte dos dentes?',
    resposta: [
      'Se for feito de tempos a tempos e com produtos certificados não danifica o esmalte. Deve seguir as indicações médicas durante a sua aplicação.',
    ],
  },
   {
    pergunta: 'Pode causar sensibilidade?',
    resposta: [
      'Sim, em algumas pessoas e é passageira. Existem géis dessensibilizantes à base de fluor e potássio que aliviam os sintomas.',
    ],
  },
     {
    pergunta: 'Que cuidados devo ter depois de um branqueamento dentário?',
    resposta: [
      'Deve evitar alimentos tais como café, chá, vinho tinto e outros com muitos corantes como os morangos, a beterraba, a amora ou a cenoura. Pelo menos durante o tempo necessário ao branqueamento. Concluído o tratamento pode voltar a ingerir as frutas com corante e o ideal será escovar os dentes a seguir às refeições.',
    ],
  },
       {
    pergunta: 'Que cuidados devo ter depois de um branqueamento dentário?',
    resposta: [
      'O branqueamento pode durar de um a quatro anos, tudo depende dos hábitos alimentares e sociais da pessoa.',
      'A Clínica de São Francisco sugere o branqueamento dentário que só é possível adquirir em clínicas dentárias. Os resultados visíveis após a primeira aplicação.',

    ],
  },
]

function FAQ({ pergunta, resposta }) {
  const [aberto, setAberto] = useState(false)

  return (
    <div
      className={`branq-faq-item${aberto ? ' aberto' : ''}`}
      onClick={() => setAberto(!aberto)}
    >
      <div className="branq-faq-pergunta">
        <span>{pergunta}</span>
        <span className="branq-faq-icone">{aberto ? '−' : '+'}</span>
      </div>

      {aberto && (
        <div className="branq-faq-resposta">
          {resposta.map((linha, i) => (
            <p key={i} className="branq-faq-paragrafo">
              {linha}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Branqueamento() {
  return (
    <main className="branq-page">

      {/* HERO */}
      <section className="branq-hero">
        <div className="branq-hero-inner">
          <div className="branq-hero-texto">
            <span className="branq-tag">Dentes Mais Brancos</span>
            <h1>Sorria Sem <em>Medos</em></h1>
            <p>É uma daquelas pessoas que esconde o seu sorriso por achar que os seus dentes não são tão brancos quanto gostaria que fossem?</p>
            <p>O branqueamento dentário é um procedimento médico que torna os dentes mais brancos com o dentista e é atualmente um dos tratamentos mais procurados em consequência das novas técnicas que têm vindo a oferecer com sucesso numa só consulta.</p>
          </div>
          <div className="branq-hero-card">
            <span className="branq-hero-card-tag">Branqueamento Dentário</span>
            <h2>Sorriso + Branco</h2>
            <p>Ter um sorriso mais branco é potenciador de uma melhor autoestima. Conheça os tratamentos de branqueamento dentário recomendados.</p>
            <button className="btn-branq-cta">📞 Contacte Agora</button>
          </div>
        </div>
      </section>

      {/* VANTAGENS */}
      <section className="branq-vantagens">
        <div className="branq-vantagens-inner">
          <div className="branq-section-header">
            <span className="branq-tag-white">Vantagens de</span>
            <h2>Fazer na <em>Clínica</em></h2>
            <div className="branq-divisor"></div>
          </div>
          <div className="branq-vantagens-grid">
            {vantagens.map((v, i) => (
              <div className="branq-vantagem-card" key={i}>
                <span className="branq-vantagem-icone">{v.icone}</span>
                <div>
                  <h3>{v.titulo}</h3>
                  <p>{v.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SORRISO CUIDADO */}
      <section className="branq-sorriso">
        <div className="branq-sorriso-inner">
          <div className="branq-sorriso-imagem">
            <div className="branq-foto-wrapper">
              <div className="branq-anel-1"></div>
              <div className="branq-anel-2"></div>
              <div className="branq-foto-circulo">
                <img src="/branqueamento.png" alt="Branqueamento Dentário" />
              </div>
            </div>
          </div>
          <div className="branq-sorriso-texto">
            <span className="branq-tag">Aumentar a Autoestima</span>
            <h2>Sorriso <em>Cuidado</em></h2>
            <p>Além de aumentar a autoestima, um sorriso cuidado também poderá ajudar a melhorar a relação com os outros. Hoje em dia existem soluções relativamente simples para corrigir as alterações da cor dentária, nomeadamente, os tratamentos de branqueamento dentário.</p>
            <p>Faça o acompanhamento da sua saúde oral na Clínica de São Francisco. Estamos à disposição em Beja.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="branq-faq">
        <div className="branq-faq-inner">
          <div className="branq-section-header">
            <span className="branq-tag-white">Perguntas Frequentes</span>
            <h2>Tem <em>Dúvidas?</em></h2>
            <div className="branq-divisor"></div>
          </div>
          <div className="branq-faq-lista">
            {faqs.map((f, i) => <FAQ key={i} pergunta={f.pergunta} resposta={f.resposta} />)}
          </div>
          <div className="branq-faq-cta">
            <button className="btn-branq-cta-outline">Fale Connosco → Estamos em Beja a aguardar a sua marcação</button>
          </div>
        </div>
      </section>

    </main>
  )
}
