// Premivite
// 7 types : String, Number, Boolean null, undefined, Symbol, BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber = 2555487484165487165745n
console.log(bigNumber);

// Refrence (Non premitive)
// Array, Objects, Functions

const heros=["shaktiman","naagraj","doga"]
let myobj={
    name:"hitesh",
    age:22
}

const myFunction=function(){
    console.log("Hello World");
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Prenitive), Heap (Non-Premitive)

let myYoutubename="hiteshchaudhary.com"
let anotherName=myYoutubename
anotherName="Chaiaurcode"
console.log(anotherName);
console.log(myYoutubename);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne

userTwo.email="hitesh@google.com"
console.log(userOne.email);
console.log(userTwo.email);
