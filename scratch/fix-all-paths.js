const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://heardcare.com';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const targetDirs = [
    path.join(__dirname, '..', 'app'),
    path.join(__dirname, '..', 'components'),
    path.join(__dirname, '..', 'styles')
];

targetDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    walkDir(dir, (filePath) => {
        if (!filePath.endsWith('.tsx') && !filePath.endsWith('.ts') && !filePath.endsWith('.css') && !filePath.endsWith('.js')) return;
        
        let content = fs.readFileSync(filePath, 'utf8');
        let changed = false;

        // Fix missing slash: wp-contentuploads -> wp-content/uploads
        if (content.includes('wp-contentuploads')) {
            content = content.replace(/wp-contentuploads/g, 'wp-content/uploads');
            changed = true;
        }

        // Fix relative paths to absolute URLs in CSS (to avoid build errors)
        if (filePath.endsWith('.css')) {
            // Fix ../wp-content paths
            if (content.includes('../wp-content')) {
                content = content.replace(/\.\.\/wp-content/g, BASE_URL + '/wp-content');
                changed = true;
            }
            // Fix /wp-content paths (root relative in CSS often causes issues in Next.js builds)
            const rootRelativeRegex = /url\(['"]?\/wp-content/g;
            if (rootRelativeRegex.test(content)) {
                content = content.replace(/url\((['"]?)\/wp-content/g, `url($1${BASE_URL}/wp-content`);
                changed = true;
            }
            const srcUrlRegex = /src:url\(['"]?\/wp-content/g;
            if (srcUrlRegex.test(content)) {
                content = content.replace(/src:url\((['"]?)\/wp-content/g, `src:url($1${BASE_URL}/wp-content`);
                changed = true;
            }
        } else {
            // In TSX/JSX, we can use root-relative paths /wp-content/
            // Fix ../wp-content to /wp-content
            if (content.includes('../wp-content')) {
                content = content.replace(/\.\.\/wp-content/g, '/wp-content');
                changed = true;
            }
            // Fix wp-content (no leading slash) to /wp-content
            // Only if it's preceded by a quote (src="wp-content)
            const noLeadingSlashRegex = /(['"])wp-content\//g;
            if (noLeadingSlashRegex.test(content)) {
                content = content.replace(/(['"])wp-content\//g, '$1/wp-content/');
                changed = true;
            }
        }

        if (changed) {
            fs.writeFileSync(filePath, content);
            console.log(`Fixed paths in ${path.relative(path.join(__dirname, '..'), filePath)}`);
        }
    });
});
