#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

function usage() {
  console.error('Usage: node update-config.js <id> "<title>" "<description>" [dueDate: YYYY-MM-DD]');
  process.exit(1);
}

const args = process.argv.slice(2);
if (args.length < 3) usage();

const [id, title, description, dueDate] = args;

const configPath = path.resolve(__dirname, '../../../../config.json');

let config;
try {
  const raw = fs.readFileSync(configPath, 'utf8');
  config = JSON.parse(raw);
} catch (err) {
  console.error('Failed to read or parse config.json at', configPath);
  console.error(err.message);
  process.exit(1);
}

if (!Array.isArray(config.assignments)) config.assignments = [];

if (config.assignments.some(a => a.id === id)) {
  console.error(`An assignment with id "${id}" already exists in config.json`);
  process.exit(1);
}

const newEntry = {
  id,
  title,
  description,
  path: `assignments/${id}`
};
if (dueDate) newEntry.dueDate = dueDate;

// Ensure attachments array is present if needed later
// newEntry.attachments = [];

config.assignments.push(newEntry);

try {
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2) + '\n', 'utf8');
  console.log(`Added assignment "${id}" to ${configPath}`);
} catch (err) {
  console.error('Failed to write config.json');
  console.error(err.message);
  process.exit(1);
}
