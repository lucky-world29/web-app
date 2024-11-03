function  getScore(){
    return [70,80];
}

let score = getScore();
console.log(score);

// BEFORE ES6
// let x = score[0];
//     y = score[1];
//     z = score[2];
//     console.log(x,y,z);

// by use of destructuring

let[x,y,z] = getScore();
console.log(x,y,z)

// [] are  not array syntax 
// if getScore() return an array of two elements , then the 3rd variable will be undefined

// if the function return more values ..

function GetScore(){
    return ["lucky" , 98, "kartavya",89];
}
let score2 = GetScore();

let [a,b,c] = GetScore();
console.log(a,b,c)


// Array Destructuring Assignment and Rest syntax

let [...args] = GetScore();
console.log(args);

// 1 . It's possible to destructure an array in the assignment that separates from the variables declaration .

let a1,b1;
[a1,b1] = [10,20];
console.log(a1,b1);
9

/**
 * setting a default value
 */

function ITEMS(){
    return [32,69];
}
let items = ITEMS();
let third_item = items[2]!= undefined ? items[2] : 122; 
console.log(third_item+" 3rd item");

// BY DESTRUCTURING ASSIGNMENT

let [, , ThirdItem=0] = ITEMS();
console.log(ThirdItem);


