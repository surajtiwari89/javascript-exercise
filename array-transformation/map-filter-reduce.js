const arr = [1,3,5,60]

const nwarr = arr.map((a)=>a*2);
console.log(nwarr);

const nwarr1 = arr.map(a => a*2); //! here different variation of arrow fn
console.log(nwarr1) 
const revarr= arr.reverse();
console.log(revarr)

const fltarr = arr.filter((a)=>a%10===0); //! here it compares for true 
console.log(fltarr);

const redarr = arr.reduce((acc,cur)=>acc+cur); //! intial value 0 --> 0+1=1 -> 1+3=4 -> 4+5=9 -> 9+60=69;

const redarrsub = arr.reduce((a,c)=>a-c);

console.log(redarr);
console.log(redarrsub);

const redarrreal = arr.reduce(function(sum,arrvalue){
    sum=sum+arrvalue;
return sum;
},0);//! we provide the initial value in as second argument 
console.log(redarrreal)
console.log("new")

// similar to 
function reducefn(arrvalue){
 let sum = 0
   for(let i = 0;i<arr.length;i++) {
    sum = sum + arr[i];
   }
   return sum;
   }

console.log(reducefn(arr));

//! finding max in the array 

const maxarr = arr.reduce((max,arrvlu)=>{
    if(arrvlu>max){
        max=arrvlu;
    }
    return max;
},0)
console.log(maxarr)