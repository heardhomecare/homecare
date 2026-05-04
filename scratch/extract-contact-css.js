const fs = require('fs');
const { JSDOM } = require('jsdom');

const headHtml = fs.readFileSync('public/cloned-pages/contact-head.html', 'utf8');
const dom = new JSDOM(`<html><head>${headHtml}</head><body></body></html>`);
const document = dom.window.document;

let contactCss = '';
const styleTags = document.querySelectorAll('style');

styleTags.forEach(style => {
    const id = style.getAttribute('id');
    if (id && (id.includes('kadence_blocks_css') || id.includes('kadence-blocks-rowlayout'))) {
        contactCss += `/* Style ID: ${id} */\n${style.textContent}\n\n`;
    }
});

fs.writeFileSync('styles/contact.css', contactCss);
console.log('Contact CSS extracted to styles/contact.css');
