import Link from "next/link";

export default function Home() {
  return (
    <main className="route-picker">
      <div className="route-picker-card">
        <span className="eyebrow">Carreira Profissional Prime</span>
        <h1>Seu Primeiro Negócio Digital</h1>
        <p>Escolha uma das três versões da página de vendas.</p>
        <div className="route-picker-links">
          <Link href="/a1">Ver A1</Link>
          <Link href="/a2">Ver A2</Link>
          <Link href="/a3">Ver A3</Link>
        </div>
      </div>
    </main>
  );
}
