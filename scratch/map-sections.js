const fs = require('fs');
const code = fs.readFileSync('components/raw/ClonedHomepage.tsx', 'utf8');

const regex = /<div[^>]*className=["'][^"']*wp-block-kadence-rowlayout[^"']*["'][^>]*>/gi;
let match;
let sections = [];

while ((match = regex.exec(code)) !== null) {
  sections.push(match.index);
}

for (let i = 0; i < sections.length; i++) {
  const start = sections[i];
  const end = i < sections.length - 1 ? sections[i+1] : code.length;
  const chunk = code.substring(start, end);
  
  // Extract visible text (strip HTML tags)
  const textContent = chunk.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').substring(0, 150).trim();
  console.log(`Section ${i+1}: ${textContent}`);
}
