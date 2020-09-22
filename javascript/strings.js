var a = "hello";
var b = "world";
// concatinition
console.log(a + b);
// Comparing strings
console.log(a == b);
console.log(a != b);
console.log("Yes" == "Yes");

// Ascii values
var my_string = "a";
var ascii_value = my_string.charCodeAt(0);
console.log(ascii_value);

//Boolean

var num1 = 10;
var num2 = 20;
if (num1 > num2) {
    console.log("variable a has higher value");
}
else {
    console.log("variable b has higher value");
}
// Boolean conitions
if (0) {
    console.log("the statement will always execute because conditional is set to 1 that is true");

}
if (0) {
    console.log("the statement will never execute because conditional is set to 0 that is false");

}


// Case 1 if statement

var price = 15.00;
var money = 20.00;
if (money >= price) {
    console.log("buy hammer");
}
else {
    console.log("don't buy hammer");
};

// elseif statement

var weather = "sunny";
if (weather === "snow") {
    console.log("bring a coat");

} else if (weather === "rain") {
    console.log("bring a rain jacket");

}
else {
    console.log("wear what you have on");
};

// logical operator

var colt = "not busy";
var weather = "nice";
if (colt === "not busy" && weather === "nice") {
    console.log("go to the park")
}

//truthy and falsy

if ("") {
    console.log('THE VALUE IS TRUTHY');

} else {
    console.log("the value is falsy");
};

if (1) {
    console.log('THE VALUE IS TRUTHY');
}
else {
    console.log("the value is falsy");
}

// trenary operator

var isGoing=true;
var color =isGoing? "green":"red";
console.log(color);

//switch

var option =3;
switch(option){
    case 1:
        console.log("selected option 1")
        break;
    case 2:
        console.log("selected option 2");
        break;
    case 3:
        console.log("selected option 3");
        break;
    case 4:
        console.log("selected option 4");
        
}

                                        //LOOPS

// while loop

var x=1;
while(x<=100){
    console.log(x+"mississippi");
    x =x+1;
}

var start =0;
while(start<10){
    console.log(start);
    start =start+2;
}

// For loop

for(var i=0;i<=6;i++){
    console.log("printing out i = "+i);
} 

// Nested Forloop

for(var x =0;x<=5;x=x+1){
    for(var y=0;y<=3;y++){
        console.log(x+","+y);
    };
};

// Functions

function reverseString(reverseMe){
    var reversed ="";
    for(var i=reverseMe.length-1;i>=0;i--){
        reversed =reversed+reverseMe[i]
    }
    return reversed;
}
console.log(reverseString("Basil"));

// Shadowing


var booktitile ="LE PETIT PRINCE";
console.log(booktitile);
function displayBookEnglish(){
    booktitile="THE LITTLE PRINCES";
    console.log(booktitile);
}
displayBookEnglish();
console.log(booktitile);

// to avoid shadowing

var booktitile ="LE PETIT PRINCE";
console.log(booktitile);
function displayBookEnglish(){
   var booktitile="THE LITTLE PRINCES";
    console.log(booktitile);
}
displayBookEnglish();
console.log(booktitile);

