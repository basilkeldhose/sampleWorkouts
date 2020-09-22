
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world');
    }, 2000);
});

promise.then(function(data) {
    console.log(data);
});

// Multiple Callbaks

var promise =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("hello world")
    },2000)
});

promise.then(function(data){
    console.log(data + '1');
});
promise.then(function(data){
    console.log(data +'2');
});
promise.then(function(data){
    console.log(data + '3');
});

//when an error happen

var promise =new Promise(function(resolve,reject){
    setTimeout(function(){
        reject("we are all going to die");
    },2000);
});
promise.then(function sucess(data){
    console.log(data);  
},function error(data){
    console.error(data);
});

//calling resiolve multiple times
//You can call resolve and reject multiple times, but this is useless. Once a promise is finished, it can't restart.
var promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('hello world 1');
        resolve('hello world 2');
        resolve('hello world 3');
        resolve('hello world 4');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});

// callbacks vs promise

function loadImage(src,parent,callbacks){
    var imag =document.createElement('img');
    imag.src=src;
    imag.onload =callbacks;
    parent.appendChild(img);
};

