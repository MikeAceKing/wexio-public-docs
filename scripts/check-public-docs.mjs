#!/usr/bin/env node
import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const includedExtensions = new Set(['.md', '.txt']);
const rootDocuments = new Set(['README.md', 'SECURITY.md', 'NOTICE', 'LICENSE']);

const blockedPatterns = [
  ['SUPABASE', 'SERVICE', 'ROLE', 'KEY'].join('_'),
  ['service', 'role'].join('_'),
  ['access', 'token'].join('_'),
  ['refresh', 'token'].join('_'),
  ['password', '='].join(''),
  ['APP', 'API', 'ENCRYPTION', 'KEY'].join('_'),
  ['MOLLIE', 'API', 'KEY'].join('_'),
  ['STORE', 'COVE'].join(''),
  ['J', 'W', 'T'].join(''),
  ['private', 'key'].join('_'),
  ['WEXIO', 'PROOF', 'A', 'ONLY', 'MARKER'].join('_'),
  ['WEXIO', 'PROOF', 'B', 'ONLY', 'MARKER'].join('_'),
];

const unsafeClaims = [
  ['Peppol', 'is', 'live'].join(' '),
  ['Mollie', 'is', 'live'].join(' '),
  ['fully', 'production', 'ready'].join(' '),
  ['guaranteed', 'revenue'].join(' '),
  ['fully', 'replaces', 'Odoo'].join(' '),
];

const uuidPattern = /\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b/i;
const credentialShape = /\beyJ[A-Za-z0-9_-]{40,}\b/;

async function collect(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '.git' && entry.name !== 'scripts') files.push(...await collect(path));
      continue;
    }
    const rel = relative(root, path);
    if (rootDocuments.has(rel) || includedExtensions.has(extname(entry.name))) files.push(path);
  }
  return files;
}

const failures = [];
for (const file of await collect(root)) {
  const content = await readFile(file, 'utf8');
  const rel = relative(root, file);
  for (const pattern of [...blockedPatterns, ...unsafeClaims]) {
    if (content.toLowerCase().includes(pattern.toLowerCase())) {
      failures.push(`${rel}: blocked phrase ${JSON.stringify(pattern)}`);
    }
  }
  if (uuidPattern.test(content)) failures.push(`${rel}: UUID-like identifier`);
  if (credentialShape.test(content)) failures.push(`${rel}: credential-like value`);
}

if (failures.length > 0) {
  console.error('[check-public-docs] FAIL');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('[check-public-docs] PASS — sanitized public documentation only');
