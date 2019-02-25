#!/usr/bin/env node
const yargs = require('yargs');

yargs
.usage('Usage: cli-crud <command> [options]')
.commandDir('cmds',{
    extensions:['ts','js']
})
.strict()
.demandCommand(1,'You need to run a command')
.help()
.argv