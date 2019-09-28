const userData = require('./2util')

const {myFuncs} = userData;
const {getPokemon, greet} = myFuncs;

greet();

// getPokemon
//     .then(data => data.json())
//     .then(result => console.log(result.name))
//     .catch(err => console.log(err));

//this is exactly the same as the then catch only more modern
const pokeName = async function() {
    try{
        let data = await getPokemon
        let result = await data.json()
        console.log(result.name);
    }
    catch(err){
        console.log(err)
    }
}

pokeName();