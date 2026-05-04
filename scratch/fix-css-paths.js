const fs = require('fs');
const path = require('path');

const stylesDir = path.join(__dirname, '..', 'styles');
const files = fs.readdirSync(stylesDir).filter(f => f.endsWith('.css'));

const BASE_URL = 'https://heardcare.com';

files.forEach(file => {
    const filePath = path.join(stylesDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Fix ../wp-content paths
    if (content.includes('../wp-content')) {
        content = content.replace(/\.\.\/wp-content/g, BASE_URL + '/wp-content');
        changed = true;
    }

    // Fix /wp-content paths (root relative in CSS often causes issues if not in public)
    // We only want to replace it if it's part of a url() or similar, or just generally if it starts with /wp-content
    // Using a regex to be safer: url('/wp-content/...) or url("/wp-content/...) or url(/wp-content/...)
    const rootRelativeRegex = /url\(['"]?\/wp-content/g;
    if (rootRelativeRegex.test(content)) {
        content = content.replace(/url\((['"]?)\/wp-content/g, `url($1${BASE_URL}/wp-content`);
        changed = true;
    }

    // Also handle src:url("/wp-content/...)
    const srcUrlRegex = /src:url\(['"]?\/wp-content/g;
    if (srcUrlRegex.test(content)) {
        content = content.replace(/src:url\((['"]?)\/wp-content/g, `src:url($1${BASE_URL}/wp-content`);
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed paths in ${file}`);
    }
});
