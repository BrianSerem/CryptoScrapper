const program = require('commander');

const key = require('../commands/key');


program
   .command('set')
   .description('set your API key')
   .action(key.set);

program
   .command('show')
   .description('display your API key')
   .action(key.show);

program
   .command('remove')
   .description('remove your API key')
   .action(key.remove);

program.parse(process.argv);
