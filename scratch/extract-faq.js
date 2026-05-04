const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('uplift-homecare.com/faq/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Extract body content
const wrapper = document.getElementById('wrapper');
if (wrapper) {
    fs.writeFileSync('public/cloned-pages/faq-body.html', wrapper.outerHTML);
}

// Extract head content
const head = document.head;
fs.writeFileSync('public/cloned-pages/faq-head.html', head.innerHTML);

console.log('FAQ page parts extracted.');
