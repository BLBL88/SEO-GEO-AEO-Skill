#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_FILE = path.join(__dirname, '..', 'SKILL.md');
const COMMANDS_DIR = path.join(os.homedir(), '.claude', 'commands');
const DEST = path.join(COMMANDS_DIR, 'seo.md');

if (!fs.existsSync(SKILL_FILE)) {
  console.error('Error: SKILL.md not found in package.');
  process.exit(1);
}

if (!fs.existsSync(COMMANDS_DIR)) {
  fs.mkdirSync(COMMANDS_DIR, { recursive: true });
}

fs.copyFileSync(SKILL_FILE, DEST);

console.log('SEO/GEO/AEO skill installed.');
console.log('Use /seo in Claude Code to run an audit.');
