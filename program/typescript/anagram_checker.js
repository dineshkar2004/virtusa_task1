"use strict";
function areAnagrams(first, second) {
    let firsts = first.toLowerCase();
    let seconds = second.toLowerCase();
    let a = firsts.split("").sort().join("");
    let b = seconds.split("").sort().join("");
    return a === b;
}
let first = process.argv[2];
let second = process.argv[3];
console.log(areAnagrams(first, second));
