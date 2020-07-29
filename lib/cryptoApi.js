const axios = require('axios');
const colors = require('colors');


class CryptoAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseURL = 'https://api.nomics.com/v1/currencies/ticker';
    }

    async getPriceData (coinOption, curOption) {
        try {
            const res = await axios.get(`${this.baseURL}?key=${this.apiKey}&ids=${coinOption}&convert=${curOption}`);
            // console.log(res.data)
            let output = '';
            res.data.forEach(coin => {output += `Coin: ${coin.symbol.yellow} Price: ${coin.price.green} ${curOption}`});
            console.log(output)  ;

        } catch (err) {
            err.response.status == 401 ? console.error('Access denied, make sure you have a valid API KEY'.red) : 
            console.err(err.message.red)
        }

    }
   
}


module.exports = CryptoAPI;
