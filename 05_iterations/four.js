const myObj={
    js:'js',
    cpp:'c++'
}
//  for objs v hav for in loops
// for(const key in myObj){
//     console.log(key);
// }
// for(const key in myObj){
//     console.log(myObj[key]);
// }


const arr=["js","cpp"]
for(const key in arr){
    console.log(key);
}
// 0
// 1
// arr[key]-js,cpp


// const map=new Map()
// map.set("In","iNDIA")
// map.set("USA","United States")
// map.set("fr","France")
// for(const key in map){
//     console.log(key)
// }
// not get any ans as not iterable
