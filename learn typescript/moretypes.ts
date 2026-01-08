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
