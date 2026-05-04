const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('uplift-homecare.com/contact/index.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

// Extract body content
const wrapper = document.getElementById('wrapper');
if (wrapper) {
    fs.writeFileSync('public/cloned-pages/contact-body.html', wrapper.outerHTML);
}

// Extract head content
const head = document.head;
fs.writeFileSync('public/cloned-pages/contact-head.html', head.innerHTML);

console.log('Contact page parts extracted.');
