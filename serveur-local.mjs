// Sert le site construit (dossier out/) comme le fera Netlify.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = new URL("./out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = Number(process.env.PORT) || 4322;

const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".webp": "image/webp", ".ico": "image/x-icon",
  ".pdf": "application/pdf", ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".woff2": "font/woff2", ".woff": "font/woff",
};

createServer(async (req, res) => {
  try {
    let rel = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    if (rel.endsWith("/")) rel += "index.html";
    // Garde-fou : le chemin resolu doit rester a l interieur de ROOT.
    let file = join(ROOT, normalize(rel));
    const norm = (x) => x.split("\\").join("/").toLowerCase();
    if (!norm(file).startsWith(norm(ROOT))) file = join(ROOT, "index.html");
    let info = await stat(file).catch(() => null);
    if (!info && !extname(file)) {
      file += ".html";
      info = await stat(file).catch(() => null);
    }
    if (info?.isDirectory()) { file = join(file, "index.html"); info = await stat(file).catch(() => null); }
    if (!info) {
      const p404 = join(ROOT, "404.html");
      const body = await readFile(p404).catch(() => Buffer.from("<h1>404</h1>"));
      res.writeHead(404, { "content-type": "text/html; charset=utf-8" });
      res.end(body);
      return;
    }
    const body = await readFile(file);
    res.writeHead(200, {
      "content-type": TYPES[extname(file).toLowerCase()] ?? "application/octet-stream",
      "cache-control": "no-store",
    });
    res.end(body);
  } catch (err) {
    res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    res.end("Erreur serveur : " + err.message);
  }
}).listen(PORT, () => console.log(`Site servi sur http://localhost:${PORT} depuis ${ROOT}`));
