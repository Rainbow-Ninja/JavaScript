console.log("Person 1 shows ticket");
console.log("Person 2 shows ticket");

// function promiseMyGirlFriendIsBringingTicks() {

// }

const promiseMyGirlFriendIsBringingTicks = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"), 5000);
    })
}


const getPopCorn = promiseMyGirlFriendIsBringingTicks().then(t => {
    console.log(`gf: I got ${t}`);
    console.log("bf: lets go in ");
    console.log("gf: I want the pop corn")
    return new Promise((resolve, reject) => {
        resolve(`${t} and popcorn`)
    })
})

const addButter = getPopCorn.then(items => {
    console.log(`I've got ${items}`);
    console.log("let's go in");
    return new Promise((resolve, reject) => {
        resolve(`${items} plus butter`)
    })
})

addButter
    .then(t =>  console.log(`Person 3 shows ${t}`))
    .catch(err => console.log(err));

console.log("Person 4 shows ticket");
console.log("Person 5 shows ticket");