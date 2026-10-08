let num = parseFloat(process.argv[2]);

if (Number.isInteger(num)) {
    console.log("Integer");
} else {
    console.log("Float");
}

// let num = process.argv[2];

// if (num % 1 === 0) {
//     console.log("Integer");
// } else {
//     console.log("Float");
// }