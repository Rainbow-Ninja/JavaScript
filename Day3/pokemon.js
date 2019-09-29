// CHALLENGE 6 - Pokemon Rare Candy Dispenser
// You have your very own Pokemon - a Pikachu!
// You're also super rich and have purchased a heap of Rare Candy - special items that can improve a Pokemon's power.
// 6.1 Core Functionality
// Create an object variable called "pikachu" with properties for nickname, level, HP, attack, defence, special attack, special defence & speed.
// Nickname should equal Pikachu for now.
// Create a variable that keeps track of how many "rare candies" you have.
// If the rare candy count is higher than 0, ask the user if they would like to level up their Pikachu.
// When the Pikachu levels up, increase the level by 1. Increase HP, attack, defence, special attack, special defense, and speed by 10% of their current values.
// 6.2 User-Controlled Candy Count
// Instead of just spending 1 Rare Candy, ask the user how many they would like to spend and spend that number of Rare Candy on Pikachu.
// To make the level-up process easy & still work, you may have to put it into a loop that runs a number of iterations equal to the amount of candy you spent.
// 6.3 Nicknaming
// Allow the user to set a new nickname for their Pokemon.
// This may mean you have to build a menu system so the user can choose if they're levelling up or nicknaming their Pokemon.
// When presenting the menu to the user, print the Pokemon's nickname in the menu too.

var pokemon = {
    nickname: "Pikachu",
    level: 5,
    HP: 70,
    attack: 20,
    defense: 20,
    specDefense: 25,
    specAttack: 25,
    speed: 10
};

var rareCandies = 3;

let nameOrCandy = prompt(`Would you like to (R)ename your ${pokemon.nickname} or level them up using your rare (C)andies?\nPlease enter "R" for rename or "C" for candies`)
if(nameOrCandy.toLowerCase() == "c"){
    let response = prompt("Would you like to use a rare candy to level up you pokemon?\nType 'yes' or 'no'");
    if(response.toLowerCase() == 'yes'){
        let amount = prompt("How many rare candies would you like to use?");
        if(amount > rareCandies){
            "You don't have that many"
        } else {
            for(let i = 0; i < amount; i++){
                rareCandies--;
                pokemon.level++;
                pokemon.HP *= 1.1;
                pokemon.attack *= 1.1;
                pokemon.defense *= 1.1;
                pokemon.specDefense *= 1.1;
                pokemon.specAttack *= 1.1;
                pokemon.speed *= 1.1;
                console.log(pokemon);
            }
        }
    }
} else if (nameOrCandy.toLowerCase() == "r"){
    let rename = prompt("What you you like to rename your pokemon?")
    pokemon.nickname = rename;
    alert(`Your pokemon is now named ${pokemon.nickname}`);
} else {
    alert("That was an invalid response");
}

console.log(pokemon);