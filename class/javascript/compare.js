let a = 5;
let b = a;
let c = 5;
console.log(a === b);
console.log(b === c);
//a = 10;

console.log(a === b);

let arrA = [a];
let arrB = arrA;
let arrC = [a];

//onsole.log(arrA);
//console.log(arrB);
//console.log(arrC);
arrA = [a, 100];
