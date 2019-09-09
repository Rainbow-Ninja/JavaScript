console.log(1);

setTimeout(() => { //args - what needs to be executed, how long should it wait
    console.log(2);
}, 5000); //wait 5 secs

console.log(3);
//------------------------------------------

console.log(1);

setTimeout(() => { //args = what needs to be executed, how long should it wait
    console.log(2);
}, 0); //wait 5 secs

console.log(3);
//this will still print out 1 3 2 but without the wait cause the setback chucks it over in the queue