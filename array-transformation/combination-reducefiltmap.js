const arr = [
    { firstName: "suraj", lastName: "tiwari", age: 26 },
    { firstName: "Nikhil", lastName: "tiwari", age: 40 },
    { firstName: "Alok", lastName: "Updaya", age: 30 },
    { firstName: "Piyush", lastName: "Mishra", age: 30 },
]
const arrmp = arr.map()
console.log(arr[1].age)
// const arrfiltered = arr.filter(x => x.age >= 28).map(x => x.firstName + " " + x.lastName);

// console.log(arrfiltered);


// const reducecomb = arr.reduce((a,c)=>{
//     if(a[c.age]){
//         a[c.age] = ++a[c.age];

//     }

//     else {
//         a[c.age]=1;
//     }
//     return a;
// },{})

// console.log(reducecomb)


function countAges(arr){
    const a = {};
    for(const x of arr){
        if(a[x.age]){  
//! accumulator -->previous value accumulated 
//! a[array index= x.age]  

arr[x.age]
            a[x.age]++;
        }
        else{
            a[x.age] = 1;
        }
    }
    return a;
}


function traver(arr){
    const a = {};
    for ( const x of arr){
        // console.log(x.age);
        a["age"] = x.age;
    }
    return a;
}
 console.log(traver(arr))

// console.log(countAges(arr))



