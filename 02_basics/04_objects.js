// const tinderUser=new Object();//singelton 
 const tinderUser={}//not singelton
// console.log(tinderUser)-{}
// console.log(tinder)-{}
tinderUser.id="1234av"
tinderUser.name="dopy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)
// { id: '1234av', name: 'dopy', isLoggedIn: false }
const regularUser={
    email:"some@gmail.com",
    fullName:{
        userfullName:{
            firstName:"Astha",
            lastName:"Mehra"
        }
    }
}
 //console.log(regularUser['fullName'])
 //or regularUser.fullName
// { userfullname: { firstname: 'Astha', lastname: 'Mehra' } }
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3)
//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//learn from mdn

// const obj3={...obj1,...obj2}
// console.log(obj3)
// { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
//[ '1234av', 'dopy', false ]
//[ [ 'id', '1234av' ], [ 'name', 'dopy' ], [ 'isLoggedIn', false ] ]
console.log(tinderUser.hasOwnProperty('isLoggedIn'));-true