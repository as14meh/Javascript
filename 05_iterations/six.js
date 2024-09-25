const coding=["js","ruby","java","python","cpp"]
const value=coding.forEach((item)=>{
    // console.log(item)
//     ruby
// java
// python
// cpp
    // return item;
    // undefined
})
// console.log(value);

const myNums=[1,2,3,4,5,6,7]
// const newNums=myNums.filter((num)=>num>4)
// console.log(newNums)
// in filter func  call back func we give condi agr cond satisfied then implementation happens

// const newNums=my Nums.filter((num)=>{
//     return num>4
// })
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4)
//         newNums.push(num)
// })


// console.log(newNums);

const obj=[
    {
        title:'bobo',
        genre:'horror',
        age:18
    },
    {
        title:'gobo',
        genre:'kids',
        age:20
    }
]
let ans=obj.filter((i)=>( i.age>=20))
console.log(ans)
//[ { title: 'gobo', genre: 'kids', age: 20 } ]
//let ans=obj.filter((i)=>{ i.age>=20})
// []
//let ans=obj.filter((i)=>{return i.age>=20}
//[ { title: 'gobo', genre: 'kids', age: 20 } ]

