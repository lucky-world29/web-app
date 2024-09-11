const marvel_heroes = ["thor","IronMan","SpiderMan"]
const dc_heros = ["SuperMan","Batman","Flash"]


// marvel_heroes.push(dc_heros) // push
// console.log(marvel_heroes);

// marvel_heroes.concat(dc_heros) // concat
// console.log(marvel_heroes);

// const all_new_heros = [...marvel_heroes, ...dc_heros] // spread operator
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // FLAT
console.log(real_another_array);

console.log(Array.isArray(another_array))//  checks if it is an array
console.log(Array.from("Lucky")) //Creates an array from an iterable object.
// /* interesting
// console.log(Array.from(
//     {name : Lucky}  // here some error occured 
// ));

console.log(Array.from({name:"lucky"})); // .

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));



