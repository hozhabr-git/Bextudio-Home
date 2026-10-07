import { readFileSync, writeFileSync } from 'node:fs';
const tokens=JSON.parse(readFileSync(new URL('../src/design-system/tokens.json',import.meta.url),'utf8'));
const declarations=[];
for(const [group,values] of Object.entries(tokens))for(const [name,token] of Object.entries(values))declarations.push(`  --${group}-${name}: ${token.value};`);
writeFileSync(new URL('../src/design-system/tokens.css',import.meta.url),`/* Generated from tokens.json. Run npm run tokens after editing. */\n:root {\n${declarations.join('\n')}\n}\n`);
console.log(`Built ${declarations.length} design tokens.`);
