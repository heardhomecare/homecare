import fs from 'fs';
import path from 'path';

const headPath = path.join(process.cwd(), 'public', 'cloned-pages', 'home-head.html');
const html = fs.readFileSync(headPath, 'utf8');

// Match all <link rel="stylesheet" href="...">
const linkRegex = /<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']+)["'][^>]*>/gi;
const links = [];
let match;
while ((match = linkRegex.exec(html)) !== null) {
  links.push(match[1]);
}

// Match all <style>...</style>
const styleRegex = /<style[^>]*>([\s\S]*?)<\/style>/gi;
const styles = [];
while ((match = styleRegex.exec(html)) !== null) {
  styles.push(match[1]);
}

const stylesDir = path.join(process.cwd(), 'styles');
if (!fs.existsSync(stylesDir)) {
  fs.mkdirSync(stylesDir, { recursive: true });
}

let combinedCss = '/* Extracted Inline Styles from WordPress Clone */\n\n';
combinedCss += styles.join('\n\n');

fs.writeFileSync(path.join(stylesDir, 'uplift-global.css'), combinedCss);
console.log('Extracted inline CSS into styles/uplift-global.css');
console.log('Inline styles found:', styles.length);
