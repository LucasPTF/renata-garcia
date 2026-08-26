import { ArrowRight, CheckCircle2, Mail, MessageCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { BrandMark } from "../components/brand-mark";

export const metadata = {
  title: "Inscrição recebida | Carreira Profissional Prime",
  description: "Orientações para os próximos passos da sua inscrição.",
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page section-dark">
      <header className="site-header thank-you-header">
        <div className="shell header-inner">
          <Link href="/a1" aria-label="Voltar para a página principal">
            <BrandMark />
          </Link>
        </div>
      </header>
      <section className="thank-you-shell shell">
        <div className="thank-you-icon">
          <CheckCircle2 aria-hidden="true" />
        </div>
        <span className="eyebrow eyebrow-light">Próximo passo</span>
        <h1>Sua jornada começa com uma checagem simples.</h1>
        <p className="thank-you-lead">
          Se o pagamento já foi concluído, procure a confirmação enviada pela
          plataforma de compra e siga as orientacoes de acesso recebidas por
          e-mail ou WhatsApp.
        </p>
        <div className="next-steps">
          <article>
            <span>01</span>
            <Mail aria-hidden="true" />
            <h2>Confira sua confirmação</h2>
            <p>
              Verifique a caixa de entrada e também as pastas de spam e
              promoções do e-mail usado na compra.
            </p>
          </article>
          <article>
            <span>02</span>
            <MessageCircle aria-hidden="true" />
            <h2>Siga a orientação de acesso</h2>
            <p>
              O grupo oficial concentra os avisos, lembretes e informações da
              aula. Use apenas o acesso enviado após a confirmação.
            </p>
          </article>
          <article>
            <span>03</span>
            <ShieldCheck aria-hidden="true" />
            <h2>Fale com o suporte se precisar</h2>
            <p>
              Se a confirmação não chegar, use o atendimento oficial da CPP
              para localizar sua inscrição.
            </p>
          </article>
        </div>
        <a
          className="cta-button"
          href="https://wa.me/5511955835595?text=Preciso%20de%20ajuda%20com%20minha%20inscricao%20no%20workshop"
          target="_blank"
          rel="noreferrer"
        >
          <span>Falar com o suporte oficial</span>
          <ArrowRight size={19} aria-hidden="true" />
        </a>
        <p className="thank-you-safety">
          Por segurança, confie apenas nas mensagens enviadas pelos canais
          oficiais da Carreira Profissional Prime.
        </p>
      </section>
    </main>
  );
}
