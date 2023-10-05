const userEmail=[]

// if(userEmail){
//     console.log("Got user email")
// }
// else{
//     console.log("Don't have user email");
// }

// falsy value
// flase , 0, -0 , BigInt 0n ,null, undefined, NaN

// truthy value
//  "0", 'false', " ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is empty");
}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):null undefined

let val1;
// val1=10 ?? 5
// val1=null ?? 5
// val1=undefined ??5
// val1=undefined ?? null
val1=null ?? 10 ?? 20


console.log(val1);

// Ternary Operator

// condition ? true:false 

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("more than or equal 80") : console.log("less then 80");