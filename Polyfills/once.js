///////////////////// Once Polyfill //////////////////////////////
function dummy(arg) {
    console.log( arg + ' It should be called only once')
}

dummy('warning');
dummy('warning');
dummy('warning');
dummy('warning');


function once(func, context) {
    let ran;
    return function() {
        if(func){
            ran = func.apply(context || this, arguments);
            func=null
        }
        return ran;
}
}

const ans = once(dummy('hello'));
ans('hello')
ans('hello')
ans('hello')
ans('hello')