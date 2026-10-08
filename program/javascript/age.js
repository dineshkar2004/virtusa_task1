let dob = process.argv[2];

let birthDate = new Date(dob);
let today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
     today.getDate() < birthDate.getDate())
) {
    age--;
}

console.log("Age:", age);