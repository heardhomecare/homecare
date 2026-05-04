const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('public/cloned-pages/faq-body.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

function cleanHtml(node) {
    const iterator = document.createNodeIterator(node, 128); // SHOW_COMMENT
    let comment;
    while (comment = iterator.nextNode()) {
        comment.parentNode.removeChild(comment);
    }
}

const attrMap = {
    'class': 'className', 'for': 'htmlFor', 'itemtype': 'itemType', 'itemscope': 'itemScope',
    'fetchpriority': 'fetchPriority', 'srcset': 'srcSet', 'autoplay': 'autoPlay',
    'crossorigin': 'crossOrigin', 'allowfullscreen': 'allowFullScreen', 'frameborder': 'frameBorder',
    'autocomplete': 'autoComplete', 'autofocus': 'autoFocus', 'readonly': 'readOnly', 'tabindex': 'tabIndex'
};

function processNode(node) {
    if (node.nodeType === 3) return node.textContent;
    if (node.nodeType !== 1) return '';

    let tag = node.tagName.toLowerCase();
    let attrs = '';
    
    for (let i = 0; i < node.attributes.length; i++) {
        let name = node.attributes[i].name;
        let value = node.attributes[i].value;

        if (name.startsWith('on')) continue;
        
        const jsxName = attrMap[name] || name;

        if (jsxName === 'style') {
            const styleObj = {};
            value.split(';').forEach(s => {
                const parts = s.split(':');
                if (parts.length >= 2) {
                    const k = parts.shift().trim();
                    const v = parts.join(':').trim();
                    const camelK = k.replace(/-./g, x => x[1].toUpperCase());
                    styleObj[camelK] = v;
                }
            });
            attrs += ` style={${JSON.stringify(styleObj)}}`;
            continue;
        }

        if (name === 'itemscope') {
            attrs += ` itemScope={true}`;
            continue;
        }

        if (name === 'href' || name === 'src' || name === 'srcset') {
            value = value.replace(/https:\/\/uplift-homecare\.com\//g, '/').replace(/index\.html/g, '');
        }

        attrs += ` ${jsxName}="${value.replace(/"/g, '&quot;')}"`;
    }

    const selfClosing = ['img', 'br', 'hr', 'input', 'link', 'meta'].includes(tag);
    let children = '';
    node.childNodes.forEach(child => children += processNode(child));
    return selfClosing ? `<${tag}${attrs} />` : `<${tag}${attrs}>${children}</${tag}>`;
}

cleanHtml(document.body);
const jsxBody = processNode(document.body.firstChild);

const componentTemplate = `
import React from 'react';

const ClonedFaqPage: React.FC = () => {
    return (
        <div id="wrapper" className="site wp-site-blocks">
            ${jsxBody}
        </div>
    );
};

export default ClonedFaqPage;
`;

fs.writeFileSync('components/raw/ClonedFaqPage.tsx', componentTemplate);
console.log('ClonedFaqPage.tsx generated.');
