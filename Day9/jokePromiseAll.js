// 1.1 - Core App: 
// Create a terminal app that pulls one joke from each of these APIs & only shows them all when everything has finished loading:
// - https://sv443.net/jokeapi 
// - https://github.com/15Dkatz/official_joke_api?ref=apilist.fun
// - https://icanhazdadjoke.com/api
// ​
// You should be able to use "Promise.all" to handle this cleanly & display 3 jokes all at the same time!
const fetch = require('node-fetch');


var randomJoke;
var jokeCategory = "Any";
var format = "json";
var blacklistFlags = "nsfw"

function joke1() {
    fetch("https://sv443.net/jokeapi/category/Any")
        .then(res => res.json())
        .then(data => console.log(`${data.setup} ${data.delivery}`))
        .catch(err => console.log(err));
}

function joke2() {
    fetch("https://github.com/15Dkatz/official_joke_api?ref=apilist.fun")
        .then(response => console.log(response))
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

function joke3() {
    fetch("https://icanhazdadjoke.com/api")
        .then(response => console.log(response))
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

var jokeList = [joke1()];

Promise.all(jokeList)
    .then(jokes => console.log(jokes + "promise"))
    .catch(err => console.log("error was " + err));