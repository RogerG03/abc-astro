import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';

async function pages(dir) {
  return (await Promise.all((await readdir(dir, { withFileTypes: true })).map(entry =>
    entry.isDirectory() ? pages(`${dir}/${entry.name}`) : `${dir}/${entry.name}`))).flat();
}

test('built pages link to real routes and expose matching locale alternatives', async () => {
  const files = (await pages('dist')).filter(file => file.endsWith('.html'));
  assert.ok(files.length >= 11, 'Expected both locales, recipes, apps and the error page');
  for (const file of files) {
    const html = await readFile(file, 'utf8');
    assert.equal([...html.matchAll(/<h1(?:\s|>)/g)].length, 1, file);
    for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
      const url = new URL(href.replaceAll('&amp;', '&'), 'https://example.com');
      if (url.origin !== 'https://example.com') continue;
      const target = `dist${url.pathname}${url.pathname.endsWith('/') ? 'index.html' : ''}`;
      await assert.doesNotReject(access(target), `${file} links to missing ${href}`);
    }
    if (file.endsWith('/404.html')) {
      assert.match(html, /name="robots" content="noindex, follow"/);
      continue;
    }
    const english = file.startsWith('dist/en/');
    assert.match(html, new RegExp(`<html lang="${english ? 'en' : 'es'}"`));
    const links = [...html.matchAll(/<link rel="alternate" hreflang="(es|en)" href="([^"]+)"/g)];
    assert.equal(links.length, 2, file);
    for (const [, locale, href] of links) {
      const route = new URL(href).pathname;
      const alternate = await readFile(`dist${route}index.html`, 'utf8');
      assert.match(alternate, new RegExp(`<html lang="${locale}"`));
    }
  }
});
