function add(a: number, b: number): number;
function add(a: number, b: number, c: number): number;

function add(a: number, b: number, c?: number): number {
    if (c !== undefined) {
        return a + b + c;
    }
    return a + b;
}

console.log(add(10, 20));
console.log(add(10, 20, 30));