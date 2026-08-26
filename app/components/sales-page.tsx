import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  CheckCircle2,
  Clock3,
  Compass,
  GraduationCap,
  HeartHandshake,
  LaptopMinimal,
  Lightbulb,
  Map,
  MousePointerClick,
  PackageCheck,
  Route,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";
import { BrandMark } from "./brand-mark";
import { Portrait } from "./portrait";

export type AngleKey = "a1" | "a2" | "a3";

type Angle = {
  title: string;
  support: string;
  button: string;
};

const angles: Record<AngleKey, Angle> = {
  a1: {
    title: "Você não está sem capacidade. Está sem uma rota.",
    support:
      "Em uma aula ao vivo e prática, organize as informações soltas e descubra qual negócio digital combina com seu perfil, o que vender, para quem e qual passo dar primeiro.",
    button: "Quero encontrar meu caminho",
  },
  a2: {
    title:
      "Seu negócio digital não precisa começar com seguidores. Precisa começar com clareza.",
    support:
      "Antes de pensar em ferramentas, anúncios ou exposição, descubra o modelo que faz sentido para sua realidade e transforme essa escolha em um plano simples de execução.",
    button: "Quero comecar com clareza",
  },
  a3: {
    title:
      "Saia da aula sabendo o que vender, para quem e qual passo dar primeiro.",
    support:
      "Mesmo que você trabalhe o dia todo, tenha pouco tempo, não goste de aparecer e ainda não domine tecnologia ou marketing.",
    button: "Quero meu plano de ação",
  },
};

const checkoutUrl =
  process.env.NEXT_PUBLIC_CHECKOUT_URL ||
  "https://wa.me/5511955835595?text=Quero%20garantir%20minha%20vaga%20no%20workshop%20Seu%20Primeiro%20Negocio%20Digital";

const decisions = [
  {
    number: "01",
    icon: Compass,
    title: "Perfil",
    text: "Entender seus conhecimentos, sua rotina e a forma de trabalho que combina com você.",
  },
  {
    number: "02",
    icon: Map,
    title: "Modelo",
    text: "Comparar os caminhos digitais e escolher um ponto de partida coerente com sua realidade.",
  },
  {
    number: "03",
    icon: PackageCheck,
    title: "Oferta",
    text: "Definir o que vender, para quem vender e por que essa solução merece atenção.",
  },
  {
    number: "04",
    icon: Route,
    title: "Plano",
    text: "Organizar as primeiras ações em uma sequência possível de colocar em prática.",
  },
];

const learning = [
  [Target, "Qual negócio digital faz sentido para seu perfil"],
  [BriefcaseBusiness, "Como começar sem abandonar sua fonte de renda atual"],
  [PackageCheck, "O que vender e para quem vender"],
  [MousePointerClick, "As principais formas de vender pela internet"],
  [LaptopMinimal, "As ferramentas realmente necessárias para iniciar"],
  [Route, "Um plano de ação para sair da aula e começar"],
] as const;

const includes = [
  {
    icon: UsersRound,
    title: "Workshop ao vivo e prático",
    text: "Uma experiência guiada para tomar decisões, preencher as atividades e organizar o seu ponto de partida.",
  },
  {
    icon: Map,
    title: "Material de apoio e plano de ação",
    text: "Um resumo para acompanhar a aula e transformar clareza em próximos passos.",
  },
  {
    icon: CheckCircle2,
    title: "Checklist dos primeiros passos",
    text: "Uma lista objetiva para você saber o que priorizar e o que pode esperar.",
  },
  {
    icon: LaptopMinimal,
    title: "Lista de ferramentas essenciais",
    text: "Opções gratuitas e pagas para começar sem comprar tudo antes da hora.",
  },
  {
    icon: HeartHandshake,
    title: "Grupo exclusivo no WhatsApp",
    text: "Orientações antes do encontro e suporte inicial por 7 dias depois da aula.",
  },
];

const faqs = [
  [
    "A aula e para quem nunca trabalhou com negocios digitais?",
    "Sim. O workshop foi desenvolvido para iniciantes e apresenta as decisões de forma simples, prática e organizada.",
  ],
  [
    "Preciso largar meu emprego para começar?",
    "Não. A proposta é ajudar você a construir um novo caminho enquanto preserva a fonte de renda que já possui.",
  ],
  [
    "Preciso aparecer nas redes sociais ou gravar videos?",
    "Não necessariamente. Existem modelos de negócio que não dependem da exposição pessoal. Na aula, você compara alternativas antes de escolher.",
  ],
  [
    "Preciso entender de tecnologia ou marketing?",
    "Não. O conteúdo parte do essencial e mostra quais ferramentas realmente importam no início.",
  ],
  [
    "A aula acontece ao vivo?",
    "Sim. O encontro está previsto para 25 de setembro, às 20h, com atividades práticas e espaço para aplicação do conteúdo.",
  ],
  [
    "Vou receber suporte depois da aula?",
    "Sim. A oferta inclui orientações no grupo exclusivo e suporte inicial por 7 dias após o encontro.",
  ],
  [
    "Existe garantia?",
    "Sim. Você conta com garantia de 7 dias para avaliar a experiência com tranquilidade.",
  ],
  [
    "O workshop promete renda rápida?",
    "Não. A proposta é oferecer clareza, método e um plano realista. A execução e os resultados dependem das escolhas e da aplicação de cada pessoa.",
  ],
];

