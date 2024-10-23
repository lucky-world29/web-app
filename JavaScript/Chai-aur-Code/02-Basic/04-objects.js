// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id ="123abc";
tinderUser.name = "Lucky";
tinderUser.age = 18;
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "hitesh@google.com",
    fullName :{
        firstName :"Abinash",
        laseName : "Behera"
    }
}

// console.log(regularUser.fullName)

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e", 6: "f"}

const obj3 = {...obj1, ...obj2}// spread operator
// console.log(obj3)
const obj4 = {obj1, obj2}
// console.log(obj4)

const obj5 = Object.assign({},obj1, obj2)
// console.log(obj5)

const users =[
    {
        id : 1,
        email : "lucky@google.com",
    },
    {
        id : 2,
        email : "abinash@google.com",
    }
]

// console.log(users.push(
//     {
//         id : 3, 
//         email : "hitesh@google.com"
//     })
// );

users.push({
    id :11,
    name : "Soul"
});

// console.log(users)

users[1].email
/* */
/*
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
*/
/* */
// console.log(Object.keys(tinderUser));

// console.log(typeof(tinderUser))








