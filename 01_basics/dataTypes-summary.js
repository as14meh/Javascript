//Primitive 

//7 types:String,Number,Boolean,null,undefined,symbol,BigInt
// Is-js statically or dynamically typed

// constId=Symbol('123')
// id=Symbol('123')
//     console.log(constId==id)-false
//const bigNumber=23333333333333333333n-n makes it bigInt




//Reference(Non Primitive)
//Arrays,Objects,Functions
// const heros=["shaktiman","naagraj","doga"]
// let myObj={
//     name:"hitesh",
//     age:22,
// }
// const myFunction=function(){
//     console.log("Hello");
// }

// console.log(typeof myFunction)-function


//************************


//stack memory-for primitive,Heap(orig value)-non primi
//  p=10;
// q=p;
// q=11;
// console.log(q)-11-10
// console.log(p)
// let userOne={
//     email:"hi@gmail.com"
// }
// let userTwo=userOne

// console.log(userTwo.email)-hi@..
// userTwo.email="p@gmail.com"
// console.log(userOne.email);-p@...beacause in heap original copy mai change