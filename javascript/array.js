var alpha = ["a", "b", "c", "d"];
console.log(alpha);

// array in array

var arrayinarray = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [true, false, true, false]
];
console.log(arrayinarray);

//indexing

var name = ['basil', 'sinu', 'manaf', 'kiran'];
console.log(name[0])

// array length

var name = ['basil', 'sinu', 'manaf', 'kiran'];
console.log(name.length);

//push
var name = ['basil', 'sinu', 'manaf', 'kiran'];
name.push("nandu");
console.log(name);

//pop
name.pop();
console.log(name);

// splice allows ayou to add and remove elements from an array
var name = ['basil', 'sinu', 'manaf', 'kiran'];
name.splice(2, 1, 'nadu');
console.log(name);

// reverse

var reverse = ['a', 'b', 'c', 'd'];
reverse.reverse();
console.log(reverse);

// Sort

var elements = [5, 8, 3, 0, 1, 9, 2];
elements.sort();
console.log(elements);

// join

var name = ['basil', 'sinu', 'manaf', 'kiran'];
var string = name.join();
console.log(string);

// Array loops

var name = ['basil', 'aleiyas', 'shiby'];
for (var i = 0; i < name.length; i++) {
    name[i] += ' k eldhose'
    var result = name[i] = name[i].toUpperCase();
    console.log(result);
}

//foreach loop
var name = ['basil', 'aleiyas', 'shiby'];
name.forEach(function (name) {
    name += " eldhsoe";
    name = name.toUpperCase();
    console.log("Foreach result:", name);


});

//Map
var name = ['basil', 'aleiyas', 'shiby'];
name.map(function (name) {
    name += "Eldhose";
    name = name.toUpperCase();
    console.log(name)
});

// create an array and find second largest number

var a = [8, 5, 4, 7, 9,2, 2, 3, 9];
var b = a.sort();
var c = b.reverse();
for (let i = 0; i <= c.length; i++) {
        if(c[0]==c[i]){
            c.splice(i,1);
        }
        else {
            console.log(c[1]);
        };
    };

