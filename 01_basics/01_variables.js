const accountId=144553  //cannot change it 
let accountEmail="p.google.com"
var accountPassword="12345"
accountCity="Jaipur" //can declare variable like this
let accountState//printing it would give undefined

// console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity])
// In js use let n const because var mai scope ki dikkat agr hr jagah account pass kahi likha global bhi change toh scope ki dikkat

/*
Prefer not to use var because prob in block scope n functional scope
*/
