// const time = new Date().getHours();
// let greeting;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }


const numbers = [10, 5, 80, 2, 45];
let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
    if (numbers[i] < min) min = numbers[i];
}

console.log(max, min); 