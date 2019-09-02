// CHALLENGE 6: Pokemon Team Power Calculator
// Create a Pokemon object that has these variables on it:
// - Name
// - Health Points
// - Attack
// - Special Attack
// - Defence
// - Special Defence
// - Speed
// - Level
// Might be good to make a template object, so you can easily make new copies of it with some pre-defined data.
// Typically, all values except name & level have a mininum value of 10. 
// Level has a minimum value of 1.
// Name can be anything.
// ​
// Create a function that lets you make copies of the Pokemon object & pass through new values for each property on the Pokemon object.
// ​
// Next, you need to make 6 copies of the Pokemon object. 
// Then, create a function that goes through each of those 6 copies and sums up all values (except level & name).
// The total that you calculate is the Pokemon team power rating! Tada! 
// ​
// If you're a huge Pokemon nerd like me (Alex H from Sydney campus), go through Bulbapedia entries on your favourite Pokemon and put in some real Pokemon stats to see what values you can get.

function createPokemon(name = "name", hp = 10, attack = 10, specAttack = 10, defence = 10, specDefence = 10, speed = 10, level = 1) {
    return {
        name: name,
        hp: hp,
        attack: attack,
        specAttack: specAttack,
        defence: defence,
        specDefence: specDefence,
        speed: speed,
        level: level
    }
}

function teamPower(poke) {
    let sum = poke.hp + poke.attack + poke.specAttack + poke.defence + poke.specDefence + poke.speed;
    console.log(`${poke.name}'s team power level is ${sum}`);
}

var poke1 = createPokemon("Pikachu", 15, 25, 10, 10, 15, 12, 17);
var poke2 = createPokemon("Ghastly", 10, 35, 15, 11, 25, 12, 5);
var poke3 = createPokemon("Charmander", 15, 25, 12, 10, 15, 11, 5);
var poke4 = createPokemon("Flareon", 25, 45, 15, 10, 15, 10, 3);
var poke5 = createPokemon("Eevee", 15, 35, 20, 15, 12, 12, 34);
var poke6 = createPokemon("Bulbasaur", 35, 25, 20, 12, 24, 12, 24);

teamPower(poke1);
teamPower(poke2);
teamPower(poke3);
teamPower(poke4);
teamPower(poke5);
teamPower(poke6);

console.log(poke1);