const fs = require('fs');
const cssPath = 'styles/uplift-global.css';
let css = fs.readFileSync(cssPath, 'utf8');

// Replace url('wp-content/...') with url('/wp-content/...')
// Replace url("wp-content/...") with url("/wp-content/...")
// Replace url(wp-content/...) with url(/wp-content/...)
css = css.replace(/url\((['"]?)wp-content\//gi, 'url($1/wp-content/');

fs.writeFileSync(cssPath, css);
console.log('Replaced relative wp-content paths with absolute paths in CSS');
