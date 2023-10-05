// if
// const isUserloggedIn=true
// const temprature=41
// if (isUserloggedIn) {
    
// }
// if (false) {
    
// }
// <, >, <=, >=, ==, ===, !==

// const score=200
// if(score>200){
//     const power="fly"
//     console.log(`User Power: ${power}`);
// }

// const balance=1000
// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than 500");
// }
// else if (balance<750) {
//     console.log("less thean 750");
// }
// else if(balance<900){
//     console.log("less thean 900");
// }
// else{
//     console.log("less than 1200");
// }
const isUserloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(isUserloggedIn && debitCard && 2==3){
    console.log("Allow to buy courses");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}
