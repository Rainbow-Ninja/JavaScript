// CHALLENGE 5 - Facebook Likes
// We are all familiar with the facebook likes. Someone posts a photo or makes a post. When the post is first released:
// - If no one likes it, it says a sad 'No one likes this' underneath it
// - If one person likes it - it says '#{name} likes this'
// - If two people like it - it says '#{name} and #{name} like this'
// - If 3 people like it - it says '#{name}, #{name} and #{name} like this'
// - If 4 or more people like it - it says '#{name}, #{name} and #{num} others like this', where the two names are the most recent in the array, and the num is the remaining amount of people
// ## 5.1 - Core Functionality 
// Write a solution that takes an array of people's names. The solution should loop through these names to tell the user who likes the post, in the above format. **Super important:** make sure to get the grammar correct!!
// _E.g._ facebook_likes(["Alex"]) should return "Alex likes this"
// _E.g._ facebook_likes([]) should return "No one likes this"
// _E.g._ facebook_likes(["Alex", "Garret"]) should return "Alex and Garret like this"
// _E.g._ facebook_likes(["Alex", "Garret", "Paul", "Aleisha", "Sarah", "Macey"]) should return "Macey, Sarah and 4 others like this"

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

noLikes = [];
oneLike = ["Alex"];
twoLikes = ["Alex", "Dave"];
threeLikes = ["Alex", "Dave", "Derek"];
fourLikes = ["Alex", "Dave", "Derek", "Matt"];
moreLikes = ["Alex", "Dave", "Derek", "Matt", "Mitch", "Sam", "Bill"];

likes(noLikes);
likes(oneLike);
likes(twoLikes);
likes(threeLikes);
likes(fourLikes);
likes(moreLikes);