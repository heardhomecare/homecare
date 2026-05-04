const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('uplift-homecare.com/services/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Extract body content
const wrapper = document.getElementById('wrapper');
if (wrapper) {
    fs.writeFileSync('public/cloned-pages/services-body.html', wrapper.outerHTML);
}

// Extract head content
const head = document.head;
fs.writeFileSync('public/cloned-pages/services-head.html', head.innerHTML);

console.log('Services page parts extracted.');
