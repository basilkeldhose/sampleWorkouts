
// symbols

const { performance } = require("perf_hooks");
const { match, rejects } = require("assert");
const { resolve } = require("dns");

const sym1 = Symbol('apple');
console.log(sym1);

const sym2 =Symbol('banana');
const sym3 =Symbol('banana');
console.log(sym2===sym3);

// iterable protocol

const digits =[0,1,2,3,4,5,6,7,8,9];
for(const digit of digits){
    console.log(digit);
}

//iterator protocol

const number =[0,1,2,3,4,5,6,7,8,9]
const arrayIterator =digits[Symbol.iterator]();
console.log(arrayIterator.next());
console.log(arrayIterator.next());
console.log(arrayIterator.next());

//Set operator

const games =new Set(['super mario','pubg','temple run','subway surf','super mario']);
console.log(games);
games.add('real cricket');
//add a item
console.log("new item added",games)
//checking the length
console.log(games.size);
//check if an item exist
console.log(games.has("pubg"));
console.log(games.has("mini miltia"));
// retrive all values
console.log(games.values());
// using the select iterator
const iterator = games.values();
    iterator.next();
    iterator.next();
// for...of loop 
const colors =new Set(['red','orange','black','green','yello']);
for(const color of colors){
    console.log(color);

};

// Weak set
let student1 ={name:"james",age:23,gender:"male"};
let student2 ={name:"alice",age:20,gender:"female"};
let student3 ={name:"basil",age:23,gender:"male"};
const roster =new WeakSet([student1,student2,student3]);
console.log(roster);
// roster.add('amanda'); // if you try to add some thing other than object you'll get an error

// garbage collection
student3=null;
console.log(roster);

// map
const employee =new Map();
console.log(employee);


const employes =new Map();
employes.set('jamesparkes@gmail.com',{
    firstname:"james",
    lastname:"parkes",
    role:"content developer"
});
console.log(employes);

// remove key value pair

console.log(employes.delete('jamesparkes@gmail.com'),employes);

// check key value pairs exist using has method

const member=new Map();
member.set('elvin',75.5);
member.set('melvin',70.5);
member.set('avin',50.5);

console.log(member.has('xavior'));
console.log(member.has('melvin'));

// using mapiterator
let iteratorObjForKeys = member.keys();
iteratorObjForKeys.next();

// for ...of loop

for(const members of member){
 console.log(members);
}

// foreach loop

member.forEach((values,key)=>{
    console.log(key,values);
});

// promises
