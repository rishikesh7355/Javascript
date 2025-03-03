///// map /////
//arr.map((arr[i], i, arr) => {}) ///

// Array.prototype.myMap = function (cb) {
//     let temp=[];
//     for(let i=0;i<this.length;i++){
//         temp.push(cb(this[i], i, this ));
//     }
//     return temp;
// } 

// const arr=[1,2,3,4,5];
// const customMap = arr.myMap((ele) => { return ele*2 });
// console.log(customMap);


//// filter ////
// arr.filter((arr[i], i, arr) => return {i >2});

// Array.prototype.myFilter = function(cb) {
//     let temp=[];
//     for(let i=0; i<this.length;i++){
//         if(cb[this[i], i, this]){
//             temp.push_back(this[i]);
//         }
//     }
//     return temp;
// }

// const arr=[1,2,3,4,5];
// // one argument to no return keyword expected
// const customFilter = arr.filter( ele => ele>2);
// console.log(customFilter);


///// reduce ////
// arr.reduce((acc, curr, i, arr) => {}, initalval}

Array.prototype.myReduce = function(cb, initialValue) {
    var accumulator = initialValue;
   for(let i=0;i<this.length;i++){
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
   }
   return accumulator;
}

let arr = [1,2,3,4,5];
const customReduce = arr.myReduce(((acc, curr, i, arrr) => {return acc + curr}),0);
console.log(customReduce);
