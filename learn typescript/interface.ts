type ChaiOrder = {
    type: string;
    sugar: number;
    milk: boolean;
}
 
function makechai(order: {type: string; sugar: number; milk: boolean}) {
    console.log(order);
    
}
function serverchai(order: {type: string; sugar: number; milk: boolean}) {
    console.log(order);
    
}

type  CoffeeOrder = {
    type: string;
    water: number;
    milk: boolean;
}

class milkCoffee  implements CoffeeOrder {
    
    type ="masala ";
    water = 200
    sugar = 10;
    milk: boolean = true;
}

interface cupsize  {
    size : "small" | "large" 
}

 class chai implements cupsize 
 { 
    size: "small" | "large" = "large";
 }

 type response = {ok:true} | {ok:false} 
 class myres implements response                    
                                 
  {
    ok: boolean = true ;
}