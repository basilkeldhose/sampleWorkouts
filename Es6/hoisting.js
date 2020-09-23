function getClothing(iscold){
    if(iscold){
        var freezing="Grab a jacket";

    }
    else {
        var hot ="its a short kind of day"; // hoisting the declaration to the function top
        console.log(freezing);
    }
}

// to avoid the hoisting problem

function getClothing(iscold){
    var freezing,hot;
    if(iscold){
        freezing ="Grab a jacket";
    }
    else{
        hot ="its a short kind of day"
        console.log(freezing)
    }
}

// Template litterals

const student ={
    name: "basil",
    graduation:"Btech"
};
const teacher ={
    name: 'Mrs. Wilson',
    room: 'N231'
};
let message = `${student.name} please see ${teacher.name} in ${teacher.room} to pick up your report card.`;
console.log(message);

//Destructuring value from an array

const point =[10,25,-34]
const [x,y,z]= point;
console.log(x,y,z);

//Destructuring values from an object

const gemstone ={
    type:'quartz',
    color:'rose',
    carat:21.29
};
const {type,color,carat}=gemstone;
console.log(type,color,carat);

// iteration

for(let i=0;i<=10;i++){
    console.log(i)

};

// forloop

const digits =[0,1,2,3,4,5,6,7,8,9]
console.log("for loop output :");
for(let i=0;i<digits.length;i++){
    console.log(digits[i]);
};

//for...in loop

const digit =[0,1,2,3,4,5,6,7,8,9]
console.log("for...in loop output :");
for (const index in digit){
    
    console.log(digit[index]);
};

//for...of loop

const name =['basil', 'sinu', 'manaf', 'kiran'];
console.log("for...of loop output :");
for(names of name){
    console.log(names);
};

const numbers =[0,1,2,3,4,5,6,7,8,9,0];
for(const digits of numbers){
    if(digits%2){
        continue;
    }
    console.log(digits);
};

//Spread operator
 
const books =["Don quixote","the hobbit","alice in wonderland","tela to two cities"];
console.log(...books);

