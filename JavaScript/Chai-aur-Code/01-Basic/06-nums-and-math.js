// // const score = 400;
// // console.log(score);
// // console.log(typeof(score));

// // //
// // const balance = new Number(899);
// // console.log(balance);
// // console.log(typeof(balance));

// // const nama = "google";
//  console.log("Length  of nama is"+" "+nama.length);

// // //

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof(balance));

// const number1 = 4892.5983;
// console.log(number1.toFixed(3));

// const number2 = new Number(75.13108);
// console.log(number2.toPrecision(4));
// console.log(typeof(number2));

//

// const test1 = "lucky";
// console.log("type of test1 is" + " " + typeof test1);

// const test2 = new String("lucky");
// console.log("type of test2 is" + " " + typeof test2);

// const hundreds = 10000000000;
// console.log(hundreds.toLocaleString("en-IN"));
// console.log(hundreds.toLocaleString());

// function equal(x, y) {
//     return Math.abs(x - y) < Number.EPSILON;
// }

// const x = 0.2;
// const y = 0.3;
// const z = 0.1;
// console.log(equal(x + z, y)); // true


//================================================================Math =====================================

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(3.4));
// // floor and ceil
// console.log(Math.ceil(3.4)); // return the greater value 
// console.log(Math.floor(3.4));  // return the lower value
// // min and max
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// // random
// console.log(Math.random());
// console.log(Math.random()*1000);
// console.log(Math.ceil(Math.random()*1000));
// console.log("===================================");
// const random_number = Math.floor(Math.random() * 10000000+1);
// console.log(random_number);
// console.log(random_number.toString().length);

// ==========================================================

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min); 

