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

const obj3 = {...obj1, ...obj2}
console.log(obj3)
const obj4 = {obj1, obj2}
console.log(obj4)

