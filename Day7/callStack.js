// function x(){
//     console.log("hello");
// }

// function y(){
//     x();
// }

// function z() {
//     y();
// }

// z();

//----------------------------------------

function x(){
    console.log("hello");
}

function y(){
    x();
}

function z() {
    setTimeout(function () {
        console.log("executed after 5 secs")
    }, 5000);
    y();
}

z();