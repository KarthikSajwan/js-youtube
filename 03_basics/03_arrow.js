const user = {
    username: "Karthik",
    price: 99,
    welcomeMsg: function(){
        console.log(`${this.username}! welcome to the website`);   //this refer to current context
    }
}

user.welcomeMsg()
user.username = "Sajwan"   //username will be updated as we used this and it refers to current context not hard coded
user.welcomeMsg()