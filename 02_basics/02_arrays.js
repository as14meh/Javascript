const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros)
// [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]-[0,1,2,3]subarray bn gya

//console.log(marvel_heros[3][1])
//flash
// marvel_heros.concat(dc_heros)
////[ 'thor', 'Ironman', 'spiderman' ]
// const all_Heros=marvel_heros.concat(dc_heros)
// console.log(all_Heros)
//[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// const all_new_heros=[...marvel_heros,...dc_heros]-best way-same as concat
// console.log(all_new_heros)
// [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_Array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const result=another_Array.flat(Infinity)
// console.log(result)
//[
  //  1, 2, 3, 4, 5,
  //  6, 7, 6, 7, 4,
  //  5
  //]


//   console.log(Array.isArray("Hitesh"))-false
//   console.log(Array.from("Hitesh"))
  //[ 'H', 'i', 't', 'e', 's', 'h' ]
//   console.log(Array.from({name:"hitesh"}))-[](interesting)

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))
//[ 100, 200, 300 ]