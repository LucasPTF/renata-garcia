import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectDirectory = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = resolve(projectDirectory, "out");
const workerUrl = pathToFileURL(resolve(projectDirectory, "dist/server/index.js"));
workerUrl.searchParams.set("export", Date.now().toString());

const { default: worker } = await import(workerUrl.href);
const routes = ["/a1", "/a2", "/a3", "/obrigado"];

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(resolve(projectDirectory, "dist/client"), outputDirectory, {
  recursive: true,
});

async function render(pathname) {
  const response = await worker.fetch(
    new Request(`https://renata-garcia.vercel.app${pathname}`, {
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

  if (!response.ok) {
    throw new Error(`Falha ao exportar ${pathname}: ${response.status}`);
  }

  return response.text();
}

for (const pathname of routes) {
  const html = await render(pathname);
  await writeFile(
    resolve(outputDirectory, `${pathname.slice(1)}.html`),
    html,
    "utf8",
  );
}

await writeFile(resolve(outputDirectory, "index.html"), await render("/a1"), "utf8");

console.log(`Exportação concluída: ${routes.join(", ")}`);
