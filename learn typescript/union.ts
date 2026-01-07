let subs : number | string = "10m"

let apirequeststatus : "pending" | "success" | "error" = "pending"  
apirequeststatus = "success"


const orders = [ '10', "20", '30' ] 
let  currentorder: string | undefined ;

 for(let order of orders){
    if(order === '20'){
        currentorder = order
        break;
    }
    currentorder = "11";

 } 
 console.log(currentorder);
 