// function sayMyName(){
//     console.log("A")
//     console.log("B")
// }
// sayMyName()

// function addTwoNumbers(number1,number2){
//   console.log(number1+number2);
// }
// addTwoNumbers(1,null)
//1

// function addTwoNumber(number1,number2){
//      let result=number1+number2
//     return result
// }
// console.log(addTwoNumber(1,2))
// const result=addTwoNumber(1,2)
// console.log(result)
function loginUserMessage(username){
    if(username===undefined){
        console.log("please enter a username")
    }
    return` ${username} just logged in`
}
console.log(loginUserMessage("Astha"))
//undefined is false

//rest operator
function calculateCartPrice(...num1){
    return  num1
}
//console.log(calculateCartPrice(200,400,500))
//[ 200, 400, 500 ]

function calculateCartPrice(val1,val2,...num1){
    return  num1
}
//console.log(calculateCartPrice(200,400,500,2000))
// [ 500, 2000 ]
const user={
    username:"Astha",
    price:109
}
function handleObject(anyobject){
    console.log(`Username is${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user);
// Username isAstha and price is 109
handleObject({
    username:"momo",
    price:399

})


// Username ismomo and price is 399

const myArr=[200,3,4,5]
function returnSecond(getArray){
    return getArray[2];
}
console.log(returnSecond(myArr));
// 4
