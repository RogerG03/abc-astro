import { readdir, readFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
async function files(dir) { return (await Promise.all((await readdir(dir,{withFileTypes:true})).map(e => e.isDirectory() ? files(`${dir}/${e.name}`) : `${dir}/${e.name}`))).flat(); }
const assets = await files('dist');
const pages = await Promise.all(assets.filter(p => p.endsWith('.html')).map(p => readFile(p,'utf8')));
const inlineMaximum = Math.max(0,...pages.map(html => gzipSync([...html.matchAll(/<script(?![^>]*type="application\/ld\+json")[^>]*>([\s\S]*?)<\/script>/g)].map(m=>m[1]).join('\n')).length));
for (const [extension, limit] of [['js',80*1024],['css',60*1024]]) {
  const paths = assets.filter(p => p.endsWith(`.${extension}`));
  const size = (await Promise.all(paths.map(async p => gzipSync(await readFile(p)).length))).reduce((a,b)=>a+b,0) + (extension === 'js' ? inlineMaximum : 0);
  console.log(`${extension}: ${size} gzip bytes / ${limit} (all external assets + largest page's inline JS)`);
  assert.ok(size <= limit, `${extension} budget exceeded`);
}
assert.ok(assets.includes('dist/sitemap-index.xml'), 'Sitemap missing');
assert.ok(assets.includes('dist/robots.txt'), 'Robots missing');
