function areAnagrams(first: string, second: string): boolean {
    let firsts:String = first.toLowerCase();
    let seconds:String = second.toLowerCase();

    let a = firsts.split("").sort().join("");
    let b = seconds.split("").sort().join("");

    return a === b;
}

let first = process.argv[2];
let second = process.argv[3];

console.log(areAnagrams(first, second));