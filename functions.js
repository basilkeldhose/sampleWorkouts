
greet(); // it work because in case of function declaration occures hoisting problem there for the function
         // declaration moving to the top of the funtion call


//function declaration
function greet (){
    console.log("hello welcome");
}
// function expression

const spark =function(){
    console.log("hello good day"); // in case of function expression the javascript prevent the hoisting problem.
                                   // so we call the function before the funtion expression it geves a error
}; // use semicolons in the end of the function exprection


spark();

greet();

// aeguments and parameters

const sparks =function(name,time){
    console.log(`good ${time} ${name}`);// to pass a parameter with the function it will use inside the function
};
sparks("basil","evening") // the order of the arguments are very importent is same as the parameter order


// passing default values
const sparke =function(name="basil",time="morning"){
    console.log(`good ${time} ${name}`);
};
sparke();

//return values

const calculate = function(radious){
    let area =3.14*radious**2;
    return area;
};
const area  = calculate(5);
console.log(area);

// Arrow function

const Area =radious => 3.14*radious**2;

const circle =Area(7);
console.log(circle);

// const bill =function(product,tax){
//     let total =0;
//     for(var i=0; i<product.length; i++){
//         total +=product[i]+product[i]*tax;   

//     }
//     return total;
// }

// convert the above code in to arrow function

const bill = (product,tax)=>{
    let total=0;
    for(var i=0; i<product.length; i++){
        total +=product[i]+product[i]*tax;   

    }
    return total;
}
console.log(bill([15,20,30],0.2))

// callback and foreach

let person =["mario","lingi","marco","gomaz","sunil"];
person.forEach(function(people){
    console.log(people)
});
//convert it in to a arrow function
let people =["mario","lingi","marco","gomaz","sunil"];
people.forEach(person => console.log(person));