const KeyManager = require('../lib/KeyManager');
const inquirer = require('inquirer');
const colors = require('colors');
const { isRequired } = require('../utils/validations');


const key = {

async set () {

        const km = new KeyManager()
        const input = await inquirer
           .prompt([
               {
               type: 'input',
               name: 'key',
               message: 'Enter your key here'.green + ' https://nomics.com',
               validate: isRequired
               }]);
        
        const key = km.setKey(input.key)

        if(key){
            console.log('Your Key is  set '.blue) 
        } else {console.log('eror hapa tena')}
    
    },

    show () {
      try {
          const km = new KeyManager();
          const key = km.getKey();
          console.log(`Your API key is: ${key.yellow}`)

      } catch (err) {
          console.log(err.message.red)
      }
    },
    remove () {
        try {
            const km = new KeyManager();
            const key = km.deleteKey()
            console.log(`Your API key is has been removed`.red)
  
        } catch (err) {
            console.log(err.message.red)
        }
        
    }
}

module.exports = key;