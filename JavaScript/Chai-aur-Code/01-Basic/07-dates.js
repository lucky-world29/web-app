// Dates 
/*
let myDate = new Date(); //an instance of date object 
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
*/
// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,10,10,10); // to print all of this we need to use toLocaleString() .
// console.log(myCreatedDate.toLocaleString());

let myCreateDate1 = new Date("03-11-2001"); // MM-DD-YYYY
console.log(myCreateDate1.toLocaleString());

let myCreateDate2 = new Date("2023-02-23"); // YYYY-MM-DD
console.log(myCreateDate2.toDateString());


let myTimeStamp = Date.now();
console.log(myTimeStamp);
// console.log(myCreateDate1.getTme()); .. // wrong or what 
console.log(Math.floor(Date.now()/1000));




let date = new Date();
console.log(date.toJSON());
console.log(date.toLocaleDateString());



let newDate = new Date();
console.log(newDate);




