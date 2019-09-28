const fetch = require('node-fetch');

const myFuncs = {
    getPokemon: fetch("https://pokeapi.co/api/v2/ability/7/"),
    greet: function() {
        console.log(`Hello Bob`);
    }
}

module.exports = {myFuncs};