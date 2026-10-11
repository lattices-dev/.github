import puppeteer from 'puppeteer-core';
import { marked } from 'marked';
import { mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const root = resolve(import.meta.dir, '..');
const output = resolve(root, 'brand');
await mkdir(`${output}/previews`, { recursive: true });
const data = async (path: string) => `data:image/svg+xml;base64,${Buffer.from(await Bun.file(resolve(root, path)).text()).toString('base64')}`;
const mark = await data('profile/assets/lattices-dark.svg');
const icon = await data('brand/lattices-icon.svg');
const browser = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true });
try {
  const page = await browser.newPage();
  const render = async (html: string, width: number, height: number, file: string) => {
    await page.setViewport({ width, height, deviceScaleFactor: 1 });
    await page.setContent(html);
    await page.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i => i.decode())); });
    await page.screenshot({ path: `${output}/${file}` });
  };
  const base = '<style>*{box-sizing:border-box}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue",sans-serif}</style>';
  const avatar = `${base}<body style="background:#f2f2f2"><img src="${icon}" style="width:100%;display:block"></body>`;
  await render(avatar, 1024, 1024, 'org-avatar.png');
  await render(avatar, 40, 40, 'previews/org-avatar-40.png');
  for (const [name, line] of [['lattices', 'tmux workspaces. Native Mac control.'], ['github', 'Workspaces, computer use, voice and spatial notes.']]) {
    // 96px inset exceeds the 40pt (53.34 CSS px) safe area.
    const html = `${base}<body style="background:#101518;color:#f2f2f2"><main style="width:1280px;height:640px;padding:96px;display:flex;flex-direction:column;justify-content:center;gap:42px"><div style="display:flex;align-items:center;gap:40px"><img src="${mark}" width="144" height="144"><span style="font-size:104px;letter-spacing:-5px;font-weight:650">Lattices</span></div><div style="font-size:36px;letter-spacing:-.7px">${line}</div></main></body>`;
    await render(html, 1280, 640, `social-preview-${name}.png`);
    await render(html.replace('width:1280px;height:640px;', 'width:1280px;height:640px;transform:scale(.5);transform-origin:top left;'), 640, 320, `previews/social-preview-${name}-640.png`);
  }
  let markdown = await Bun.file(`${root}/profile/README.md`).text();
  for (const mode of ['light', 'dark']) markdown = markdown.replaceAll(`https://raw.githubusercontent.com/lattices-dev/.github/main/profile/assets/lattices-${mode}.svg`, await data(`profile/assets/lattices-${mode}.svg`));
  for (const mode of ['light', 'dark'] as const) {
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: mode }]);
    const html = `${base}<style>body{background:${mode === 'dark' ? '#0d1117' : '#fff'};color:${mode === 'dark' ? '#f2f2f2' : '#101518'};font-size:16px;line-height:1.5;padding:40px}article{max-width:850px;margin:auto}a{color:${mode === 'dark' ? '#79c0ff' : '#0969da'};text-decoration:none}h1{font-size:32px;border-bottom:1px solid #8884;padding-bottom:12px}h3{margin-top:24px}li{margin:8px 0}pre{background:#8881;padding:16px;border-radius:6px}code{font-family:ui-monospace,monospace;font-size:13px}</style><article>${await marked.parse(markdown)}</article>`;
    await Bun.write(`${output}/previews/profile-${mode}.html`, html);
    await render(html, 1000, 1100, `previews/profile-${mode}.png`);
  }
} finally { await browser.close(); }
