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

// function getData (dataID) {

//   setTimeout ( function () {
//     console.log("Fetching data from database...");
//     dataID = 1001;
//   } , 3000 );

//   getData(1 ,  () =>{
//     getData(2);

//   });
  

  
// }

// Promises

// let promise = new Promise ( function (resolve , reject) { 
//   console.log("i  promise"); 
//   resolve ( "Promise resolved successfully");
// }
// )


// const getPromise = () => {
//   return new Promise ( (resolve , reject) => {
//     console.log("i am inside promise");
//     resolve("Promise resolved successfully");

//     reject("Promise rejected");
//   });
// };

// let Promise = getPromise();
// Promise.then(() => {
//   console.log("Promise resolved successfully");
// });

// Promise.catch(() => {
//   console.log("Promise rejected");
// });


// Async Await

function api (){
  return new Promise ( (resolve , reject) => {    
  setTimeout ( () => {
    console.log("wether data");
    resolve( 200 ,  "data received successfully");
  } , 3000 );  
  });
}

async function getwhetherdata () {
  await api (); 
  console. log("processing data 1 "); 
  await api ();  
  console.log("processing data 2 ");  
  await api ();
  console.log("data received successfully ");
  await api ();
  console.log("data saved to db ");
   
}