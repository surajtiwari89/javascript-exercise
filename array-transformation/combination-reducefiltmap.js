const arr = [
    { firstName: "suraj", lastName: "tiwari", age: 26 },
    { firstName: "Nikhil", lastName: "tiwari", age: 40 },
    { firstName: "Alok", lastName: "Updaya", age: 30 },
    { firstName: "Piyush", lastName: "Mishra", age: 30 },
]

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
        const age = x.age;
        if(a[age]){
            a[age]++;
        }
        else{
            a[age] = 1;
        }
    }
    return a;
}


console.log(countAges(arr))



