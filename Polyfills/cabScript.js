// *********************************** call ********************************* //
 let obj = {
    firstname: 'Rishikesh',
    skills: 'React'

 }
 function dummyFunction(exp) {
    console.log(`My name is ${this.firstname} skilled in ${this.skills} with ${exp} YOE `);
 }

// display.call(obj,3);
// display.apply(obj,[3])

// Function.prototype.myCall = function(context={}, ...args) {
//     //base case
//     if(typeof this !== 'function'){
//         throw new Error (this + 'it is not callable')
//     }
//     context.fn = this;
//     context.fn(...args);

// }
// console.log(this);

// dummyFunction.myCall(obj,4)

// ******************************** apply ********************************* // 

// Function.prototype.myApply = function(context={}, args=[]) {
//       if(typeof this !== 'function'){
//          throw new Error (this + 'it is not callable');
//       }
//       if(!Array.isArray(args)  ){
//          throw new TypeError("CreatedListFromArrayLike called on non-object")
//       }
//       context.fn = this;
//       context.fn(...args);
// }
// dummyFunction.apply(obj,[4]);


// ****************************** bind *************************************//

// const newFunc = dummyFunction.bind(obj); // provide arguments here 
// console.log(newFunc()); // or can provide arguments here also

Function.prototype.myBind = function(context = {}, ...args){
   if(typeof this !== 'function') {
      throw new Error(this + 'cannot be bound as it is not callable');
   }
   context.fn =this;
   //return new function
   return function (...newArgs){
      // extra  newArgs because arguments can be paased along with newfunc also like check(3)
      return context.fn(...args, ...newArgs);
   }
}

const check = dummyFunction.myBind(obj,3);
console.log(check())