//Arrow functon
// const uppersizedName=["basil","aleiyas","kiran"].map(function(name){
//     return name.toUpperCase();
// });

const uppersizedName=["basil","aleiyas","kiran"].map(name=>name.toUpperCase());
console.log(uppersizedName);

// empty parameter list requires parentheses
const say =()=>{
    console.log("hello world")
}
say();

// multiple parameters requires parentheses

const icecream =(flavor,price)=>{
    console.log(`Here's your ${flavor} ice cream the price of ${price} rupee.`);

}
icecream('chocolate',100);

// this and arrow function

function icecreams(){
    this.scpoe =0;
}
//add scope to the icecream
icecreams.prototype.addscope=function(){
    setTimeout(function(){
        this.scpoe++;
        console.log("scope added");
    },500);
};
const desert = new icecreams();
desert.addscope();

// default function parameter

function greet(name='student',greetings='welcome'){
    console.log(`${greetings} ${name}`);
}
greet();
greet("basil");
greet("basil","howdy");

// Default and Destructuring array
function createGrid([width = 5, height = 5]) {
    console.log(`Generates a ${width} x ${height} grid`);
  }
createGrid([]);
createGrid([2]);
createGrid([2,3]);
createGrid([undefined,3]);

//default abd destructuring object

function createSundae({scoops=1,toppings=['hot fudge']}){
    const scoopText= scoops===1 ? 'scoops':'scoops';
    console.log(`Your sundae has ${scoops} ${scoopText} with ${toppings.join(' and ')} toppings.`);
}
createSundae({});
createSundae({scope:2});
createSundae({scoops: 2, toppings: ['Sprinkles']}); 
createSundae({toppings: ['Cookie Dough']}); 

// class

class Dessert{
    constructor(calories =250){
        this.calories=calories;
    }
}
class ice extends Dessert{
    constructor(flavor,calories,toppings=[]){
        super(calories);
        this.flavor=flavor;
        this.toppings=toppings
    }
    addToppings(toppings){
        this.toppings.push(toppings)
    }
};

// ES6 Class

// class Plane{
//     constructor(numEngines){
//         this.numEngines=numEngines
//         this.enginesActive=false;
//     }
//     startEngines(){
//         console.log("engine start");
//         this.enginesActive=true;
//     }
// };

// convert a function to Class

function plane(numEngines){
    this.numEngines=numEngines;
    this.enginesActive=false;
};
plane.prototype.startEngines=function(){
    console.log("start engine");
    this.enginesActive=true;
};
var richardsplane =new plane(1);
    richardsplane.startEngines;
var jamesplane =new plane(4);
jamesplane.startEngines;    

// class
class Plane {
    constructor(numEngines){
        this.numEngines=numEngines;
        this.enginesActive=false;
    };
    startEngines(){
        console.log("start engine");
        this.enginesActive=true;

    }
};
var richardsplane=new Plane();
    richardsplane.startEngines;
var jamesplane =new Plane();
    jamesplane.startEngines;

// class is just a function
    class Plan{
            constructor(numEngines){
                this.numEngines=numEngines
                this.enginesActive=false;
            }
            startEngines(){
                console.log("engine start");
                this.enginesActive=true;
            }
        };
        typeof Plane;

// static Method

class Planes {
    constructor(numEngines){
        this.numEngines=numEngines;
        this.enginesActive=false;
    }
    static badweather(Planes){
        for(plane of Planes){
            plane.enginesActive=false;
        }
    }
    startEngines(){
        console.log("engine start")
        this.enginesActive=true;
    }
};

