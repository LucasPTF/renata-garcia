import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

for (const pathname of ["/a1", "/a2", "/a3", "/obrigado"]) {
  test(`renders ${pathname}`, async () => {
    const response = await render(pathname);
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
    const html = await response.text();
    assert.match(html, /Carreira Profissional Prime/i);
  });
}

test("only the sales hero changes between angle routes", async () => {
  const pages = await Promise.all(
    ["/a1", "/a2", "/a3"].map(async (pathname) => {
      const response = await render(pathname);
      return response.text();
    }),
  );
  assert.match(pages[0], /Você não está sem capacidade/);
  assert.match(pages[1], /não precisa começar com seguidores/);
  assert.match(pages[2], /Saia da aula sabendo o que vender/);
  for (const html of pages) {
    assert.doesNotMatch(html, /Ângulo A[123]/i);
    assert.match(html, /A Rota Prime de 4 Decisões/);
    assert.match(html, /Renata Garcia conhece a rotina/);
    assert.match(html, /R\$ 29,90/);
  }
});
