const coding=["js","ruby","java","python","cpp"]

// coding.forEach(function (element){
//     console.log(element);
// })


// coding.forEach(element => {
//     console.log(element);
// });

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item, index, arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    for (const key in item) {
       console.log(`${key}: ${item[key]}`)
    }
})