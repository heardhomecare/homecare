import fs from 'fs';

const html = fs.readFileSync('uplift-homecare.com/index.html', 'utf8');

// Match attributes of body and html tags
const htmlTagMatch = html.match(/<html([^>]*)>/i);
const bodyTagMatch = html.match(/<body([^>]*)>/i);

// Match inner content
const headMatch = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i);
const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);

fs.writeFileSync('public/clone-head.html', headMatch ? headMatch[1] : '');
fs.writeFileSync('public/clone-body.html', bodyMatch ? bodyMatch[1] : '');

console.log('HTML Tag Attributes:', htmlTagMatch ? htmlTagMatch[1] : '');
console.log('Body Tag Attributes:', bodyTagMatch ? bodyTagMatch[1] : '');
