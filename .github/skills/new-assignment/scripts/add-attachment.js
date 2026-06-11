#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function usage() {
  console.error('Usage: node add-attachment.js <assignment-id> "<display-name>" <filename> <type>');
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 4) usage();

const [id, displayName, filename, type] = args;

const repoRoot = path.resolve(__dirname, '../../../../');
const configPath = path.join(repoRoot, 'config.json');

let config;
try {
  config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
} catch (err) {
  console.error('Failed to read or parse config.json at', configPath);
  console.error(err.message);
  process.exit(1);
}

if (!Array.isArray(config.assignments)) config.assignments = [];

const assignment = config.assignments.find(a => a.id === id);
if (!assignment) {
  console.error(`Assignment with id "${id}" not found in config.json`);
  process.exit(1);
}

assignment.attachments = assignment.attachments || [];
if (assignment.attachments.some(a => a.file === filename)) {
  console.error(`An attachment with file name "${filename}" is already registered for assignment "${id}"`);
  process.exit(1);
}

const filePath = path.join(repoRoot, assignment.path, filename);
if (!fs.existsSync(filePath)) {
  console.error(`File not found at expected path: ${filePath}`);
  console.error('Make sure the file exists in the assignment folder before registering it.');
  process.exit(1);
}

const newAttachment = {
  name: displayName,
  file: filename,
  type
};

assignment.attachments.push(newAttachment);

try {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n', 'utf8');
  console.log(`Registered attachment "${filename}" for assignment "${id}" in ${configPath}`);
} catch (err) {
  console.error('Failed to write config.json');
  console.error(err.message);
  process.exit(1);
}
