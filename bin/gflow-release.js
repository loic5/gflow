#!/usr/bin/env node
'use strict';
const commander = require('commander');
const { release, getConfiguration } = require('../src');

commander
  .alias('gflow release')
  .parse(process.argv);

getConfiguration()
  .then((config) => {
    release(Object.assign({}, config, {}));
  });

