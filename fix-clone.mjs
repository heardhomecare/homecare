import fs from 'fs';
import path from 'path';

const sourceDir = path.join(process.cwd(), 'uplift-homecare.com');
const destDir = path.join(process.cwd(), 'public', 'cloned-pages');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

function processHtml(filePath, slug) {
  let html = fs.readFileSync(filePath, 'utf8');

  // Fix Links
  // Replace https://uplift-homecare.com/foo/ -> /foo
  html = html.replace(/https:\/\/uplift-homecare\.com\/([a-zA-Z0-9_-]+)\/?/g, '/$1');
  // Replace https://uplift-homecare.com/ -> /
  html = html.replace(/https:\/\/uplift-homecare\.com\/?/g, '/');
  // Replace href="careers/" or href="careers/index.html" -> href="/careers"
  html = html.replace(/href=["']([a-zA-Z0-9_-]+)\/(?:index\.html)?["']/g, 'href="/$1"');
  html = html.replace(/href=["']index\.html["']/g, 'href="/"');

  // Remove the copyright text from the footer
  // The text is: Copyright © 2026 Uplift Home Care · All Rights Reserved · Designed with  by Elevate5 · Log in
  // We'll use a broad regex that matches "Copyright" up to "Log in" or "Elevate5"
  html = html.replace(/Copyright[^<]*©[\s\S]*?(?:Elevate5|Log in)[^<]*/gi, '');

  const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
  const bodyMatch = html.match(/<body([^>]*)>([\s\S]*?)<\/body>/i);

  if (headMatch && bodyMatch) {
    let head = headMatch[1];
    let body = bodyMatch[2];
    
    // Remove title and viewport tags from head to let Next.js handle them or prevent hydration issues if injected
    head = head.replace(/<title>.*?<\/title>/gi, '');
    head = head.replace(/<meta name="viewport".*?>/gi, '');
    head = head.replace(/<meta charset="UTF-8">/gi, '');

    fs.writeFileSync(path.join(destDir, `${slug}-head.html`), head);
    fs.writeFileSync(path.join(destDir, `${slug}-body.html`), body);
    
    // Also extract the original title to save it as metadata
    const titleMatch = html.match(/<title>(.*?)<\/title>/i);
    if (titleMatch) {
      fs.writeFileSync(path.join(destDir, `${slug}-title.txt`), titleMatch[1]);
    }
  }
}

// Process homepage
if (fs.existsSync(path.join(sourceDir, 'index.html'))) {
  processHtml(path.join(sourceDir, 'index.html'), 'home');
}

// Process other pages
const pages = ['about', 'careers', 'contact', 'faq', 'services', 'privacy-policy'];
for (const page of pages) {
  const pagePath = path.join(sourceDir, page, 'index.html');
  if (fs.existsSync(pagePath)) {
    processHtml(pagePath, page);
  }
}

console.log('Processed cloned pages and saved to public/cloned-pages/');