function CtaButton({ label, dark = false }: { label: string; dark?: boolean }) {
  return (
    <a
      className={`cta-button ${dark ? "cta-button-dark" : ""}`}
      href={checkoutUrl}
      target="_blank"
      rel="noreferrer"
    >
      <span>{label}</span>
      <ArrowRight size={19} aria-hidden="true" />
    </a>
  );
}

export function SalesPage({ angleKey }: { angleKey: AngleKey }) {
  const angle = angles[angleKey];

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href={`/${angleKey}`} aria-label="Início da página">
            <BrandMark />
          </Link>
          <a className="header-link" href="#inscricao">
            Ver a oferta
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <section className="hero section-dark">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="hero-kicker">
              Workshop ao vivo <span>Seu Primeiro Negócio Digital</span>
            </p>
            <h1>{angle.title}</h1>
            <p className="hero-support">{angle.support}</p>
            <CtaButton label={angle.button} />
            <p className="microcopy">
              <ShieldCheck size={17} aria-hidden="true" />
              Investimento acessível, encontro ao vivo e 7 dias de garantia.
            </p>
          </div>
          <Portrait
            kind="hero"
            src="/images/renata-hero-v2.png"
            alt="Renata Garcia em retrato profissional para o workshop Seu Primeiro Negócio Digital"
          />
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      <section className="event-bar" aria-label="Informações do workshop">
        <div className="shell event-grid">
          <div>
            <Clock3 aria-hidden="true" />
            <span>
              <small>Data e horário</small>
              25 de setembro, às 20h
            </span>
          </div>
          <div>
            <UsersRound aria-hidden="true" />
            <span>
              <small>Formato</small>
              Ao vivo e prático
            </span>
          </div>
          <div>
            <GraduationCap aria-hidden="true" />
            <span>
              <small>Nivel</small>
              Criado para iniciantes
            </span>
          </div>
          <div>
            <Sparkles aria-hidden="true" />
            <span>
              <small>Investimento</small>
              R$ 29,90
            </span>
          </div>
        </div>
      </section>

      <section className="section problem-section">
        <div className="shell narrow-grid">
          <div className="section-intro">
            <span className="eyebrow">O que está travando você</span>
            <h2>O problema não é falta de informação.</h2>
          </div>
          <div className="problem-copy">
            <p className="lead">
              Você pode assistir a mais um vídeo, salvar mais um post e comprar
              mais um curso. Se cada conteúdo apontar para um lado, a sensação
              continuará a mesma: muito movimento e nenhuma direção.
            </p>
            <p>
              Esse é o Labirinto das Estratégias Soltas. Ferramentas, anúncios,
              plataformas e ideias aparecem antes da decisão principal: qual
              negócio combina com você e com a vida que você tem hoje.
            </p>
            <div className="callout-line">
              <Lightbulb aria-hidden="true" />
              <strong>
                Clareza vem antes da execução. Crescimento vem depois da
                construção.
              </strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section route-section section-dark">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow eyebrow-light">O mecanismo da aula</span>
            <h2>A Rota Prime de 4 Decisões</h2>
            <p>
              Uma sequência para tirar você do excesso de possibilidades e
              levar até um primeiro plano coerente.
            </p>
          </div>
          <div className="decisions-grid">
            {decisions.map((decision) => {
              const Icon = decision.icon;
              return (
                <article className="decision-card" key={decision.number}>
                  <span className="decision-number">{decision.number}</span>
                  <Icon aria-hidden="true" />
                  <h3>{decision.title}</h3>
                  <p>{decision.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section learning-section">
        <div className="shell learning-layout">
          <div className="section-heading sticky-heading">
            <span className="eyebrow">O que você vai aprender</span>
            <h2>Da dúvida ao próximo passo, sem pular o que importa.</h2>
            <p>
              A aula foi desenhada para você compreender as opções, tomar uma
              decisão e sair com uma ordem de execução.
            </p>
            <CtaButton label="Quero participar da aula" dark />
          </div>
          <div className="learning-list">
            {learning.map(([Icon, text], index) => (
              <div className="learning-item" key={text}>
                <span className="learning-icon">
                  <Icon aria-hidden="true" />
                </span>
                <div>
                  <small>Aprendizado {String(index + 1).padStart(2, "0")}</small>
                  <h3>{text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section fit-section">
        <div className="shell fit-card">
          <div className="fit-main">
            <span className="eyebrow eyebrow-light">Esta aula é para você que</span>
            <h2>Quer construir uma nova fonte de renda sem dar um salto no escuro.</h2>
          </div>
          <div className="fit-list">
            {[
              "Trabalha durante o dia e precisa de um caminho que respeite sua rotina.",
              "Quer começar, mas ainda não sabe qual modelo digital escolher.",
              "Já tentou aprender sozinho e se perdeu entre informações soltas.",
              "Não quer depender da imagem de influenciador para vender.",
              "Prefere um plano sério a uma promessa de dinheiro fácil.",
            ].map((item) => (
              <div key={item}>
                <Check aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section authority-section">
        <div className="shell authority-grid">
          <Portrait
            kind="authority"
            src="/images/renata-authority-v2.png"
            alt="Renata Garcia em ambiente profissional da Carreira Profissional Prime"
          />
          <div className="authority-copy">
            <span className="eyebrow">Quem vai conduzir você</span>
            <h2>Renata Garcia conhece a rotina de quem não pode parar tudo para começar.</h2>
            <p>
              Engenheira civil, mestre, doutora e professora universitária,
              Renata construiu o próprio negócio digital enquanto conciliava
              uma rotina intensa em diferentes instituições de ensino e a
              criação dos filhos.
            </p>
            <p>
              Depois de cursos, testes, erros e ajustes, o negócio se tornou
              sua principal fonte de renda. Dessa experiência nasceu a Carreira
              Profissional Prime, uma escola com sede física em Lins, São Paulo,
              e foco em ensino prático e acompanhamento.
            </p>
            <div className="authority-facts">
              <div>
                <strong>3 anos</strong>
                <span>de atuação lucrativa no digital</span>
              </div>
              <div>
                <strong>150+</strong>
                <span>alunos formados pela CPP em cursos técnicos e especializações</span>
              </div>
            </div>
            <p className="evidence-note">
              O programa de Negócios Digitais está em sua primeira turma. Os
              números acima se referem às outras formações da CPP.
            </p>
          </div>
        </div>
      </section>

      <section className="section includes-section section-soft">
        <div className="shell">
          <div className="section-heading centered">
            <span className="eyebrow">Tudo o que está incluso</span>
            <h2>Uma aula para entender. Materiais para continuar.</h2>
          </div>
          <div className="includes-grid">
            {includes.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className="include-card" key={item.title}>
                  <span className="include-index">0{index + 1}</span>
                  <Icon aria-hidden="true" />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section offer-section" id="inscricao">
        <div className="shell offer-shell">
          <div className="offer-copy">
            <span className="eyebrow eyebrow-light">Sua decisão de começar</span>
            <h2>Troque meses de tentativa por uma noite de clareza.</h2>
            <p>
              Você não precisa descobrir tudo agora. Precisa encontrar um ponto
              de partida que faça sentido e saber qual movimento vem depois.
            </p>
            <ul>
              <li>
                <CheckCircle2 aria-hidden="true" /> Workshop ao vivo e prático
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Materiais e checklist de execução
              </li>
              <li>
                <CheckCircle2 aria-hidden="true" /> Grupo e suporte inicial por 7 dias
              </li>
            </ul>
          </div>
          <div className="price-card">
            <span className="price-kicker">Acesso ao workshop</span>
            <div className="price">
              <small>R$</small>
              <strong>29</strong>
              <span>,90</span>
            </div>
            <p>Pagamento unico.</p>
            <CtaButton label="Garantir minha vaga" />
            <div className="guarantee-row">
              <ShieldCheck aria-hidden="true" />
              <span>
                <strong>7 dias de garantia</strong>
                Avalie sua compra com tranquilidade.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-layout">
          <div className="section-heading">
            <span className="eyebrow">Perguntas frequentes</span>
            <h2>O que você precisa saber antes de entrar.</h2>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="closing-section section-dark">
        <div className="closing-pattern" aria-hidden="true" />
        <div className="shell closing-content">
          <span className="eyebrow eyebrow-light">O primeiro passo não precisa ser enorme</span>
          <h2>Precisa apontar para o lugar certo.</h2>
          <p>
            Participe do workshop Seu Primeiro Negócio Digital e organize sua
            rota antes de investir mais tempo, energia e dinheiro.
          </p>
          <CtaButton label="Quero garantir minha vaga" />
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <BrandMark />
          <div>
            <p>Carreira Profissional Prime</p>
            <p>Rua Rio Branco, 273, Loja 11, Lins, SP</p>
          </div>
            <p>Formação profissional com aplicação prática.</p>
        </div>
      </footer>
    </main>
  );
}
