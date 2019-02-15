const yargs = require('yargs');

yargs
.usage('Usage: npm <command> [options]')
.commandDir('cmds',{
    extensions:['ts']
})
.strict()
.demandCommand(1,'You need to run a command')
.help()
.argv