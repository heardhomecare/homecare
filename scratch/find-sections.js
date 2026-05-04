const fs = require('fs');
const code = fs.readFileSync('components/raw/ClonedHomepage.tsx', 'utf8');

// Match all major row layouts (Kadence uses wp-block-kadence-rowlayout for main sections)
const regex = /<div[^>]*className=["'][^"']*wp-block-kadence-rowlayout[^"']*["'][^>]*>/gi;
let match;
let sections = 0;
while ((match = regex.exec(code)) !== null) {
  sections++;
  console.log(`Section ${sections} starts around index ${match.index}:`);
  // Print a snippet of the content to identify it
  const snippet = code.substring(match.index, match.index + 200).replace(/\n/g, '');
  console.log('  ' + snippet);
}
console.log(`Total sections found: ${sections}`);
