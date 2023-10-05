function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}
// sayMyName()
// function addTwoNumbers(num1,num2) {

//     console.log(num1+num2);

// }
function addTwoNumbers(num1, num2) {


    return num1 + num2
}
const result = addTwoNumbers(3, 4)
// console.log(`Result is ${result}`);
function loginUserMessage(username = "Guest") {

    return `${username} just logged-in`



}
// console.log(loginUserMessage("hitesh"))

function calculateCartPrice(...num1) {
    return num1
}
// console.log(calculateCartPrice(5,2,7));
const user = {
    username: "hitesh",
    price: 199

}
function handleObject(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "hitesh",
    price: 199
})
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100,200,300]));