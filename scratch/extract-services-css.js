const fs = require('fs');
const { JSDOM } = require('jsdom');

const headHtml = fs.readFileSync('public/cloned-pages/services-head.html', 'utf8');
const dom = new JSDOM(`<html><head>${headHtml}</head><body></body></html>`);
const document = dom.window.document;

let servicesCss = '';
const styleTags = document.querySelectorAll('style');

styleTags.forEach(style => {
    const id = style.getAttribute('id');
    // We only want page-specific blocks. 
    // kadence_blocks_css-inline-css usually contains the layout IDs.
    if (id && (id.includes('kadence_blocks_css') || id.includes('kadence-blocks-rowlayout'))) {
        servicesCss += `/* Style ID: ${id} */\n${style.textContent}\n\n`;
    }
});

fs.writeFileSync('styles/services.css', servicesCss);
console.log('Services CSS extracted to styles/services.css');
