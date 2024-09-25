//for of
// const arr=[1,2,3,4,5]
// for(const num of arr){
//     console.log(num);
// }
//  const g="hiumopp"
// for(const num of g){
//     console.log(num);
// }

//Maps

const map=new Map()
map.set("In","iNDIA")
map.set("USA","United States")
map.set("fr","France")
// console.log(map);
// { 'In' => 'iNDIA', 'USA' => 'United States', 'fr' => 'France' }

for(const key of map){
    console.log(key)
}
//{ 'In' => 'iNDIA', 'USA' => 'United States', 'fr' => 'France' }
// for(const [key,value] of map){
//     console.log(key+"  "+value);
// }

// const myObj={
//     'game1':'nfs',
//     'game2':'spider'
// }
// for(const [key,value] of myObj){
//     console.log(key,':',value)
// }
//not iterable


// const myObj={
//     game1:'nfs',
//     game2:'spider'
// }
// for(const [key,value] of myObj){
//     console.log(key,':',value)
// }
//not iterable