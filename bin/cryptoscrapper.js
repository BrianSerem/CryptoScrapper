#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
    .version(pkg.version)
    .command('key', 'get your API key --https://nomics.com')
    .command('check', 'get crypto information')
    .parse(process.argv)
