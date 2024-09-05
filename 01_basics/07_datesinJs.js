//let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)-object

//let myCreatedDate=new Date("01-14-2023")
// console.log(myCreatedDate)
// myCreatedDate.toString()
// .toDateString()
// new Date(2023,0,23,5,3)-1/23/2023,  5:03:00 AM
// let myCreatedDate=new Date("2023-01-14")-yy-mm-dd (in india it is "dd-mm-yy")
// console.log(myCreatedDate.toLocaleString())

//let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
//console.log(Date.now())-gives ans in millisec since specified date
// console.log(Math.floor(Date.now()/1000))-Math.floor because it gives ans in points n u gotta find the lower value and /1000 to conv milli sec to seconds
//date is itself an object
let newDate=new Date()
// console.log(newDate.getMonth()+1)
// newDate.getDay()
//newDate.getHours-read many
//console.log(`${newDate}is me`)
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:''
})


