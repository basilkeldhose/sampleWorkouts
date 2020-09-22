// compine array with concat

const friut =["apple","banana","orange"];
const vegitable =["corn","carrot","potato"];
const produse =friut.concat(vegitable);
console.log(produse);

// Rest parameter

const order =[20.17,18.67,1.50,"cheese","egg","milk","bread"];
const[total,subtotal,tax,...item]=order;
console.log(total,subtotal,tax,item);

