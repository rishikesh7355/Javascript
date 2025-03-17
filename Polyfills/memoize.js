function largeProduct(a,b){
    // for(let i=1;i<=100000000;i++){}
    return a*b;
}
console.time('first call');
console.log(largeProduct(2345,2345));
console.timeEnd('first call ')

console.time('second call');
console.log(largeProduct(2345,2345));
console.timeEnd('second call ')


function  myMemoize(fn, context) {
    let res={}
    return function(...args) {
        var cache = JSON.stringify(args);
        if(!res[cache]){
            res[cache] = fn.call(context || this, ...args)
        }
        return res[cache];
    }
}
// res= {
//     '10, 10': 30
// }
const memoizedProduct = myMemoize(largeProduct);

console.time('first call');
console.log(memoizedProduct(2345,2345));
console.timeEnd('first call ')

console.time('second call');
console.log(memoizedProduct(2345,2345));
console.timeEnd('second call ')

