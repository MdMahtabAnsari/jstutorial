const user = {
    username: "hitesh",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()
// console.log(this);
// function chai() {
//     let username="hitesh"
//     console.log(this);
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this);
// }
// chai()
const chai = () => {
    let username = "hitesh"
    console.log(this);
}
chai()
// const addTwo=(num1,num2)=>{
//     return num1+num2
// }
// const addTwo=(num1,num2)=>num1+num2
// const addTwo=(num1,num2)=>(num1+num2)
const addTwo=(num1,num2)=>({username:"Hitesh "})


console.log(addTwo(5,6));
const myArray=[2,5,3,7,8]
