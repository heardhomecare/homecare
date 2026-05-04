const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('uplift-homecare.com/privacy-policy/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Extract body content
const wrapper = document.getElementById('wrapper');
if (wrapper) {
    fs.writeFileSync('public/cloned-pages/privacy-body.html', wrapper.outerHTML);
}

// Extract head content
const head = document.head;
fs.writeFileSync('public/cloned-pages/privacy-head.html', head.innerHTML);

console.log('Privacy Policy page parts extracted.');
