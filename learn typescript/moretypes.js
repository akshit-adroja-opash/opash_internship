var response = "45";
var numerclength = response.length;
var booking = '{"name": "the psycology of money"}';
var bookobj = JSON.parse(booking);
console.log("Book name is ".concat(bookobj.name));
var inputelement = document.getElementById("username");
inputelement.value = "akshit";
var value;
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
var data = "hello world";
var strdata = data;
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
