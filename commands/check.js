const cryptoApi = require('../lib/cryptoApi');
const KeyManager = require('../lib/KeyManager');



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

