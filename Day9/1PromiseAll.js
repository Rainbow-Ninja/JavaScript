function user1() {
    return new Promise((resolve, reject) => {
        //setTimeout(cb fnct, 2000);
        setTimeout(() => {
            resolve("David")
        }, 2000);
    })
}

function user2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Kats")
        }, 3000);
    })
}

function user3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Shun")
        }, 5000);
    })
}

var userList = [user1(), user2(), user3()];

Promise.all(userList)
    .then(userNames => console.log(userNames))
    .catch(error => console.log(error));