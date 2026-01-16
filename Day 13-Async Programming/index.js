// Synchronous Code and Asynchronous Code Example

// console.log("1");
// console.log("2");
// console.log("3");

// function hello() {
//   console.log("Hello World");
// }
// setTimeout(hello, 6000);

// console.log("4");
// console.log("5");


//callback function example 

// function sum(a, b, ) {
//   console.log(a + b);
// }

// function calculate(a, b, sumcallback) {
//   sumcallback(a, b);
// }
//  calculate(1 , 2 , sum);

// callback hell

function getData (dataID) {

  setTimeout ( function () {
    console.log("Fetching data from database...");
    dataID = 1001;
  } , 3000 );

  getData(1 ,  () =>{
    getData(2);

  });
  

  
}

// Promises

let promise = new Promise ( function (resolve , reject) { 
  console.log("i  promise"); 
  resolve ( "Promise resolved successfully");
}
)
