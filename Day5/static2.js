class Home{
    constructor(){

    }

    static unlock(passPhrase) {
        if(passPhrase == "Please"){
            console.log("Please Enter");
        } else {
            console.log("Not Allowed");
        }
    }
}

Home.unlock("Please");
Home.unlock("Let me in");