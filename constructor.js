class User {
    constructor(email,name){
        this.email=email;
        this.name=name;
        this.score=0;
    }
    login(){
        console.log(this.email,"login successfully");
        return this;
    }
    logout(){
        console.log(this.email,"logout sucessfully");
        return this;
    }
    updatescoe(){  // solution of method chaining problem
        this.score++;
        console.log(this.email,'score is now',this.score);
        return this;
    }
}
class Admin extends User{
    deleteUser(user){
        users =users.filter(u =>{
            return u.email!=user.email;
        })
    }
}


var userOne =new User("beldhose2015@gmail.com","basil");
var userTwo = new User("ananthu@gmail.com","ananthu");
var admin =new Admin("kiran@gmail.com","kiran")

userOne.login();
userTwo.logout();

userOne.login().updatescoe().updatescoe().logout() //called method chaining  but it couses an error

var users =[userOne,userTwo,admin]

admin.deleteUser(userTwo);
console.log(users);