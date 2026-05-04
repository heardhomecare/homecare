const fs = require('fs');
const path = require('path');

const code = fs.readFileSync('components/raw/ClonedHomepage.tsx', 'utf8');
const regex = /<div[^>]*className=["'][^"']*wp-block-kadence-rowlayout[^"']*["'][^>]*>/gi;
const matches = [...code.matchAll(regex)];

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

let wrapperStart = code.substring(0, matches[0].index);
let wrapperEnd = ''; // We will find where the last section ends.

let newHomepageCode = wrapperStart + '\n';
const imports = [];

for (let i = 0; i < matches.length; i++) {
  const start = matches[i].index;
  let end;
  
  if (i < matches.length - 1) {
    end = matches[i+1].index;
  } else {
    // For the last one, find the closing </div> of entry-content or similar.
    // Let's just slice until the first </article> or </main> we find.
    const articleEnd = code.indexOf('</article>', start);
    // The section ends right before the closing </div> of entry-content which is before </article>.
    // Let's just search backwards from </article> to the first </div>
    const divEnd = code.lastIndexOf('</div>', articleEnd);
    end = divEnd + 6; // include </div>
    
    wrapperEnd = code.substring(end);
  }
  
  let chunk = code.substring(start, end);
  
  // Clean up any stray trailing whitespace or mismatched divs at the boundary 
  // (Assuming WordPress sibling structure is perfect)
  
  const compName = componentNames[i];
  imports.push(`import ${compName} from '../home/${compName}';`);
  newHomepageCode += `        <${compName} />\n`;
  
  // Add @ts-nocheck to top of each component
  const componentContent = `// @ts-nocheck
import React from 'react';

export default function ${compName}() {
  return (
    <>
      ${chunk}
    </>
  );
}
`;
  
  fs.writeFileSync(path.join(outDir, `${compName}.tsx`), componentContent);
}

newHomepageCode += wrapperEnd;

// Add imports to the top of ClonedHomepage
// Find the first line after imports
const reactImportIndex = newHomepageCode.indexOf('export default function');
newHomepageCode = newHomepageCode.substring(0, reactImportIndex) + 
                  imports.join('\n') + '\n\n' + 
                  newHomepageCode.substring(reactImportIndex);

fs.writeFileSync('components/raw/ClonedHomepage.tsx', newHomepageCode);
console.log('Successfully split ClonedHomepage into ' + matches.length + ' components!');
