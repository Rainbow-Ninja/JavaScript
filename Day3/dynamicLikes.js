// ## 5.2 - User Prompt
// Can you make this method more dynamic, by getting the user to enter the names of people who like the post?

function likes(array) {
    switch(array.length){
        case 0:
            console.log("No one likes this");
            break;
        case 1:
            console.log(`${array[0]} likes this`);
            break;
        case 2:
            console.log(`${array[0]} and ${array[1]} like this`);
            break;
        case 3:
            console.log((`${array[0]}, ${array[1]} and ${array[2]} like this`));
            break;
        default:
            console.log(`${array[0]}, ${array[1]} and ${array.length - 2} others like this`);
            break;
    }
}

var likeArray = [];
do{
    var answer = prompt("Who liked you post? type 'done' when you're done");
    if(answer != "done"){
        likeArray.push(answer);
    }
}while(answer != "done")

likes(likeArray);