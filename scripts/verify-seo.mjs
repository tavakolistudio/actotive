import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const routes = ['', 'tr', 'products', 'services', 'quality', 'tr/products', 'tr/services', 'tr/quality'];
for (const route of routes) {
  const candidates = route ? [`out/${route}.html`, `out/${route}/index.html`] : ['out/index.html'];
  const file = candidates.find(existsSync);
  assert.ok(file, `Missing route: /${route}`);
  const html = readFileSync(file, 'utf8');
  assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one H1`);
  const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
  assert.ok(description.length >= 50 && description.length <= 160, `${route}: description length ${description.length}`);
  assert.ok(html.includes(`rel="canonical" href="https://actotive.tavakolistudio.workers.dev${route ? '/' + route : ''}"`), `${route}: canonical`);
  assert.ok(html.includes('property="og:image"'), `${route}: OG image`);
  assert.ok(html.includes('hrefLang="en"') && html.includes('hrefLang="tr"'), `${route}: alternate languages`);
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
  assert.ok(schemas.length >= 2, `${route}: structured data`);
  if (!route || route === 'tr') {
    for (const guide of ['products', 'services', 'quality']) assert.ok(html.includes(`href="/${route ? 'tr/' : ''}${guide}"`), `${route}: link to ${guide}`);
    assert.ok(schemas.some(schema => schema['@type'] === 'FAQPage'), `${route}: FAQ schema`);
  } else {
    assert.ok(!schemas.some(schema => schema['@type'] === 'FAQPage'), `${route}: no unrelated FAQ schema`);
  }
  console.log(`PASS /${route}`);
}
const sitemap = readFileSync('out/sitemap.xml', 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, 8, 'Sitemap must include all eight pages');
for (const file of ['robots.txt', 'llms.txt', 'videos/actotive/hero-poster.jpg']) assert.ok(existsSync(`out/${file}`), `Missing ${file}`);
console.log('PASS sitemap, crawler files and social image');
