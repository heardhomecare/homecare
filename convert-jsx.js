const fs = require('fs');
const HTMLtoJSX = require('htmltojsx');
const converter = new HTMLtoJSX({ createClass: false });

const html = fs.readFileSync('public/cloned-pages/home-body.html', 'utf8');
const jsx = converter.convert(html);

const componentCode = `import React from 'react';

export default function ClonedHomepage() {
  return (
    <>
      ${jsx}
    </>
  );
}
`;

if (!fs.existsSync('components/raw')) {
  fs.mkdirSync('components/raw', { recursive: true });
}
fs.writeFileSync('components/raw/ClonedHomepage.tsx', componentCode);
console.log('Conversion successful!');
