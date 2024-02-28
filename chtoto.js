'use strict';

let a =52
let result =a;
console.log('started');
while (a>=2) {
    console.log (`${result}*(${a}-1)`);
    result=result*(a-1);
    
    a--;
}
console.log('result=',result);