
const myArr = [1, 2, 3, 4, 5];

// console.log(myArr[0]);


// Array methods

// myArr.push(39);
// console.log(myArr);

// myArr.pop();

// myArr.unshift(8);
// myArr.shift();

// console.log(myArr.includes('a'));
// console.log(myArr.indexOf(90));

// const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);

// console.log("A " + myArr);

//SLICE
// const myn1 = myArr.slice(0,2);
// console.log(myn1);
// console.log("B "+myArr);


//SPLICE
// const myn2 = myArr.splice(0,2);
// console.log(myn2);
// console.log("C "+myArr);

//=================================================================================================

// console.log(myArr.copyWithin(0,1));

//ENTRIES
const list =  myArr.entries();

for(let i of list){
    console.log(i);
}



