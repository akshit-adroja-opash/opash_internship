"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let response = "45";
let numerclength = response.length;
let booking = '{"name": "the psycology of money"}';
let bookobj = JSON.parse(booking);
console.log(`Book name is ${bookobj.name}`);
const inputelement = document.getElementById("username");
inputelement.value = "akshit";
let value;
value = "chai";
value = [1, 2, 3,];
value = 2.5;
if (typeof value === "string") {
    value.toUpperCase();
}
try {
}
catch (error) {
    if (error instanceof Error) {
        console.log(error.message);
    }
    console.log("error", error);
}
const data = "hello world";
const strdata = data;
function redirectbasedinrole(role) {
    if (role === "admin") {
        console.log("redirect to admin dashboard");
        return;
    }
    if (role === "user") {
        console.log("redirect to user dashboard");
        return;
    }
    role;
}
function neverreturn() {
    while (true) {
        console.log("this function never returns");
    }
}
//# sourceMappingURL=moretypes.js.map