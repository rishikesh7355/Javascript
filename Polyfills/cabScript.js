// *********************************** call ********************************* //
 let obj = {
    firstname: 'Rishikesh',
    skills: 'React'

 }
 function display(exp) {
    console.log(`My name is ${this.firstname} skilled in ${this.skills} with ${exp} YOE `);
 }

// display.call(obj,3);

Function.prototype.myCall = function(context={}, ...args) {
    //base case
    if(typeof this !== 'function'){
        throw new Error (this + 'it is not callable')
    }
    context.fn = this;
    context.fn(...args);

}
console.log(this);

display.myCall(obj,4)