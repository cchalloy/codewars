// https://www.codewars.com/kata/592915cc1fad49252f000006

const noIfsNoButs = function (a,b) {
    let s = Math.sign(a-b);
    let result = null;
    
    switch (s) {
        case 1: result = a + " is greater than " + b; break;
        case -1: result = a + " is smaller to " + b; break;
        default: result = a + " is equal to " + b;
    }

    return result;
}

/** other solution */
const noIfsNoButs2 = (a,b) => {
    return `${a} is ${(a > b && 'greater than') || (a < b && 'smaller than') || 'equal to'} ${b}`
} 
