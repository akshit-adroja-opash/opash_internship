// let message = "Hello, World!";
// console.log(message);

// let a =10;
// let b =20;
// console.log(a*b);

// const NAME = "John Doe";
// let age = 30;
// let DATE_OF_BIRTH = "1993-01-01";
// console.log(`Name: ${NAME}, Age: ${age}, Date of Birth: ${DATE_OF_BIRTH}`);


let a = Number(prompt("Enter first number:"));
let b = Number(prompt("Enter second number:"));

let sum = a + b;

if (sum % 2 === 0) {
  console.log("Sum = " + sum + " (Even)");
} else {
  console.log("Sum = " + sum + " (Odd)");
}

