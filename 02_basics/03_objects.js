//singelton-constructor se singelton bnta obj literal se ni
//Object.create

//obj literals
const mySym=Symbol("key1")


const JsUser={
    name:"Hitesh",
    age:18,
    [mySym]:"myKey1",
    email:"booh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]


}
// console.log(JsUser["email"])-best Way 
// console.log(JsUser.email)-can use but not when "full name":"Astha "is defined in obj cannot use . then
// console.log(typeof(JsUser.mySym))-string but v need symbolconsole.log(typeof(JsUser.mySym))
console.log(typeof(JsUser.mySym))
// console.log(typeof(JsUser[mySym]))-string
//JsUser.email="his@..."-change email
// Object.freeze(JsUser)
// JsUser.email="me@gmail.com"
// console.log(JsUser)

//JsUser.greeting= function(){
    //console.log("Hello Js user");
//}
// console.log(JsUser.greeting)-[Function (anonymous)]
// console.log(JsUser.greeting())-workspaces/javascript (main) $ node 02_basics/03_objects.js
//JsUser.greetingTwo= function(){
    //console.log(`Hello Js user,${this.name}`);
//}
//console.log(JsUser.greetingTwo())
