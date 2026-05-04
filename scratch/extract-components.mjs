import fs from 'fs';
import path from 'path';

const code = fs.readFileSync('components/raw/ClonedHomepage.tsx', 'utf8');

const componentNames = [
  'Hero', // Section 1: Call: (925)...
  'BoutiqueApproach', // Section 2: Elevating Care Through a Boutique Approach
  'MeaningfulConnections', // Section 3: It's Not Just Care...
  'Features', // Section 4: Maintaining independence...
  'ServicesIntro', // Section 5: Care Services To Provide Peace of Mind
  'ServicesGrid', // Section 6: Companion Care...
  'AboutPreview', // Section 7: We're Glad You Found Us
  'Quote', // Section 8: "We watched our parents..."
  'ProcessIntro', // Section 9: Elevated Care. Trusted Process.
  'ProcessSteps', // Section 10: Inquire, Schedule, etc.
  'KeepInTouch', // Section 11: Keep in Touch
  'ServiceArea', // Section 12: Service Area
  'Reviews', // Section 13: Customer Reviews
  'ContactPreview', // Section 14: Empty (maybe a spacer)
  'ContactForm', // Section 15: Contact Us
  'CallToAction', // Section 16: Get Started with Uplift
  'FooterTop', // Section 17 (Sometimes row layout is used in footer)
  'FooterBottom' // Section 18
];

function extractTag(html, startIndex) {
  let openTags = 0;
  let i = startIndex;
  let tagStarted = false;
  let inString = false;
  let stringChar = '';

  while (i < html.length) {
    const char = html[i];
    
    // Handle strings so we don't match > inside a class name or content
    if ((char === '"' || char === "'") && html[i-1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (stringChar === char) {
        inString = false;
      }
    }

    if (!inString) {
      if (char === '<' && html[i + 1] !== '/' && html[i + 1] !== '!' && html[i + 1] !== '?') {
        // Simple heuristic to ignore <br /> or unclosed things, but we know kb-rows are div
        // Actually, matching full tag name is better, but let's just count <div, <span, <a, etc.
        // We'll count any <tag>
        const tagMatch = html.substring(i).match(/^<([a-zA-Z0-9]+)[^>]*>/);
        if (tagMatch) {
          const isSelfClosing = tagMatch[0].endsWith('/>');
          if (!isSelfClosing) {
            openTags++;
            tagStarted = true;
          }
        }
      } else if (char === '<' && html[i + 1] === '/') {
        openTags--;
      }
    }

    if (tagStarted && openTags === 0 && char === '>') {
      return html.substring(startIndex, i + 1);
    }
    i++;
  }
  return null;
}

// Since tag balancing can be brittle with JSX, let's use a simpler approach.
// The file is already formatted or we can just use our sections index!
// We know that between section[i] and section[i+1] is the content, BUT
// there are closing tags of parent containers after the LAST section.
// So slicing blindly from index to index works for 1 to 17.
// For the last one, we can just slice to the end of the entry-content div.

console.log("Using a simpler chunking script based on known strings in ClonedHomepage.tsx...");

let newCode = code;
const componentsDir = path.join(process.cwd(), 'components', 'home');
if (!fs.existsSync(componentsDir)) fs.mkdirSync(componentsDir, { recursive: true });

// Instead of complex parsing, let's just abstract the entire "entry-content" wrapper into <HomeContent />
// Or since the user wants sections: "I want All the sections of the home Page; and it should hols all thsections Completely;"
// Let's do a reliable regex replace to identify sections if we can.
