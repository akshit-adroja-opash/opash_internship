let response: any = "45";

let numerclength : number = (response as string).length;

type book = {
    name: string;

}

let booking = '{"name": "the psycology of money"}';
let bookobj: book = JSON.parse(booking) as book;

console.log(`Book name is ${bookobj.name}`);

const inputelement = document.getElementById("username") as HTMLInputElement;
inputelement.value = "akshit";



let value: unknown

value = "chai"
value = [1,2,3,]
value = 2.5
if (typeof value === "string"){
    value.toUpperCase()
}

try{

} catch (error: any){
    if (error instanceof Error)
{

     console.log(error.message);
}
console.log("error",error);

}





const data : unknown = "hello world";
const strdata = data as string;

type role = "admin" | "user" | "superadmin";
function redirectbasedinrole(role: role): void  {
    if (role === "admin"){
        console.log("redirect to admin dashboard");
    return;
    }
    if (role === "user"){
        console.log("redirect to user dashboard");
    return;
    }

   role ;
}

function neverreturn():never{
  while(true){
    console.log("this function never returns");
  }
}