for(var i = 0; i < 4; i++) {
    setTimout(function(){
        console.log(i)
    }, 0);
}
//prints 4, 4, 4, 4
//by the time console.log gets called back i is already looped through to 4