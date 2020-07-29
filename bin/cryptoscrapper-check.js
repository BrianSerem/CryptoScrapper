const program = require('commander');
const check = require('../commands/check');


program
   .command('price')
   .description('check crypto price')
   .option(' --coin <type>', 'Add specific coin types n CSV format', 'BTC,ETH,XRP')
   .option('--cur <currency>', 'Add specific currency', 'USD')
   .action(cmd => check.price(cmd));


program.parse(process.argv);
 