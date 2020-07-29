const cryptoApi = require('../lib/cryptoApi');
const KeyManager = require('../lib/KeyManager');



// try {
//     const km = new KeyManager()
//     const apiKey = km.getKey()
    
// } catch (err) {
//     console.log(err.message.red)
// }

const check = {

    price (cmd) {
        try{
            const km = new KeyManager()
            const apiKey = km.getKey()
            const CA = new cryptoApi(apiKey);
            CA.getPriceData(cmd.coin, cmd.cur)
        } catch (err){
            console.error(err.message.yellow)
        }
    },
};

module.exports = check;

