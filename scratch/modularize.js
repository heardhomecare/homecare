const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('public/cloned-pages/home-body.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

const componentNames = [
  'Hero', 
  'BoutiqueApproach', 
  'MeaningfulConnections', 
  'Features', 
  'ServicesIntro', 
  'ServicesGrid', 
  'AboutPreview', 
  'Quote', 
  'ProcessIntro', 
  'ProcessSteps', 
  'KeepInTouch', 
  'ServiceArea', 
  'Reviews', 
  'ContactSpacer', 
  'ContactForm', 
  'ContactInfo', 
  'CallToAction', 
  'FooterWidgets' 
];

const outDir = path.join(process.cwd(), 'components', 'home');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// Find all major rows
const rows = document.querySelectorAll('.entry-content > div.kb-row-layout-wrap');
console.log(`Found ${rows.length} rows.`);

const imports = [];
const renderList = [];

rows.forEach((row, i) => {
  const name = componentNames[i] || `Section${i + 1}`;
  const rawHtml = row.outerHTML;
  
  const content = `// @ts-nocheck
import React from 'react';

export default function ${name}() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${rawHtml.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;
  fs.writeFileSync(path.join(outDir, `${name}.tsx`), content);
  imports.push(`import ${name} from '../home/${name}';`);
  renderList.push(`                    <${name} />`);
});

// Rebuild ClonedHomepage shell
// For the shell, we'll use a mix of JSX and dangerouslySetInnerHTML for the wrappers
// to ensure the overall layout is stable.
const wrapper = document.getElementById('wrapper');
if (wrapper) {
    // We'll keep the top-level structure in ClonedHomepage.tsx but render the components inside entry-content
    
    // Get header and footer separately to be even more modular
    const header = document.getElementById('masthead');
    const footer = document.getElementById('colophon');
    const main = document.getElementById('inner-wrap');

    // Create components for these too
    const layoutDir = path.join(process.cwd(), 'components', 'layout');
    if (!fs.existsSync(layoutDir)) fs.mkdirSync(layoutDir, { recursive: true });

    const headerContent = `// @ts-nocheck
import React from 'react';

export default function Header() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${header.outerHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;
    fs.writeFileSync(path.join(layoutDir, 'Header.tsx'), headerContent);

    const footerContent = `// @ts-nocheck
import React from 'react';

export default function Footer() {
  return (
    <div dangerouslySetInnerHTML={{ __html: \`${footer.outerHTML.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\` }} />
  );
}
`;
    fs.writeFileSync(path.join(layoutDir, 'Footer.tsx'), footerContent);

    const homepageContent = `// @ts-nocheck
import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
${imports.join('\n')}

export default function ClonedHomepage() {
  return (
    <div id="wrapper" className="site wp-site-blocks">
      <Header />
      <main id="inner-wrap" className="wrap kt-clear" role="main">
        <div id="primary" className="content-area">
          <div className="content-container site-container">
            <div id="main" className="site-main">
              <div className="content-wrap">
                <article id="post-2" className="entry content-bg single-entry post-2 page type-page status-publish hentry">
                  <div className="entry-content-wrap">
                    <div className="entry-content single-content">
${renderList.join('\n')}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
`;

    fs.writeFileSync('components/raw/ClonedHomepage.tsx', homepageContent);
    console.log('Modularized ClonedHomepage successfully with Raw HTML bridge!');
}
